module.exports = {
  add: (numbers) => {
    number_arr = numbers.split(/,|\n/);

    if (number_arr.length == 1) {
      number_arr = number_arr[0].split('');
    }

    let sum = 0;
    for (let num of number_arr) {
      if (num === ' ') {
        num = 0;
      }

      sum += parseInt(num);
    }
    
    return sum;
  }
};