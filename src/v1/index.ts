export type BowlingFrame = {
    roll1: number;
    roll2: number;
    hasBonus: 'spare' | 'strike' | null
}

const hasBonus = (frame: BowlingFrame): Boolean => {
    return frame.hasBonus !== null;
};

const isStrikeBonus = (frame: BowlingFrame): Boolean => {
    return frame.hasBonus !== null && frame.hasBonus === 'strike';
};

const isSpareBonus = (frame: BowlingFrame): Boolean => {
    return frame.hasBonus !== null && frame.hasBonus === 'spare';
};

export function getScore(bowlingFrames: BowlingFrame[]): number {
    const result = bowlingFrames.reduce<{
        score: number,
        finalFrames: { result: number }[]
    }>((acc, frame, index) => {
        if (index > 9) {
            return acc;
        }

        const basicScore = acc.score + frame.roll1 + frame.roll2;
        let bonus = 0;

        if (hasBonus(frame)) {
            const nextFrame = bowlingFrames[index + 1];
            const nextNextFrame = bowlingFrames[index + 2];

            if (isStrikeBonus(frame)) {
                if (isStrikeBonus(nextFrame)) {
                    bonus = nextFrame.roll1 + nextNextFrame.roll1;
                } else {
                    bonus = nextFrame.roll1 + nextFrame.roll2;
                }

            } else if (isSpareBonus(frame)) {
                bonus = nextFrame.roll1;
            }
        }

        acc.finalFrames.push({ result: basicScore + bonus });

        return {
            score: basicScore + bonus,
            finalFrames: acc.finalFrames,
        };

    }, { score: 0, finalFrames: [] });

    return result.score;
}

const testFrames: BowlingFrame[] = [
    {
        roll1: 10,
        roll2: 0,
        hasBonus: 'strike',
    },
    {
        roll1: 10,
        roll2: 0,
        hasBonus: 'strike',
    },
    {
        roll1: 10,
        roll2: 0,
        hasBonus: 'strike',
    },
    {
        roll1: 10,
        roll2: 0,
        hasBonus: 'strike',
    },
    {
        roll1: 10,
        roll2: 0,
        hasBonus: 'strike',
    },
    {
        roll1: 10,
        roll2: 0,
        hasBonus: 'strike',
    },
    {
        roll1: 10,
        roll2: 0,
        hasBonus: 'strike',
    },
    {
        roll1: 10,
        roll2: 0,
        hasBonus: 'strike',
    },
    {
        roll1: 10,
        roll2: 0,
        hasBonus: 'strike',
    },
    {
        roll1: 10,
        roll2: 0,
        hasBonus: 'strike',
    },
    {
        roll1: 10,
        roll2: 10,
        hasBonus: null,
    },
];

console.log('result:', getScore(testFrames));
