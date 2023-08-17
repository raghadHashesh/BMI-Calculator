var age = document.getElementById('age');
var height = document.getElementById('height');
var weight = document.getElementById('weight');
var male = document.getElementById('m');
var female = document.getElementById('f');
var resultArea = document.querySelector('.comment');
let calc = document.getElementById('submit');
let clear = document.querySelector('.buttons .clear');
modalContent = document.querySelector('.modal-content');
modalText = document.querySelector('#modalText');
var modal = document.querySelector('#mymodal');
var span = document.getElementsByClassName("close")[0];



function calculate() {
    if (age.value == '' || height.value == '' || weight.value == '' || (male.checked === false && female.checked == false)) {
        modal.style.display = "block";
        modalText.innerHTML = `All fields are required!`;
    }
    else {
        countBmi();
    }
}


function countBmi() {
    var p = [age.value, height.value, weight.value];
    if (male.checked) {
        p.push("male");
    }
    else if (female.checked) {
        p.push("female");
    }

    var BMI = Number(p[2]) / Number(p[1] / 100 * Number(p[1]) / 100);
    var result = '';
    if (BMI < 18.5) {
        result = 'Under Weight';
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        result = 'Healthy';
    }
    else if (BMI >= 25 && BMI <= 29.9) {
        result = 'Over Weight';
    }
    else {
        result = ' obesity'
    }

    resultArea.style.display = "block";
    resultArea.innerHTML = `You are <span id="comment">${result}</span>`;
    document.querySelector("#result").innerHTML = BMI.toFixed(2);
}


calc.onclick = function () {
    calculate();
}

span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

clear.onclick = () => {
    if (!age.value == '' || !height.value == '' || !weight.value == '' || (male.checked === true || female.checked == true)) {
        age.value = '';
        height.value = '';
        weight.value = '';
        male.checked = false;
        female.checked = false;
        document.querySelector("#result").innerHTML = '00.00';
        resultArea.style.display = "none"
    }
}