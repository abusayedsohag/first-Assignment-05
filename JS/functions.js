// Change The Button Color With Active mode Using By ID
function changeColor(id) {
    document.getElementById('btnDonate').classList.remove('bg-btnColor');
    document.getElementById('btnHistory').classList.remove('bg-btnColor');
    document.getElementById(id).classList.add('bg-btnColor')
}

// Show And Hide Section Using By ID
function mainPage(id) {
    document.getElementById('pageDonate').classList.add('hidden');
    document.getElementById('pageHistory').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
}

// Input Value To Number Usings By ID
function inputValue(id) {
    const inputvalue = document.getElementById(id).value;
    const inputNumber = Number(inputvalue);
    return inputNumber;
}

// Strings To Number Using By ID
function textValue(id) {
    const textvalue = document.getElementById(id).innerText;
    const textNumber = Number(textvalue);
    return textNumber;
}