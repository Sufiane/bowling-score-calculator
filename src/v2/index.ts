declare const brand: unique symbol;

type Brand<T, B extends string> = T & { readonly [brand]: B };

export type PositiveNumber = Brand<number, 'PositiveNumber'>

export type BowlingFrame = {
    roundNumber: number;
    roll1: PositiveNumber;
    roll2: PositiveNumber;
}

const LAST_ROUND_NUMBER = 10;
const STRIKE_VALUE = 10;

const isStrike = (frame: BowlingFrame): boolean => {
    return frame.roll1 === STRIKE_VALUE;
};

const isSpare = (frame: BowlingFrame): boolean => {
    return (frame.roll1 + frame.roll2) === STRIKE_VALUE;
};

const hasBonus = (frame: BowlingFrame): boolean => {
    return isStrike(frame) || isSpare(frame);
};

const validateInput = (frames: BowlingFrame[]): void => {
    if (frames.length < 10) {
        throw new Error('missing_frames');
    }

    if (frames.length > 11) {
        throw new Error('too_much_frames');
    }
};

const handleBonusScoring = (
    currentFrame: BowlingFrame,
    currentIndex: number,
    bowlingFrames: BowlingFrame[],
): number => {
    if (!hasBonus(currentFrame)) {
        return 0;
    }

    const nextFrame = bowlingFrames[currentIndex + 1];

    if (isStrike(currentFrame)) {
        if (isStrike(nextFrame)) {
            const nextNextFrame = currentFrame.roundNumber !== LAST_ROUND_NUMBER
                                  ? bowlingFrames[currentIndex + 2]
                                  : { roll1: nextFrame.roll2 };

            return nextFrame.roll1 + nextNextFrame.roll1;
        } else {
            return nextFrame.roll1 + nextFrame.roll2;
        }

    }

    // spare case
    return nextFrame.roll1;
};

export function getScore(
    bowlingFrames: BowlingFrame[],
): number {
    validateInput(bowlingFrames);

    const orderedFrames = bowlingFrames.toSorted((bf1, bf2) => {
        return bf1.roundNumber - bf2.roundNumber;
    });

    let cumulativeScore = 0;

    for (let i = 0; i < orderedFrames.length; i++) {
        const currentFrame = bowlingFrames[i];

        // to avoid handling the possible bonus frame w/ the regular frames
        if (currentFrame.roundNumber > LAST_ROUND_NUMBER) {
            break;
        }

        cumulativeScore += currentFrame.roll1 + currentFrame.roll2 + handleBonusScoring(currentFrame, i, bowlingFrames)
    }

    return cumulativeScore;

}

const testFrames: BowlingFrame[] = [
    {
        roundNumber: 1,
        roll1: 10 as PositiveNumber,
        roll2: 0 as PositiveNumber,
    },
    {
        roundNumber: 2,
        roll1: 10 as PositiveNumber,
        roll2: 0 as PositiveNumber,
    },
    {
        roundNumber: 3,
        roll1: 10 as PositiveNumber,
        roll2: 0 as PositiveNumber,
    },
    {
        roundNumber: 4,
        roll1: 10 as PositiveNumber,
        roll2: 0 as PositiveNumber,
    },
    {
        roundNumber: 5,
        roll1: 10 as PositiveNumber,
        roll2: 0 as PositiveNumber,
    },
    {
        roundNumber: 6,
        roll1: 10 as PositiveNumber,
        roll2: 0 as PositiveNumber,
    },
    {
        roundNumber: 7,
        roll1: 10 as PositiveNumber,
        roll2: 0 as PositiveNumber,
    },
    {
        roundNumber: 8,
        roll1: 10 as PositiveNumber,
        roll2: 0 as PositiveNumber,
    },
    {
        roundNumber: 9,
        roll1: 10 as PositiveNumber,
        roll2: 0 as PositiveNumber,
    },
    {
        roundNumber: 10,
        roll1: 10 as PositiveNumber,
        roll2: 0 as PositiveNumber,
    },
    {
        roundNumber: 11,
        roll1: 10 as PositiveNumber,
        roll2: 10 as PositiveNumber,
    },
];

console.log('result:', getScore(testFrames));
