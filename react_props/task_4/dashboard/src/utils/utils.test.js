import {getFullYear, getFooterCopy, getLatestNotification} from './utils';

test('getFullYear returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
});

test('getFooterCopy return accurate string when the argument is True', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy return accurate string when the argument is False', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification return the accurate string', () => {
    const expected = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expected);
});