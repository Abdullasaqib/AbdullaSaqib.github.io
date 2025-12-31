import React from "react";

export const TechIcons: Record<string, React.FC<{ className?: string }>> = {
    React: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#222222" />
            <path d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5Z" stroke="#61DAFB" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(25 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(-25 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
    ),
    NextJS: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white" />
            <path d="M14.5 16.5L8.5 7V17M14.5 7V17" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    TypeScript: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
            <path d="M11.8 17H10.2V16.2C10.2 15.64 10.28 15.22 10.44 14.94C10.6 14.66 10.9 14.36 11.34 14.04C11.66 13.8 11.84 13.62 11.88 13.5C11.92 13.38 11.94 13.26 11.94 13.14C11.94 12.82 11.83 12.59 11.61 12.45C11.39 12.31 11.08 12.24 10.68 12.24C10.24 12.24 9.87 12.35 9.57 12.57C9.27 12.79 9.09 13.13 9.03 13.59L7.56 12.96C7.72 12.24 8.08 11.66 8.64 11.22C9.2 10.78 9.92 10.56 10.8 10.56C11.84 10.56 12.64 10.83 13.2 11.37C13.76 11.91 14.04 12.63 14.04 13.53C14.04 13.97 13.97 14.36 13.83 14.7C13.69 15.04 13.43 15.42 13.05 15.84L12.36 16.62H14.16V18H9.6V17.1L11.8 17ZM17.43 18H15.87V12.15H14.16V10.71H19.14V12.15H17.43V18Z" fill="white" />
        </svg>
    ),
    Python: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <defs>
                <linearGradient id="python-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3776AB" />
                    <stop offset="100%" stopColor="#FFD43B" />
                </linearGradient>
            </defs>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4.5C13.2 4.5 14.2 4.6 15.1 4.8L15.4 6.9H11.5V8.1H16.3C16.3 8.7 16.2 9.3 16 9.8L13.1 12L10.9 9.8L12 8.7L14.2 10.9L15.3 10.1C15.4 9.8 15.5 9.5 15.5 9.2V7.9H10.5V5.9H13.8C13.3 5.7 12.7 5.6 12 5.6C9.6 5.6 7.5 7.1 6.7 9.2L8.5 10.5C9.1 9.2 10.4 8.2 12 8.2V9.4H9.4V11.2H14.5V10.1H9.9V9.4H12ZM9.8 12L12.7 14.2L14.9 12L13.8 10.9L11.6 13.1L10.5 12.3C10.4 12.6 10.3 12.9 10.3 13.2V14.5H15.3V16.5H12C12.7 16.7 13.3 16.8 14 16.8C16.4 16.8 18.5 15.3 19.3 13.2L17.5 11.9C16.9 13.2 15.6 14.2 14 14.2V13H16.6V11.2H11.5V12.3H16.1V13H14V12Z" fill="url(#python-grad)" />
        </svg>
    ),
    Tailwind: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12.0001 6C12.0001 6 13.5 2 16.5 2C19.5 2 22 5 22 9C22 13 18 15 15 15C12 15 10.5 11 10.5 11C10.5 11 9 15 6 15C3 15 0.5 12 0.5 8C0.5 4 4.5 2 7.5 2C10.5 2 12.0001 6 12.0001 6Z" fill="#38B2AC" stroke="#38B2AC" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M12.0001 18C12.0001 18 13.5 14 16.5 14C19.5 14 22 17 22 21C22 25 18 27 15 27C12 27 10.5 23 10.5 23C10.5 23 9 27 6 27C3 27 0.5 24 0.5 20C0.5 16 4.5 14 7.5 14C10.5 14 12.0001 18 12.0001 18Z" fill="#38B2AC" stroke="#38B2AC" strokeWidth="1.5" strokeLinejoin="round" transform="translate(0 -6)" />
        </svg>
    ),
    NodeJS: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#339933" />
            <path d="M12 22V12" stroke="#222" strokeWidth="1.5" />
            <path d="M12 12L2 7" stroke="#222" strokeWidth="1.5" />
            <path d="M12 12L22 7" stroke="#222" strokeWidth="1.5" />
        </svg>
    ),
    OpenAI: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="10" fill="white" stroke="black" strokeWidth="1.5" />
            <path d="M12 6V10M12 14V18" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6.8 9L10.27 11M13.73 13L17.2 15" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6.8 15L10.27 13M13.73 11L17.2 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    FastAPI: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="10" fill="#009688" />
            <path d="M12 6L15 10H13V13H16L12 18L9 14H11V11H8L12 6Z" fill="white" />
        </svg>
    ),
    LangChain: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" stroke="#F0F0F0" strokeWidth="2" />
            <path d="M8 12H16" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 8V16" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="12" r="2" fill="white" />
        </svg>
    ),
    Docker: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M22 15L20.2 13.9C19.6 13.5 18.9 14 18.9 14.7V17L22 15Z" fill="#2496ED" />
            <path d="M2.25 15C1.84 15 1.5 15.34 1.5 15.75V17.25C1.5 17.66 1.84 18 2.25 18H4.75C5.16 18 5.5 17.66 5.5 17.25V15.75C5.5 15.34 5.16 15 4.75 15H2.25Z" fill="#2496ED" />
            <path d="M6.75 15C6.34 15 6 15.34 6 15.75V17.25C6 17.66 6.34 18 6.75 18H9.25C9.66 18 10 17.66 10 17.25V15.75C10 15.34 9.66 15 9.25 15H6.75Z" fill="#2496ED" />
            <path d="M6.75 11.5C6.34 11.5 6 11.84 6 12.25V13.75C6 14.16 6.34 14.5 6.75 14.5H9.25C9.66 14.5 10 14.16 10 13.75V12.25C10 11.84 9.66 11.5 9.25 11.5H6.75Z" fill="#2496ED" />
            <path d="M11.25 15C10.84 15 10.5 15.34 10.5 15.75V17.25C10.5 17.66 10.84 18 11.25 18H13.75C14.16 18 14.5 17.66 14.5 17.25V15.75C14.5 15.34 14.16 15 13.75 15H11.25Z" fill="#2496ED" />
            <path d="M11.25 11.5C10.84 11.5 10.5 11.84 10.5 12.25V13.75C10.5 14.16 10.84 14.5 11.25 14.5H13.75C14.16 14.5 14.5 14.16 14.5 13.75V12.25C14.5 11.84 14.16 11.5 13.75 11.5H11.25Z" fill="#2496ED" />
            <path d="M11.25 8C10.84 8 10.5 8.34 10.5 8.75V10.25C10.5 10.66 10.84 11 11.25 11H13.75C14.16 11 14.5 10.66 14.5 10.25V8.75C14.5 8.34 14.16 8 13.75 8H11.25Z" fill="#2496ED" />
            <path d="M15.75 15C15.34 15 15 15.34 15 15.75V17.25C15 17.66 15.34 18 15.75 18H18.25C18.66 18 19 17.66 19 17.25V15.75C19 15.34 18.66 15 18.25 15H15.75Z" fill="#2496ED" />
            <path d="M15.75 11.5C15.34 11.5 15 11.84 15 12.25V13.75C15 14.16 15.34 14.5 15.75 14.5H18.25C18.66 14.5 19 14.16 19 13.75V12.25C19 11.84 18.66 11.5 18.25 11.5H15.75Z" fill="#2496ED" />
            <path d="M15.75 8C15.34 8 15 8.34 15 8.75V10.25C15 10.66 15.34 11 15.75 11H18.25C18.66 11 19 10.66 19 10.25V8.75C19 8.34 18.66 8 18.25 8H15.75Z" fill="#2496ED" />
            <path d="M22.05 18.65C23.0833 18.7333 24 19 24 19.3333C24 20.8067 18.85 22 12.5 22C6.15 22 1 20.8067 1 19.3333C1 18.0667 4.1 16.99 8.5 16.71L12.5 16.7L18.9 16.89L22.05 18.65Z" fill="#2496ED" />
        </svg>
    ),
    AWS: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M13.8 14.8C16.1 14.6 17 12.5 17 12.5C17 12.5 16 13.3 14.5 13.3C13 13.3 12.5 12.5 12.5 11.8C12.5 11.1 13 10.5 14 10.5C15 10.5 15.6 10.9 15.6 10.9L16.2 9.4C16.2 9.4 15.3 8.8 13.8 8.8C11.5 8.8 10 10.3 10 11.8C10 13.3 11.5 15 13.8 14.8ZM9 12.5C9 12.5 7.5 12.5 7.5 14.8H5C5 14.8 5 11 9 11V9.5H10.5V12.5C10.5 12.5 10.5 13.5 11.5 13.5H9V12.5ZM18.5 17.5C18.5 17.5 16.5 19 12 19C7.5 19 5.5 17.5 5.5 17.5L5 18C5 18 7.5 20 12 20C16.5 20 19 18 19 18L18.5 17.5ZM15.5 17.5L16 16.5C16 16.5 17.5 17.5 18.5 16L19 16.5C19 16.5 18 18.5 15.5 17.5Z" fill="#F90" />
        </svg>
    ),
    Mongo: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 2C12.6 3.1 13 10 13 11.6C16 11.6 17 13.1 17 14.6C17 18.1 13.5 21 12 22V2ZM12 2C11.4 3.1 11 10 11 11.6C8 11.6 7 13.1 7 14.6C7 18.1 10.5 21 12 22V2Z" fill="#47A248" />
            <path d="M12 2C12.6 3.1 13 10 13 11.6C13 10.9 12.9 8.2 12.6 6.3C12.3 4.4 12 2 12 2ZM12 2C11.4 3.1 11 10 11 11.6C11 10.9 11.1 8.2 11.4 6.3C11.7 4.4 12 2 12 2Z" fill="#E6E6E6" opacity="0.3" />
        </svg>
    ),
    Postgres: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6 10C6 8.9 6.9 8 8 8H9V10H8V14L10 16L12 14V11H10.5V10H14V13L11 16L6 11V10ZM15 16C13.9 16 13 15.1 13 14V11H15V13.5L16.5 12L15.5 11H18V13L16 15L18 17H16L15 16Z" fill="#336791" />
        </svg>
    ),
    Firebase: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M3.7 17.5L5.6 3.6L9.6 11.6L3.7 17.5ZM13 11.2L12 2.5L7.7 11.4L13 11.2ZM19.5 17L21 6.3L15.5 12.2L19.5 17ZM19.5 17L13.5 11.2L11 13.8L4.3 18C4.3 18 10.2 21.6 10.3 21.6C11 22 11.8 22 12.5 21.6L19.5 17Z" fill="#FFCA28" />
        </svg>
    ),
    Git: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="9" cy="9" r="2" fill="#F05032" />
            <circle cx="18" cy="9" r="2" fill="#F05032" />
            <circle cx="6" cy="18" r="2" fill="#F05032" />
            <path d="M9 11V15M11 9H16" stroke="#F05032" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    Pinecone: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
            <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="1.5" />
            <path d="M7 7L17 17M17 7L7 17" stroke="white" strokeWidth="1.5" />
        </svg>
    ),
    HuggingFace: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M4 18C4 18 5 21 9 21H15C19 21 20 18 20 18" stroke="#FFD21E" strokeWidth="2" strokeLinecap="round" />
            <circle cx="9" cy="10" r="1.5" fill="#FFD21E" />
            <circle cx="15" cy="10" r="1.5" fill="#FFD21E" />
            <path d="M12 2C8 2 6 5 6 5V8H18V5C18 5 16 2 12 2Z" fill="#FFD21E" />
        </svg>
    ),
    LlamaIndex: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" fill="white" stroke="#222" strokeWidth="1" />
            <path d="M12 12L8 16M12 12L16 16M12 8V12" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    Generic: ({ className }) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

export const getTechIcon = (name: string) => {
    const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (normalized.includes("react")) return TechIcons.React;
    if (normalized.includes("next")) return TechIcons.NextJS;
    if (normalized.includes("type")) return TechIcons.TypeScript;
    if (normalized.includes("python") || normalized.includes("flask")) return TechIcons.Python;
    if (normalized.includes("tail")) return TechIcons.Tailwind;
    if (normalized.includes("node")) return TechIcons.NodeJS;
    if (normalized.includes("open") || normalized.includes("gpt")) return TechIcons.OpenAI;
    if (normalized.includes("fast")) return TechIcons.FastAPI;
    if (normalized.includes("lang")) return TechIcons.LangChain;
    if (normalized.includes("dock")) return TechIcons.Docker;
    if (normalized.includes("aws")) return TechIcons.AWS;
    if (normalized.includes("mongo")) return TechIcons.Mongo;
    if (normalized.includes("postgre")) return TechIcons.Postgres;
    if (normalized.includes("fire")) return TechIcons.Firebase;
    if (normalized.includes("git")) return TechIcons.Git;
    if (normalized.includes("pine")) return TechIcons.Pinecone;
    if (normalized.includes("hugg")) return TechIcons.HuggingFace;
    if (normalized.includes("llama")) return TechIcons.LlamaIndex;

    return TechIcons.Generic;
};
