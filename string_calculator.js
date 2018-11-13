function add(numbers) {
  const trim_numbers = numbers.replace(' ', '');
  let number_arr = trim_numbers? trim_numbers.split(',') : [];

  sum = 0;
  for (let num of number_arr) {
    sum += parseInt(num);
  }

  return sum;
}

module.exports = add;