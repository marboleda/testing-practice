import { capitalizeString, reverseString } from './functions';

//capitalizeString tests
test('capitalize lowercase word', () => {
    expect(capitalizeString('quick')).toBe('Quick');
});


//reverseString tests
test('reverse sentence', () => {
    expect(reverseString('Hi, my name is')).toBe('si eman ym ,iH');
});