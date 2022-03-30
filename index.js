let a = '';
let b = '';
let sign = '';
let calculation = false;


const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['-', '+', '×', '÷','+/-'];
const out = document.querySelector('.input')


function clear(){
    a = '';
    b = '';
    sign = '';
    calculation = false;
    out.textContent = "...";
}

document.querySelectorAll('.button').forEach(b => b.addEventListener('click', getValue));

function getValue(e) {
    document.querySelector('#del').onclick = clear;
    out.textContent = '';
    const key = event.target.textContent;
    if(digit.includes(key)){
        if(b==='' && sign === '') {
            a += key;
            out.textContent = a + sign + b;
        }
        else if (a!== '' && b!== '' && calculation){
            b = key;
            calculation = false;
            out.textContent = a + sign + b;
        }
        else {
            b += key;
            out.textContent = a+ sign + b;
        }
        console.log(a,sign,b)
    }

    if(action.includes(key)){
        sign = key;
        if (sign==='+/-'){
            out.textContent = a;
        }else {
            out.textContent = a + sign;
            console.log(a,sign,b)
        }

        return;
    }


    if(key === '='){
        if(b === '') { b = a };
        switch (sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "×":
                a = a * b;
                break;
            case "÷":
                a = a / b;
                break;
            case "+/-":
                a = -a;
                break;
        }
        calculation = true;
        out.textContent = a;
        console.log(a)
    }
}
