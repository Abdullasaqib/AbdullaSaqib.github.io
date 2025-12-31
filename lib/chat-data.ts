export type Intent = {
    keywords: string[];
    answer: string;
    weight?: number;
};

export const KNOWLEDGE_BASE: Intent[] = [
    {
        keywords: ["who are you", "what serve you", "bot identity", "assistant"],
        answer: "I am the digital assistant for Syed Abdullah Saqib. I'm here to answer questions about his skills, experience, and projects.",
        weight: 2
    },
    {
        keywords: ["full name", "his name", "called", "who is syed", "student name"],
        answer: "His full name is Syed Abdullah Saqib.",
        weight: 5 // High priority for name queries
    },
    {
        keywords: ["skills", "stack", "tech", "technologies", "languages", "code", "programming"],
        answer: "Syed is a master of the MERN stack (MongoDB, Express, React, Node) and Python (FastAPI, Flask). He specializes in AI integrations using LangChain, OpenAI, and RAG pipelines.",
    },
    {
        keywords: ["experience", "work", "job", "career", "background", "history", "role", "current", "doing", "now"],
        answer: "Syed currently holds three key roles: Senior AI Engineer at 'Learn with Leaders' (since Dec 2025), Senior Full Stack Eng at 'CompetitivIA' (since Sep 2025), and AI Program Lead at 'Rise Smart Technology' (since Jan 2025). He previously freelanced from 2024 to early 2025.",
        weight: 3
    },
    {
        keywords: ["contact", "email", "reach", "hire", "message", "call", "phone", "number"],
        answer: "You can reach Syed directly via email at sasaqib151@gmail.com or call him at +91-9030801636.",
        weight: 2
    },
    {
        keywords: ["projects", "built", "portfolio", "work"],
        answer: "Syed has built impressive AI platforms like WMS-GPT (Warehouse Tutor), a No-Code Matrimonial App, and a Shopify GenAI Tagger. Check out the 'Projects' page for details.",
    },
    {
        keywords: ["education", "degree", "college", "school", "university", "study", "graduated", "bachelor"],
        answer: "Syed holds a B.Sc. in Mathematics from Gulbarga University (2020-2024), providing a strong foundation in logic and algorithms.",
    },
    {
        keywords: ["location", "where", "live", "city", "country", "based"],
        answer: "Syed is based in Hyderabad, India. He acts as a bridge between technical execution and strategic vision for global teams.",
    },
    {
        keywords: ["hello", "hi", "hey", "greetings", "good morning", "good evening"],
        answer: "Hello there! I'm ready to answer any questions you have about Syed's engineering capabilities.",
    },
    {
        keywords: ["pricing", "rate", "cost", "salary", "charges", "hourly"],
        answer: "For project rates or salary expectations, it's best to email him directly at sasaqib151@gmail.com.",
    },
    {
        keywords: ["ai", "llm", "rag", "gpt", "agent", "generative"],
        answer: "AI is Syed's core focus. He builds custom RAG pipelines, fine-tunes models, and orchestrates multi-agent systems using tools like LangChain and LlamaIndex.",
        weight: 2
    },
    {
        keywords: ["resume", "cv", "download resume", "curriculum vitae"],
        answer: "You can view his detailed experience on the 'Experience' page. For a PDF copy, please reach out via email.",
        weight: 2
    },
    {
        keywords: ["github", "git", "repo", "codebase", "open source"],
        answer: "You can explore his code and contributions on GitHub: github.com/sasaqib",
        weight: 2
    },
    {
        keywords: ["linkedin", "social", "connect", "network"],
        answer: "Connect with Syed on LinkedIn: linkedin.com/in/sasaqib",
        weight: 2
    },
    {
        keywords: ["availability", "available", "start", "freelance"],
        answer: "Syed is currently fully engaged with his roles but is always open to discussing high-impact consulting or collaborative opportunities.",
        weight: 2
    },
    {
        keywords: ["wms", "warehouse", "gpt", "tutor"],
        answer: "WMS-GPT is a flagship project: an AI-powered warehouse tutor. It uses RAG to digest complex operational manuals and answers staff queries instantly, reducing onboarding time by 40%.",
        weight: 3
    },
    {
        keywords: ["matrimony", "no-code", "app", "match"],
        answer: "Syed built a No-Code Matrimonial App that empowers communities to create their own matchmaking platforms without programming. It features real-time chat and secure verified profiles.",
        weight: 3
    },
    {
        keywords: ["shopify", "genai", "tagger", "e-commerce"],
        answer: "The Shopify GenAI Tagger is an automated tool that uses Vision & Text models to auto-tag products, write SEO descriptions, and categorize inventory, saving merchants hundreds of hours.",
        weight: 3
    },
    {
        keywords: ["why hire", "strength", "value", "unique"],
        answer: "Why Syed? Because he doesn't just write code; he builds *solutions*. With a rare blend of Math (logic), Full Stack (execution), and AI (innovation), he delivers scalable systems that solve real business problems.",
        weight: 2
    },
    {
        keywords: ["philosophy", "approach", "mindset", "coding style"],
        answer: "Syed believes in 'Agentic Simplicity'—complex systems should feel simple to the user. He prioritizes clean architecture, self-healing code, and user-centric design.",
    },
    {
        keywords: ["frameworks", "libraries", "tools list"],
        answer: "His arsenal includes Next.js 15, React 19, Tailwind v4, Framer Motion, LangChain, Pinecone, Supabase, and Docker. He stays on the absolute bleeding edge.",
    }
];

export const FALLBACK_ANSWER = "I don't have that specific information in my database yet. However, Syed would love to tell you more! You can email him at sasaqib151@gmail.com.";
