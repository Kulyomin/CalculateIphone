const numbers = document.querySelectorAll('.number');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign'); // Все опции
const equals = document.querySelector('.equals'); // =
const clear = document.querySelector('.clear'); // AC
const negative = document.querySelector('.negative'); // +/-
const percent = document.querySelector('.percent'); // %
const point = document.querySelector('.point');
const theme = document.querySelector('.theme_btn');
const iphone = document.querySelector('.iphone')
const buttonPlace = document.querySelector('.buttons');
const buttons = document.querySelectorAll('.btn');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
   numbers[i].addEventListener('click', (e) => {
      let atr = e.target.getAttribute('value');
      if (isFirstValue === false && result.innerHTML.length < 9 ) {
         getFirstValue(atr);
      }
      if (isSecondValue === false && result.innerHTML.length < 9) {
         getSecondValue(atr);
      }
      changeFont(result);
   });
}

function changeFont(atr) {
   switch (atr.innerHTML.length) {
      case 5:
         atr.style.fontSize = '6.5rem';
         break
      case 6:
         atr.style.fontSize = '6rem';
         break
      case 7:
         atr.style.fontSize = '5.5rem';
         break
      case 8:
         atr.style.fontSize = '5rem';
         break
      case 9:
         atr.style.fontSize = '4.5rem';
         break
      default:
         atr.style.fontSize = '7rem';
         break
   }
}

function getFirstValue(el) {
   if (result.innerHTML == "0") {
      result.innerHTML = "";
   }
   if (el == ".") { // Проходит точка
      if (!result.innerHTML.toString().includes('.')) {
         firstValue += el;
         result.innerHTML = firstValue;
      }
   } else {
      firstValue += el;
      result.innerHTML = firstValue;
      firstValue = firstValue;
   }
}

function getSecondValue(el) {
   if (firstValue != "" && sign != "") {
      if (el == ".") { // Проходит точка
         if (!result.innerHTML.toString().includes('.')) {
            secondValue += el;
            result.innerHTML = secondValue;
         }
      } else {
         secondValue += el;
         result.innerHTML = secondValue;
         secondValue = secondValue;
      }
   }
}

function getSign() {
   for (let i = 0; i < signs.length; i++) {
      signs[i].addEventListener('click', (e) => {
         sign = e.target.getAttribute('value');
         result.innerHTML = sign;
         isFirstValue = true;
      });
   }
}
getSign();

equals.addEventListener('click', () => {
   result.innerHTML = "";
   if (sign === "+") {
      resultValue = parseFloat(firstValue) + parseFloat(secondValue);
   } else if (sign === "-") {
      resultValue = parseFloat(firstValue) - parseFloat(secondValue);
   } else if (sign === "*") {
      resultValue = parseFloat(firstValue) * parseFloat(secondValue);
   } else if (sign === "/") {
      resultValue = parseFloat(firstValue) / parseFloat(secondValue);
   }
   result.innerHTML = resultValue;
   firstValue = resultValue;
   secondValue = "";
   
   changeFont(result);
   checkResultLength();
})

function checkResultLength() {
   resultValue = JSON.stringify(resultValue);

   if (resultValue.length >= 8) {
      resultValue = JSON.parse(resultValue);
      result.innerHTML = resultValue.toFixed(5);
   }

}

negative.addEventListener('click', () => {
   result.innerHTML = "";
   if (firstValue != "") {
      resultValue = -firstValue;
      firstValue = resultValue;
   }
   if (firstValue != "" && secondValue != "" && sign != "") {
      resultValue = -resultValue;
   }
   result.innerHTML = resultValue;
})

percent.addEventListener('click', () => {
   result.innerHTML = "";
   if (firstValue != "") {
      resultValue = firstValue / 100;
      firstValue = resultValue;
   }
   if (secondValue != "" && secondValue != "" && sign != "") {
      resultValue = resultValue / 100;
   }

   result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
   result.innerHTML = "0";

   firstValue = "";
   isFirstValue = false;
   secondValue = "";
   isSecondValue = false;
   sign = "";
   resultValue = 0;
})

theme.addEventListener('click', () => {
   if(theme.innerHTML.toUpperCase() == "LIGHT"){
      console.log("Light");
      theme.innerHTML = "DARK";

      iphone.classList.replace('light','dark');
      result.classList.replace('result-light', 'result-dark');
      buttonPlace.classList.replace('button-light', 'button-dark');

      for(let i = 0; i < buttons.length; i++) {
         buttons[i].classList.replace('aqumarine', 'grey');
         buttons[i].classList.replace('skyblue', 'darkgrey');
         buttons[i].classList.replace('yellow', 'orange');
      }

   }
   else if (theme.innerHTML.toUpperCase() == "DARK"){
      theme.innerHTML = "LIGHT";

      iphone.classList.replace('dark','light');
      result.classList.replace('result-dark', 'result-light');
      buttonPlace.classList.replace('button-dark', 'button-light');

      for(let i = 0; i < buttons.length; i++) {
         buttons[i].classList.replace('grey', 'aqumarine');
         buttons[i].classList.replace('darkgrey', 'skyblue');
         buttons[i].classList.replace('orange', 'yellow');
      }
   }
})