/**
 * Jest Machers
 * 
 * https://jestjs.io/docs/en/using-matchers
 */

 
// 기본 검증
test('2 더하기 2 는 4', () => {
  expect(2 + 2).toBe(4);
});

test('객체 할당', () => {
  let data = {"one": 1};
  data['two'] = 2;

  expect(data).toEqual({"one": 1, "two": 2});
});

test('양수끼리 더하면 0이 아니다', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});


// 진실 혹은 거짓
test('null', () => {
  const n = null;

  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});


// 숫자
test('2 더하기 2', () => {
 const value = 2 + 2;

 expect(value).toBeGreaterThan(3);
 expect(value).toBeGreaterThanOrEqual(3.5);
 expect(value).toBeLessThan(5);
 expect(value).toBeLessThanOrEqual(4.5);

 expect(value).toBe(4);
 expect(value).toEqual(4);
});

test('부동 소수점', () => {
  const value = 0.1 + 0.2;

  expect(value).toBeCloseTo(0.3);
});


// 문자열
test('팀에 나는 없다', () => {
  expect('team').not.toMatch(/I/);
});

test('그러나 Christoph 에는 "stop"이 있다', () => {
  expect('Christoph').toMatch(/stop/);
});


// 배열
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('쇼핑 목록에 맥주가 있다', () => {
  expect(shoppingList).toContain('beer');
});


// 예외
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('안드로이드 정상 컴파일', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // 정확한 에러 메시지나 정규식도 가능
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});