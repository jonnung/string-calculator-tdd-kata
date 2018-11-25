function add(numbers) {
  const data_config = set_delimiters_and_data(numbers);
  const delimeters = data_config['delimiter'];
  const data = data_config['data'];

  let sum = 0;
  const numbers_arr = data.split(delimeters);
  for (let num of numbers_arr) {
    let validated_num = validate_number(num);
    sum += validated_num;
  }

  return sum;
}

function set_delimiters_and_data(str) {
  const custom_delimter_pattern = /^\/\/(.+)\n/;
  let delimeters = /,|\n/;
  let data = str;

  matched_custom_delimiter = str.match(custom_delimter_pattern);
  if (matched_custom_delimiter) {
    data = str.replace(matched_custom_delimiter[0], '');
    delimeters = matched_custom_delimiter[1];
  }

  return {
    'data': data,
    'delimiter': delimeters
  }
}

function validate_number(number) {
  if (number == '' || number == ' ') {
    number = 0;
  }

  if (number > 1000) {
    number = 0;
  }

  if (number < 0) {
    throw new Error('negatives not allowed');
  }

  return parseInt(number);
}

module.exports = add;