import { getFullYear, getFooterCopy, getLatestNotification} from './utils.js';

describe('Utility functions tests', () => {
    test('getFullYear should return the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });

    test('getFooterCopy should return correct string when argument is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('getFooterCopy should return correct string when argument is false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    test('getLatestNotification should return the correct string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});