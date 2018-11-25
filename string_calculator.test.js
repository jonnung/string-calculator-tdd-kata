const add = require('./string_calculator');

test('숫자 1개로 구성된 문자열을 전달 받아 합계를 반환한다', () => {
  // arrange
  const numbers = '5'

  // act
  const res = add(numbers)

  // expect
  expect(res).toBe(5);
});


test('숫자 2개로 구성된 문자열을 전달 받아 합계를 반환한다', () => {
  // arrange
  const numbers = '5,6'

  // act
  const res = add(numbers);

  // expect

  expect(res).toBe(11);

});


test('빈 문자열이나 공백은 0으로 취급한다', () => {
  // arrange
  const numbers1 = ''
  const numbers2 = ' '
  const numbers3 = '1,,3, ,5'

  // act
  const res1 = add(numbers1);
  const res2 = add(numbers2);
  const res3 = add(numbers3);

  // expect
  expect(res1).toBe(0);
  expect(res2).toBe(0);
  expect(res3).toBe(9);
});


test('2개 이상의 숫자를 전달받아 합계를 반환한다', () => {
  // arrange
  const numbers = '10,23,53,6,2'

  // act
  const res = add(numbers);
  
  // expect
  expect(res).toBe(94)
});

test('개행으로 구분된 숫자들의 합을 계산한다', () => {
  // arrange
  const numbers = '3\n6\n9'

  // act
  const res = add(numbers);

  // expect
  expect(res).toBe(18);

});

test('커스텀 구분자로 구분된 숫자들의 합을 계산한다', () => {
  // arrange
  const numbers1 = '//|\n10|9|8';
  const numbers2 = '//{}\n10{}9{}8';

  // act
  const res1 = add(numbers1);
  const res2 = add(numbers2);

  // expect
  expect(res1).toBe(27);
  expect(res2).toBe(27);
});

test('음수가 포함된 경우 "negatives not allowed" 예외가 발생한다', () => {
  // arrange
  const numbers = '11,-1,10';

  // act
  // expect
  expect(() => {
    add(numbers);
  }).toThrow('negatives not allowed');
});

test('1000 이상 큰 수는 계산하지 않는다', () => {
  // arrange
  const numbers = '12\n20\n1200,18';

  // act
  const res = add(numbers);

  // expect
  expect(res).toBe(50);
});

test('길이가 10인 커스텀 구분자로 구분된 숫자의 합을 계산한다', () => {
  // arrange
  const number = '//**********\n1**********2**********3';

  // act
  const res = add(number);

  // expect
  expect(res).toBe(6);
});

// test('2개 이상의 커스텀 구분자로 구분된 숫자의 합을 계산한다', () => {
//   // arrange
//   const numbers = '//(*]\n1]2*3(4*5';
//   // act
//   const res = add(numbers);

//   // expect
//   expect(res).toBe(15);
// });