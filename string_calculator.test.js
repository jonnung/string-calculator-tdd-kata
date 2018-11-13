const add = require('./string_calculator');

test('숫자 1개로 구성된 문자열을 전달 받아 합계를 반환한다', () => {
  // arrange
  const numbers = '5'

  // act
  res = add(numbers)

  // expect
  expect(res).toBe(5);
});


test('숫자 2개로 구성된 문자열을 전달 받아 합계를 반환한다', () => {
  // arrange
  const numbers = '5,6'

  // act
  res = add(numbers);

  // expect

  expect(res).toBe(11);

});


test('빈 문자열이나 공백은 0으로 취급한다', () => {
  // arrange
  const numbers1 = ''
  const numbers2 = ' '

  // act
  res1 = add(numbers1);
  res2 = add(numbers2);

  // expect
  expect(res1).toBe(0);
  expect(res2).toBe(0);
});


test('2개 이상의 숫자를 전달받아 합계를 반환한다', () => {
  // arrange
  const numbers = '10,23,53,6,2'

  // act
  res = add(numbers);
  
  // expect
  expect(res).toBe(94)
});
