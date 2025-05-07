// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


// isPhoneNumber

test('returns true for "123-456-7890"', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('returns true for "(123) 456-7890"', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('returns false for "1234567890" (no separators)', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('returns false for "123-4567-890" (wrong dash placement)', () => {
  expect(isPhoneNumber('12-34567-890')).toBe(false);
});



// isEmail
test('returns true for "user1@mail.com"', () => {
  expect(isEmail('user1@mail.com')).toBe(true);
});
test('returns true for "test_user@domain.edu"', () => {
  expect(isEmail('test_user@domain.edu')).toBe(true);
});
test('returns false for "test-user@domain.com" (invalid char in user)', () => {
  expect(isEmail('test-user@domain.com')).toBe(false);
});
test('returns false for "user@domain.corporate" (TLD too long)', () => {
  expect(isEmail('user@domain.corporate')).toBe(false);
});


// isStrongPassword

test('returns true for "Abcd1234" (starts with letter, length ok)', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});
test('returns true for "a_b_c123" (underscores allowed)', () => {
  expect(isStrongPassword('a_b_c123')).toBe(true);
});
test('returns false for "1abc" (starts with digit)', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});
test('returns false for "Ab!" (invalid char and too short)', () => {
  expect(isStrongPassword('Ab!')).toBe(false);
});



// isDate
test('returns true for "1/2/2020"', () => {
  expect(isDate('1/2/2020')).toBe(true);
});
test('returns true for "12/31/1999"', () => {
  expect(isDate('12/31/1999')).toBe(true);
});
test('returns false for "01-01-2020" (wrong separator)', () => {
  expect(isDate('01-01-2020')).toBe(false);
});
test('returns false for "1/1/20" (year not four digits)', () => {
  expect(isDate('1/1/20')).toBe(false);
});



// isHexColor
test('returns true for "#fff" (3‐digit hex with #)', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('returns true for "abc123" (6‐digit hex without #)', () => {
  expect(isHexColor('abc123')).toBe(true);
});
test('returns false for "#ff" (only 2 digits)', () => {
  expect(isHexColor('#ff')).toBe(false);
});
test('returns false for "12345" (5 digits)', () => {
  expect(isHexColor('12345')).toBe(false);
});
