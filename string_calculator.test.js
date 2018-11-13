const string_calculator = require('./string_calculator');


test('2개 숫자로 길이가 2인 문자열을 전달 받아 각 수의 합을 반환한다', () => {
  // arrange
  const numbers = '34';

  // act
  const sum = string_calculator.add(numbers)

  // expect
  expect(sum).toBe(7);
});

test('`numbers`의 값이 공백인 경우 0으로 간주한다', () => {
  // arrange
  const numbers = ' 2';

  // act
  const sum = string_calculator.add(numbers);

  // expect
  expect(sum).toBe(2);
});

test('`numbers`의 숫자들은 ,(콤마)를 구분자로 사용할 수 있다', () => {
  // arrange
  const numbers = '5,9';

  // act
  const sum = string_calculator.add(numbers);

  // expect
  expect(sum).toBe(14);
});

test('`numbers`는 2개 이상의 숫자나 공백을 포함 할 수 있다', () => {
  // arrange
  const numbers = '123 567 89';

  // act
  const sum = string_calculator.add(numbers);

  // expect
  expect(sum).toBe(41);
});


test('`numbers` 숫자들은 개행(\\n)을 구분자로 허용한다', () => {
  // arrange
  const numbers = "3\n7\n9";

  // act
  const sum = string_calculator.add(numbers);

  // expect
  expect(sum).toBe(19);
});