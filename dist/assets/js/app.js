/* calc */

window.addEventListener('load', function () {
  outsum.innerHTML = `${rangeSum.valueAsNumber}<span>&nbsp;тыс. рублей</span>`
  outMonth.innerHTML = `${rangeMonth.valueAsNumber}<span>&nbsp;мес.</span>`
  changeColor(rangeSum, 1000)
  changeColor(rangeMonth, 30)
  count()
})

// функция изменения цвета шкалы input[type=range]
function changeColor(element, total) {
  let valRengePercent = (element.valueAsNumber * 100) / total //перевод в % input type range для градиента
  element.style.background = `-webkit-linear-gradient(left, #F5A800 0%, #F5A800 ${valRengePercent}%, #EFF3F9 ${valRengePercent}%, #EFF3F9 100%)`
}

// функция для вывода в денежном формате
const outputNumber = return2 => {
  let result2 = return2.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumIntegerDigits: '1',
    minimumFractionDigits: '0',
    maximumFractionDigits: '0'
  })
  return result2
}

// расчет платежа
function count() {
  let sum = (rangeSum.valueAsNumber / rangeMonth.valueAsNumber) * 2000
  total.textContent = `${outputNumber(sum)}`
}

const cacl = document.querySelector('#calc')
const rangeSum = cacl.querySelector('#rangeSum')
const outsum = cacl.querySelector('#outsum')
const rangeMonth = cacl.querySelector('#rangeMonth')
const outMonth = cacl.querySelector('#outMonth')
const total = cacl.querySelector('#total')
const calcBtn = cacl.querySelector('#calcBtn')

// вывод суммы вклада, изменение цвета шкалы и вывод платежа при изменениии ползунка
rangeSum.addEventListener('input', function () {
  outsum.innerHTML = `${rangeSum.valueAsNumber}<span>&nbsp;тыс. рублей</span>`
  changeColor(this, 1000)
  count()
})

// вывод кол-ва месяцев, изменение цвета шкалы и вывод платежа при изменениии ползунка
rangeMonth.addEventListener('input', function () {
  outMonth.innerHTML = `${rangeMonth.valueAsNumber}<span>&nbsp;мес.</span>`
  changeColor(this, 30)
  count()
})
"use strict";