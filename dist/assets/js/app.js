"use strict";

/* calc */
window.addEventListener('load', function () {
  outsum.innerHTML = "".concat(rangeSum.valueAsNumber, "<span>&nbsp;\u0442\u044B\u0441. \u0440\u0443\u0431\u043B\u0435\u0439</span>");
  outMonth.innerHTML = "".concat(rangeMonth.valueAsNumber, "<span>&nbsp;\u043C\u0435\u0441.</span>");
  changeColor(rangeSum, 1000);
  changeColor(rangeMonth, 30);
  count();
}); // функция изменения цвета шкалы input[type=range]

function changeColor(element, total) {
  var valRengePercent = element.valueAsNumber * 100 / total; //перевод в % input type range для градиента

  element.style.background = "-webkit-linear-gradient(left, #F5A800 0%, #F5A800 ".concat(valRengePercent, "%, #EFF3F9 ").concat(valRengePercent, "%, #EFF3F9 100%)");
} // функция для вывода в денежном формате


var outputNumber = function outputNumber(return2) {
  var result2 = return2.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumIntegerDigits: '1',
    minimumFractionDigits: '0',
    maximumFractionDigits: '0'
  });
  return result2;
}; // расчет платежа


function count() {
  var sum = rangeSum.valueAsNumber / rangeMonth.valueAsNumber * 2000;
  total.textContent = "".concat(outputNumber(sum));
}

var cacl = document.querySelector('#calc');
var rangeSum = cacl.querySelector('#rangeSum');
var outsum = cacl.querySelector('#outsum');
var rangeMonth = cacl.querySelector('#rangeMonth');
var outMonth = cacl.querySelector('#outMonth');
var total = cacl.querySelector('#total');
var calcBtn = cacl.querySelector('#calcBtn'); // вывод суммы вклада, изменение цвета шкалы и вывод платежа при изменениии ползунка

rangeSum.addEventListener('input', function () {
  outsum.innerHTML = "".concat(rangeSum.valueAsNumber, "<span>&nbsp;\u0442\u044B\u0441. \u0440\u0443\u0431\u043B\u0435\u0439</span>");
  changeColor(this, 1000);
  count();
}); // вывод кол-ва месяцев, изменение цвета шкалы и вывод платежа при изменениии ползунка

rangeMonth.addEventListener('input', function () {
  outMonth.innerHTML = "".concat(rangeMonth.valueAsNumber, "<span>&nbsp;\u043C\u0435\u0441.</span>");
  changeColor(this, 30);
  count();
});