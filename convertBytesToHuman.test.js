/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman('24')).toBe(false)
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(false)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman({bytes: 1})).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {

  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];

  for (let i = 0 ; i < sizes.length ; i++){
    if (i === 0) expect(convertBytesToHuman(1)).toBe(`1 ${sizes[i]}`)
    else expect(convertBytesToHuman(Math.pow(1024, i))).toBe(`${i} ${sizes[i]}`)
  }

  expect(convertBytesToHuman(-1)).not.toBe('1 B')
  expect(convertBytesToHuman(0)).toBe('0 B')
  expect(convertBytesToHuman(5)).toBe('5 B')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
  expect(convertBytesToHuman(1610612736)).toBe('1.5 GB')
  expect(convertBytesToHuman(3562417673994)).toBe('3.24 TB')
});