//問題①はわかりませんでした。
const array = [2, 4, 7, 5, 4, 3, 8];

//以下、問題②の回答となります。
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "うるう年です";
  } else {
    return "うるう年ではありません";
  }
}

console.log(leapYear(2020));
console.log(leapYear(2021));