let reset = 1;
let lastoperation = ""; 
let result = document.getElementById("result");
let eloldresutl = document.getElementById("old-result");
function addNumber(obj) {
    if (reset) {
        let num = (result.value);
        if (obj.innerHTML == ".") {
            num += obj.innerHTML;
            result.value = num;
        } else {
            num += Number(obj.innerHTML);
            result.value = Number(num);
        }
    } else {
        if (obj.innerHTML == ".") {
            result.value = num + obj.innerHTML;
        } else {
            result.value = Number(obj.innerHTML);
        }
        reset = 1;
    }
}
let oldResult = 0;
function plus() {
    oldResult += Number(result.value);
    result.value = 0;
    eloldresutl.innerHTML = "=  " + oldResult;
    lastoperation = "plus";
}

function minus() {
    lastoperation = "minus";
    if (eloldresutl != "") {
        oldResult += Number(result.value);
        result.value = 0;
        eloldresutl.innerHTML = "=  " + oldResult;
    } else {
        oldResult -= Number(result.value);
        result.value = 0;
        eloldresutl.innerHTML = "=  " + oldResult;
    }
}
function multiple() {
    if (oldResult) {
        oldResult *= Number(result.value);
    } else {
        oldResult = 1;
        oldResult *= Number(result.value);
    }
    lastoperation = "Multiple";
    result.value = 0;
    eloldresutl.innerHTML = "=  " + oldResult;
}
function divsion() {
    if (result.value == 0) {
        alert("Can't divison on 0 ..!");
    } else {
        if (oldResult) {
            oldResult /= Number(result.value);
        } else oldResult = Number(result.value);
        result.value = 0;
        eloldresutl.innerHTML = "=  " + oldResult;
        lastoperation = "divison";
    }
}
function CE() {
    result.value = 0;
}

function showresult() {
    reset = 0;
    if (lastoperation == "") {
        reset=1;
    } else if (lastoperation == "plus") {
        result.value = oldResult + Number(result.value);
        eloldresutl.innerHTML = "";
        oldResult = 0;
    } else if (lastoperation == "minus") {
        result.value = oldResult - Number(result.value);
        eloldresutl.innerHTML = "";
        oldResult = 0;
    } else if (lastoperation == "Multiple") {
        result.value = oldResult * Number(result.value);
        eloldresutl.innerHTML = "";
        oldResult = 0;
    } else if (lastoperation == "divison") {
        result.value = oldResult / Number(result.value);
        eloldresutl.innerHTML = "";
        oldResult = 0;
    }
    lastoperation == "";
}
function deleteall() {
    result.value = 0;
    eloldresutl.innerHTML = "";
    oldResult = 0;
    reset = 1;
    lastoperation = "";
}
function earse() {
    let val = result.value;
    if (val.substring(0, val.length - 1) == "") {
        result.value = 0;
    } else {
        result.value = val.substring(0, val.length - 1);
    }
}
