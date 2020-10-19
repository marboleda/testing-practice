import { capitalizeString } from './functions';

test('lowercase word', () => {
    expect(capitalizeString('quick')).toBe('Quick');
})