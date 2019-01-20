function multiplyBy() {
   let one = document.getElementById('firstNumber').value;
   let two = document.getElementById('secondNumber').value;
   let multi = one * two; 
   document.getElementById('result').innerHTML = multi;
}

function divideBy() {
    let one = document.getElementById('firstNumber').value;
    let two = document.getElementById('secondNumber').value;
    let multi = one / two;;
    document.getElementById('result').innerHTML = multi;
}