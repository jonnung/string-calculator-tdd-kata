function add(numbers) {
  let delimeters = /,|\n/;

  let temp_number_arr = numbers.split('\n');

  if (temp_number_arr.length > 1) {
    if (temp_number_arr[0].startsWith('//')) {
      delimeters = temp_number_arr.shift().replace('//', '');
    }
    numbers = temp_number_arr.join('\n');
  }

  const numbers_arr = numbers.split(delimeters);
  sum = 0;
  for (let num of numbers_arr) {
    if (num == '' || num == ' ') {
      num = 0;
    }

    if (num < 0) {
      throw new Error('negatives not allowed');
    }

    if (num > 1000) {
      continue;
    }

    sum += parseInt(num);
  }

  return sum;
}

module.exports = add;