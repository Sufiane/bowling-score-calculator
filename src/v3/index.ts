class BowlingRound {
    private readonly throw1: number;
    private readonly throw2: number;

    constructor(throw1: number, throw2: number) {
        this.throw1 = throw1;
        this.throw2 = throw2;
    }

    getFirstThrow(): number {
        return this.throw1;
    }

    getSecondThrow(): number {
        return this.throw2;
    }

    isStrike(): boolean {
        return this.throw1 === 10;
    };

    isSpare(): boolean {
        return !this.isStrike() && this.throw1 + this.throw2 === 10;
    };

    getBasicScore(): number {
        return this.throw1 + this.throw2;
    };
}

class BowlingPartyResult {
    private readonly round1: BowlingRound;
    private readonly round2: BowlingRound;
    private readonly round3: BowlingRound;
    private readonly round4: BowlingRound;
    private readonly round5: BowlingRound;
    private readonly round6: BowlingRound;
    private readonly round7: BowlingRound;
    private readonly round8: BowlingRound;
    private readonly round9: BowlingRound;
    private readonly round10: BowlingRound;
    private readonly extraFrame: BowlingRound | undefined;

    constructor(partyResult: number[][]) {
        this.round1 = new BowlingRound(partyResult[0][0], partyResult[0][1]);
        this.round2 = new BowlingRound(partyResult[1][0], partyResult[0][1]);
        this.round3 = new BowlingRound(partyResult[2][0], partyResult[0][1]);
        this.round4 = new BowlingRound(partyResult[3][0], partyResult[0][1]);
        this.round5 = new BowlingRound(partyResult[4][0], partyResult[0][1]);
        this.round6 = new BowlingRound(partyResult[5][0], partyResult[0][1]);
        this.round7 = new BowlingRound(partyResult[6][0], partyResult[0][1]);
        this.round8 = new BowlingRound(partyResult[7][0], partyResult[0][1]);
        this.round9 = new BowlingRound(partyResult[8][0], partyResult[0][1]);
        this.round10 = new BowlingRound(partyResult[9][0], partyResult[0][1]);

        if (partyResult[10]) {
            this.extraFrame = new BowlingRound(partyResult[10][0], partyResult[10][1]);
        }
    }

    private calculateRoundTotalScore(
        currentRound: BowlingRound,
        nextRound?: BowlingRound,
        nextNextRound?: BowlingRound,
    ): number {
        const basicScore = currentRound.getBasicScore();
        let bonusScore = 0;

        if (!nextRound) {
            return basicScore;
        }

        if (currentRound.isStrike()) {
            if (nextRound.isStrike()) {
                const nextNextRoundScore = (nextNextRound?.getFirstThrow() ?? 0);

                bonusScore += nextRound.getBasicScore() + nextNextRoundScore;
            } else {
                bonusScore += nextRound.getBasicScore();
            }
        } else if (currentRound.isSpare()) {
            bonusScore += nextRound.getFirstThrow();
        }

        return basicScore + bonusScore;
    }

    private getRound1Score(): number {
        return this.calculateRoundTotalScore(this.round1, this.round2, this.round3);
    }

    private getRound2Score(): number {
        return this.calculateRoundTotalScore(this.round2, this.round3, this.round4);
    }

    private getRound3Score(): number {
        return this.calculateRoundTotalScore(this.round3, this.round4, this.round5);
    }

    private getRound4Score(): number {
        return this.calculateRoundTotalScore(this.round4, this.round5, this.round6);
    }

    private getRound5Score(): number {
        return this.calculateRoundTotalScore(this.round5, this.round6, this.round7);
    }

    private getRound6Score(): number {
        return this.calculateRoundTotalScore(this.round6, this.round7, this.round8);
    }

    private getRound7Score(): number {
        return this.calculateRoundTotalScore(this.round7, this.round8, this.round9);
    }

    private getRound8Score(): number {
        return this.calculateRoundTotalScore(this.round8, this.round9, this.round10);
    }

    private getRound9Score(): number {
        return this.calculateRoundTotalScore(this.round9, this.round10, this.extraFrame);
    }

    private getRound10Score(): number {
        return this.calculateRoundTotalScore(this.round10, this.extraFrame);
    }

    getTotalScore(): number {
        return this.getRound1Score() +
            this.getRound2Score() +
            this.getRound3Score() +
            this.getRound4Score() +
            this.getRound5Score() +
            this.getRound6Score() +
            this.getRound7Score() +
            this.getRound8Score() +
            this.getRound9Score() +
            this.getRound10Score();
    }
}


export function getScore(partyResult: number[][]): number {
    const result = new BowlingPartyResult(partyResult);

    return result.getTotalScore()
}
