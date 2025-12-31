import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // 1. Get IP Address
        let ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
        if (ip.includes(",")) ip = ip.split(",")[0];

        // 2. Get Real Location (Server-Side Fetch)
        // Using ip-api.com (Free, no key for non-commercial). 
        // Note: '127.0.0.1' won't work locally, so we fallback.
        let geoData = {
            country: "Local System",
            city: "Localhost",
            isp: "Loopback"
        };

        if (ip !== "127.0.0.1" && ip !== "::1") {
            try {
                const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
                const geo = await geoRes.json();
                if (geo.status === "success") {
                    geoData = {
                        country: geo.country,
                        city: geo.city,
                        isp: geo.isp
                    };
                }
            } catch (error) {
                console.error("Geo lookup failed", error);
            }
        }

        const visitorData = {
            ip,
            ...geoData,
            ...body, // Client sent: screen, language, referrer
            userAgent: req.headers.get("user-agent"),
            capturedAt: new Date().toLocaleString(),
        };

        // 3. Save to JSON File
        const dataDir = path.join(process.cwd(), "data");
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        const filePath = path.join(dataDir, "visitors.json");
        let visitors = [];

        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, "utf-8");
            try {
                visitors = JSON.parse(fileContent);
                if (!Array.isArray(visitors)) visitors = [];
            } catch (e) {
                visitors = [];
            }
        }

        visitors.push(visitorData);
        fs.writeFileSync(filePath, JSON.stringify(visitors, null, 2));

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Tracking error:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
