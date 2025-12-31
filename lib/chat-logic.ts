import { KNOWLEDGE_BASE, FALLBACK_ANSWER } from "./chat-data";

export function getBotResponse(input: string): string {
    const normalizedInput = input.toLowerCase().trim();

    let bestMatch = null;
    let maxScore = 0;

    for (const intent of KNOWLEDGE_BASE) {
        let score = 0;
        const weight = intent.weight || 1;

        for (const keyword of intent.keywords) {
            if (normalizedInput.includes(keyword.toLowerCase())) {
                score += weight; // Apply weight
            }
        }

        // Bonus for exact matches or high keyword density
        if (score > maxScore) {
            maxScore = score;
            bestMatch = intent;
        }
    }

    // Threshold: must match at least one relevant keyword logic
    if (maxScore > 0 && bestMatch) {
        return bestMatch.answer;
    }

    return FALLBACK_ANSWER;
}
