var button = document.getElementById('button');
var numb1 = null;
var numb2 = null;
var action;

/*Отрисовка кнопок*/
for(var i = 1; i <= 19; i++) {
    switch (i) {
        case 1:
            button.innerHTML += "<div class='btn btn_func' pos=" + i + "></div>";
        break;
        case 2:
            button.innerHTML += "<div class='btn btn_func' pos=" + i + "></div>";  
        break;
        case 3:
            button.innerHTML += "<div class='btn btn_func' pos=" + i + "></div>";    
        break;
        case 4:
            button.innerHTML += "<div class='btn btn_action' pos=" + i + "></div>";    
        break;
        case 8:
            button.innerHTML += "<div class='btn btn_action' pos=" + i + "></div>";      
        break;
        case 12:
            button.innerHTML += "<div class='btn btn_action' pos=" + i + "></div>";      
        break;
        case 16:
            button.innerHTML += "<div class='btn btn_action' pos=" + i + "></div>";     
        break;
        case 17:
            button.innerHTML += "<div class='btn btn_zero btn_number' pos=" + i + "></div>"; 
        break;
        case 19:
            button.innerHTML += "<div class='btn btn_action' pos=" + i + "></div>";    
        break;
        default:
            button.innerHTML += "<div class='btn btn_number' pos=" + i + "></div>";
        break;
      }  
}

/*Задаём символы для кнопок*/
var btn = document.getElementsByClassName('btn');
for(let i = 0;i < btn.length; i++) {
    switch (i) {
        case 0:
            btn[i].innerHTML = "AC";
            btn[i].style.cssText = 'background-color:#AAA';
        break;
        case 1:
            btn[i].innerHTML = "+/-";
            btn[i].style.cssText = 'background-color:#AAA';
        break;
        case 2:
            btn[i].innerHTML = "%";
            btn[i].style.cssText = 'background-color:#AAA';
        break;
        case 3:
            btn[i].innerHTML = "÷";
        break;
        case 4:
            btn[i].innerHTML = "7";
            btn[i].style.cssText = 'background-color:#555';
        break;
        case 5:
            btn[i].innerHTML = "8";
            btn[i].style.cssText = 'background-color:#555';
        break;
        case 6:
            btn[i].innerHTML = "9";
            btn[i].style.cssText = 'background-color:#555';
        break;
        case 7:
            btn[i].innerHTML = "×";
        break;
        case 8:
            btn[i].innerHTML = "4";
            btn[i].style.cssText = 'background-color:#555';
        break;
        case 9:
            btn[i].innerHTML = "5";
            btn[i].style.cssText = 'background-color:#555';
        break;
        case 10:
            btn[i].innerHTML = "6";
            btn[i].style.cssText = 'background-color:#555';
        break;
        case 11:
            btn[i].innerHTML = "–";
        break;
        case 12:
            btn[i].innerHTML = "1";
            btn[i].style.cssText = 'background-color:#555';
        break;
        case 13:
            btn[i].innerHTML = "2";
            btn[i].style.cssText = 'background-color:#555';
        break;
        case 14:
            btn[i].innerHTML = "3";
            btn[i].style.cssText = 'background-color:#555';
        break;
        case 15:
            btn[i].innerHTML = "+";
        break;
        case 16:
            btn[i].innerHTML = "0";
            btn[i].style.cssText = 'background-color:#555';
        break;
        case 17:
            btn[i].innerHTML = ".";
            btn[i].style.cssText = 'background-color:#555';
        break;
        case 18:
            btn[i].innerHTML = "=";
        break;
        default:
            btn[i].innerHTML = null;
        break;
    }
}

/* Логика калькулятора */
var screen = document.getElementById('Screen');
var btn_numb = document.getElementsByClassName('btn_number');

/* Добавление цифр на экран */
for(let i = 0; i < btn_numb.length; i++){
    btn_numb[i].onclick = function() {
        if(screen.innerHTML.length < 9){
            switch (screen.innerHTML.length) {
                case 5:
                    add_numb(btn_numb[i]);
                    screen.style.cssText = 'font-size: 5em; padding-top: 150px';
                break;
                case 6:
                    screen.style.cssText = 'font-size: 4.5em; padding-top: 159px';
                    add_numb(btn_numb[i]);
                break;
                case 7:
                    screen.style.cssText = 'font-size: 4em; padding-top: 167px';
                    add_numb(btn_numb[i]);
                break;
                case 8:
                    screen.style.cssText = 'font-size: 3.7em; padding-top: 173px';
                    add_numb(btn_numb[i]);
                break;
                default:
                    add_numb(btn_numb[i]);
                break;
            }
        }
    }
}

const add_numb = function(btn) {
    if(screen.innerHTML == 0 || screen.innerHTML == '÷' || screen.innerHTML == '×' || screen.innerHTML == '–' || screen.innerHTML == '+'){
        screen.innerHTML = btn.innerHTML;
    }
    else
        screen.innerHTML += btn.innerHTML;
}

/* Функциональные кнопки */
var btn_func = document.getElementsByClassName('btn_func');

for(let i = 0; i < btn_func.length; i++) {
    btn_func[i].onclick = function() {
        if(i == 0)
            screen.innerHTML = '0';
            screen.style.cssText = 'font-size: 5.5em';
        if(i == 2){
            screen.innerHTML = Number(screen.innerHTML) / 100;
        }
    }
}

/* Вычислительные кнопки */
var btn_calc = document.getElementsByClassName('btn_action');

for(let i = 0; i < btn_calc.length; i++) {
    btn_calc[i].onclick = function() {
        switch (btn_calc[i].innerHTML) {
            case '÷':
                numb1 = Number(screen.innerHTML);
                screen.innerHTML = '÷';
                action = '/';
            break;
            case '×':
                numb1 = Number(screen.innerHTML);
                screen.innerHTML = '×';
                action = '×';
            break;
            case '–':
                numb1 = Number(screen.innerHTML);
                screen.innerHTML = '–';
                action = '-';
            break;
            case '+':
                numb1 = Number(screen.innerHTML);
                screen.innerHTML = '+';
                action = '+';
            break;
            case '=':
                var summ;
                if(action == '/')
                    summ = numb1 / Number(screen.innerHTML);
                if(action == '×')
                    summ = numb1 * Number(screen.innerHTML);
                if(action == '-')
                    summ = numb1 - Number(screen.innerHTML);
                if(action == '+')
                    summ = numb1 + Number(screen.innerHTML);
                action = '=';
                if(String(summ).length > 9){
                    var degree = Number(String(summ).length) - 3;
                    console.log(degree);
                    summ = summ /Math.pow(10, degree);
                    screen.innerHTML = summ.toFixed(2) + "*10^" + degree;
                    console.log("+")
                }
                else
                    screen.innerHTML = summ;
            break;
        }
    }
}