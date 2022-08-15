const plusOne = function (digits) {
  let result = '';
  digits.forEach((num) => (result += num));
  result = BigInt(result) + 1n;
  return (result + '').split('');
};
