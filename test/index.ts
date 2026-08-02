import { describe, it, type TestContext } from 'node:test';
import * as v1 from '../src/v1/index.ts';
import * as v2 from '../src/v2/index.ts';
import * as v3 from '../src/v3/index.ts';

describe('Global test suites', () => {
    describe('when user only scored strikes', () => {
        it('v1', (t: TestContext) => {
            const partyResult: v1.BowlingFrame[] = [
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

            t.assert.strictEqual(v1.getScore(partyResult), 300);
        });

        it('v2', (t: TestContext) => {
            const partyResult: v2.BowlingFrame[] = [
                {
                    roundNumber: 1,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 2,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 3,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 4,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 5,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 6,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 7,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 8,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 9,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 10,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 11,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 10 as v2.PositiveNumber,
                },
            ];

            t.assert.strictEqual(v2.getScore(partyResult), 300);
        });

        it('v3', (t: TestContext) => {
            const partyResult = [[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10]];

            t.assert.strictEqual(v3.getScore(partyResult), 300);
        });
    });

    describe('when user never scores', () => {
        it('v1', (t: TestContext) => {
            const partyResult: v1.BowlingFrame[] = [
                {
                    roll2: 0,
                    roll1: 0,
                    hasBonus: null,
                },
                {
                    roll2: 0,
                    roll1: 0,
                    hasBonus: null,
                },
                {
                    roll2: 0,
                    roll1: 0,
                    hasBonus: null,
                },
                {
                    roll2: 0,
                    roll1: 0,
                    hasBonus: null,
                },
                {
                    roll2: 0,
                    roll1: 0,
                    hasBonus: null,
                },
                {
                    roll2: 0,
                    roll1: 0,
                    hasBonus: null,
                },
                {
                    roll2: 0,
                    roll1: 0,
                    hasBonus: null,
                },
                {
                    roll2: 0,
                    roll1: 0,
                    hasBonus: null,
                },
                {
                    roll2: 0,
                    roll1: 0,
                    hasBonus: null,
                },
                {
                    roll2: 0,
                    roll1: 0,
                    hasBonus: null,
                },
            ];

            t.assert.strictEqual(v1.getScore(partyResult), 0);
        });

        it('v2', (t: TestContext) => {
            const partyResult: v2.BowlingFrame[] = [
                {
                    roundNumber: 1,
                    roll1: 0 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 2,
                    roll1: 0 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 3,
                    roll1: 0 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 4,
                    roll1: 0 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 5,
                    roll1: 0 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 6,
                    roll1: 0 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 7,
                    roll1: 0 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 8,
                    roll1: 0 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 9,
                    roll1: 0 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 0,
                    roll1: 0 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
            ];

            t.assert.strictEqual(v2.getScore(partyResult), 0);
        });
    });

    describe('when user scores a spare at the last round', () => {
        it('v1', (t: TestContext) => {
            const partyResult: v1.BowlingFrame[] = [
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
                    roll1: 9,
                    roll2: 1,
                    hasBonus: 'spare',
                },
                {
                    roll1: 10,
                    roll2: 0,
                    hasBonus: null,
                },
            ];

            t.assert.strictEqual(v1.getScore(partyResult), 279);
        });

        it('v2', (t: TestContext) => {
            const partyResult: v2.BowlingFrame[] = [
                {
                    roundNumber: 1,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 2,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 3,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 4,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 5,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 6,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 7,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 8,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 9,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
                {
                    roundNumber: 10,
                    roll1: 9 as v2.PositiveNumber,
                    roll2: 1 as v2.PositiveNumber,
                },
                {
                    roundNumber: 11,
                    roll1: 10 as v2.PositiveNumber,
                    roll2: 0 as v2.PositiveNumber,
                },
            ];

            t.assert.strictEqual(v2.getScore(partyResult), 279);
        });
    });
});
