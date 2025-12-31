import { LucideIcon, Brain, Codepen, Database, MessageSquare, ShoppingCart, BarChart3, Video, Mic } from "lucide-react";

export type Project = {
    id: string;
    slug: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    icon: any; // LucideIcon
    fullDescription: string;
    features: string[];
    mermaidCode: string;
};

export const PROJECTS: Project[] = [
    {
        id: "wms-gpt",
        slug: "wms-gpt",
        title: "Warehouse AI Tutor (WMS-GPT)",
        description: "LLM-powered onboarding assistant using RAG + LangChain; improved knowledge retrieval and onboarding efficiency.",
        tags: ["FastAPI", "RAG", "LangChain", "React", "OpenAI"],
        icon: Brain,
        fullDescription: "A sophisticated onboarding companion for warehouse management systems. By indexing vast amounts of technical documentation and process manuals into a vector database, WMS-GPT allows new employees to ask natural language questions and receive accurate, context-aware answers. This drastically reduced the time-to-productivity for new hires.",
        features: [
            "Real-time RAG (Retrieval-Augmented Generation) pipeline",
            "Vector embedding of 500+ pages of WMS documentation",
            "Chat interface with citation support",
            "Admin dashboard for updating knowledge base",
        ],
        mermaidCode: `
      sequenceDiagram
          participant User
          participant API
          participant Pinecone
          participant GPT4
          
          User->>API: Sends Query ("How to restock?")
          API->>API: Create Embedding
          API->>Pinecone: Semantic Search (Query Vector)
          Pinecone-->>API: Returns Top 5 Chunks
          API->>GPT4: Send Context + Query
          GPT4-->>API: Generated Answer
          API-->>User: Returns Answer + Sources
    `,
    },
    {
        id: "matrimony-prompt",
        slug: "matrimony-prompt",
        title: "Matrimonial Matching App",
        description: "Designed full product logic using prompt engineering; eliminated backend logic and reduced development complexity.",
        tags: ["Prompt Engineering", "No-Backend", "GPT-4", "System Design"],
        icon: MessageSquare,
        fullDescription: "An experimental approach to app development where the complex business logic of matchmaking (compatibility scoring, preference filtering, and profile analysis) was offloaded entirely to advanced LLM prompts. This 'logic-via-prompting' method eliminated the need for a traditional complex backend codebase.",
        features: [
            "Zero-code matchmaking logic",
            "Nuanced personality analysis via LLM",
            "Natural language match explanations",
            "Rapid iteration of business rules via prompt updates",
        ],
        mermaidCode: `
      flowchart TD
          A[User Profile JSON] --> B(System Prompt)
          C[Partner Preferences] --> B
          B --> D{GPT-4 Logic}
          D -->|Analysis| E[Compatibility Score]
          D -->|Reasoning| F[Match Explanation]
          E --> G[Final JSON Response]
          F --> G
    `,
    },
    {
        id: "shopify-genai",
        slug: "shopify-genai",
        title: "Shopify GenAI Tagger",
        description: "Automated product tagging using GPT-based generation; improved tagging consistency and reduced manual workload.",
        tags: ["Shopify API", "Automation", "Python", "GPT-3.5"],
        icon: ShoppingCart,
        fullDescription: "An automation service for e-commerce stores that analyzes product images and descriptions to automatically generate SEO-optimized tags, categories, and attributes. This system cleaned up a catalog of 10,000+ items and ensured consistent metadata.",
        features: [
            "Batch processing of Shopify Webhooks",
            "Image content analysis (GPT-4 Vision)",
            "SEO keyword extraction",
            "Automated write-back to Shopify Admin API",
        ],
        mermaidCode: `
      stateDiagram-v2
          [*] --> WebhookReceived
          WebhookReceived --> FetchMetrics : Product Created
          FetchMetrics --> GPTVision : Image URL
          GPTVision --> JSONExtraction : Analyze Styles
          JSONExtraction --> ShopifyAPI : PATCH /products/{id}
          ShopifyAPI --> [*] : Tags Updated
    `,
    },
    {
        id: "sales-kpi",
        slug: "sales-kpi",
        title: "Sales KPI Dashboard",
        description: "Designed BI dashboard enabling forecasting and data-driven decisions for sales leadership.",
        tags: ["React", "D3.js", "Data Visualization", "Analytics"],
        icon: BarChart3,
        fullDescription: "A high-performance business intelligence dashboard designed for real-time sales tracking. Features interactive forecasting models and breakdown of revenue by region, agent, and product line, helping leadership make data-backed decisions.",
        features: [
            "Real-time WebSocket data updates",
            "Interactive charts (Line, Bar, Heatmap)",
            "Predictive forecasting toggle",
            "Role-based access control",
        ],
        mermaidCode: `
      classDiagram
          class DashboardUI {
              +renderCharts()
              +subscribeWebSocket()
          }
          class DataAggregator {
              +processSales()
              +computeForecast()
          }
          class WebSocketServer {
              +broadcastUpdates()
          }
          
          DashboardUI <.. WebSocketServer : Real-time Feed
          WebSocketServer <.. DataAggregator : New Data
    `,
    },
    {
        id: "video-gen",
        slug: "video-gen",
        title: "Video Generation Model",
        description: "Built text-to-video pipeline for realistic human-like output.",
        tags: ["Diffusers", "Python", "Stable Diffusion", "Video AI"],
        icon: Video,
        fullDescription: "A pipeline exploring the frontiers of generative video. By fine-tuning diffusion models and using temporal consistency techniques, this project achieved realistic short-form video generation from text prompts, useful for marketing content creation.",
        features: [
            "Text-to-Video generation",
            "Style transfer capabilities",
            "Temporal smoothing post-processing",
            "Custom LoRA training for specific characters",
        ],
        mermaidCode: `
      flowchart LR
          A[Text Prompt] --> B(CLIP Encoder)
          B --> C{Diffusion UNet}
          C --> D[Latent Frames]
          D --> E[Temporal Smoothing]
          E --> F[VAE Decoder]
          F --> G[MP4 Video]
    `,
    },
    {
        id: "text-to-audio",
        slug: "text-to-audio",
        title: "Text-to-Audio Engine",
        description: "Developed speech synthesis system comparable to ElevenLabs quality.",
        tags: ["TTS", "Python", "PyTorch", "Audio Processing"],
        icon: Mic,
        fullDescription: "A high-fidelity text-to-speech engine capable of cloning voices and generating emotional speech. Built using modern transformer-based TTS architectures, offering low-latency synthesis for real-time applications.",
        features: [
            "Voice Cloning from 3s sample",
            "Emotion control (Happy, Sad, Angry)",
            "Multi-language support",
            "Streaming audio output",
        ],
        mermaidCode: `
      sequenceDiagram
          User->>Model: Text + Speaker Ref
          Model->>Encoder: Extract Phonemes
          Model->>Vocoder: Generate Waveform (Mel-Spec)
          Vocoder-->>Stream: Returns Audio Bytes
          Stream-->>User: Playback
    `,
    },
];
