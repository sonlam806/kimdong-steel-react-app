// Chuyển số thành dạng 1.000.000
function formatNumber(num) {
  if (num !== null) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }
}

// Chuyển số dạng 1.000.000 thành 1000000
function toNumber(str) {
  let number;
  if (str.length > 1) {
    number = str.split('.').join('');
  } else {
    number = parseInt(str);
  }
  return parseInt(number);
}