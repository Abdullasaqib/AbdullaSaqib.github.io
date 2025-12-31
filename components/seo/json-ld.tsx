export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Person",
            "name": "Syed Abdullah Saqib",
            "alternateName": "AbdullaSaqib",
            "jobTitle": "Senior AI Engineer",
            "description": "Expert in Agentic AI, LLM Orchestration, and Full Stack Engineering. Building the future of autonomous systems.",
            "url": "https://abdullasaqib.github.io",
            "sameAs": [
                "https://github.com/Abdullasaqib",
                "https://linkedin.com/in/abdullasaqib"
            ],
            "knowsAbout": [
                "Artificial Intelligence",
                "Large Language Models",
                "Agentic Workflows",
                "RAG Pipelines",
                "React",
                "Next.js",
                "Python"
            ],
            "alumniOf": {
                "@type": "Organization",
                "name": "Learn with Leaders"
            }
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
