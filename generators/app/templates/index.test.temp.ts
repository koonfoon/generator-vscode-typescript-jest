import { expect, jest, it } from '@jest/globals';
import { alwaysTrue } from '../src/index';

describe('Test that all true', () => {
    it('always true test', () => {
        const condition: boolean = alwaysTrue();

        expect(condition).toBeTruthy();
    });
});
