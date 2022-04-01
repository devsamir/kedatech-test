const { expect, test, describe } = require('@jest/globals');
const { fishBashFunction, sortNumber, reverseString } = require('.');

describe('Soal 1', () => {
  test('(#1) Case 1', () => {
    expect(fishBashFunction(0)).toEqual([]);
  });
  test('(#1) Case 2', () => {
    expect(fishBashFunction(2)).toEqual(['', '']);
  });
  test('(#1) Case 3', () => {
    expect(fishBashFunction(5)).toEqual(['', '', 'fish', '', 'bash']);
  });
  test('(#1) Case 4', () => {
    expect(fishBashFunction(15)).toEqual(['', '', 'fish', '', 'bash', 'fish', '', '', 'fish', 'bash', '', 'fish', '', '', 'fish bash']);
  });
});

describe('Soal 2', () => {
  test('(#2) Case 1', () => {
    expect(sortNumber([1, 2, 3, 4, 5], 'asc')).toEqual([1, 2, 3, 4, 5]);
  });
  test('(#2) Case 2', () => {
    expect(sortNumber([1, 2, 3, 4, 5], 'desc')).toEqual([5, 4, 3, 2, 1]);
  });
  test('(#2) Case 3', () => {
    expect(sortNumber([3, 4, 2, 5, 1, 7, 9, 10, 8, 6], 'asc')).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test('(#2) Case 4', () => {
    expect(sortNumber([3, 4, 2, 5, 1, 7, 9, 10, 8, 6], 'desc')).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
  test('(#2) Case 5', () => {
    expect(sortNumber([0, 0, 0, 0, 0, 1, 1, 0, 0, 0], 'asc')).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1, 1]);
  });
  test('(#2) Case 6', () => {
    expect(sortNumber([0, 0, 0, 0, 0, 1, 1, 0, 0, 0], 'desc')).toEqual([1, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});

describe('Soal 3', () => {
  test('(#3) Case 1', () => {
    expect(reverseString('makan')).toEqual('nakam');
  });

  test('(#3) Case 2', () => {
    expect(reverseString('bekerja')).toEqual('ajrekeb');
  });

  test('(#3) Case 3', () => {
    expect(reverseString('tidur')).toEqual('rudit');
  });

  test('(#3) Case 4', () => {
    expect(reverseString('tamat')).toEqual('tamat');
  });
});
