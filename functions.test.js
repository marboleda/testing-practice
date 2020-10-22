import { capitalizeString, reverseString, calculator } from './functions';

//capitalizeString tests
test('capitalize lowercase word', () => {
    expect(capitalizeString('quick')).toBe('Quick');
});


//reverseString tests
test('reverse sentence', () => {
    expect(reverseString('Hi, my name is')).toBe('si eman ym ,iH');
});


//calculator tests
test('basic addition', () => {
    expect(calculator.add(2,5)).toBe(7);
});

test('basic subtraction', () => {
    expect(calculator.subtract(5,2)).toBe(3);
});

test('basic division', () => {
    expect(calculator.divide(10,2)).toBe(5);
});

test('basic multiplication', () => {
    expect(calculator.multiply(3,6)).toBe(18);
})