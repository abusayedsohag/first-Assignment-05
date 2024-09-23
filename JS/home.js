// Donation and History Button Actions Start___________________________________________________________________

// Change The Button Color With Active mode
function changeColor(id) {
    document.getElementById('btnDonate').classList.remove('bg-btnColor');
    document.getElementById('btnHistory').classList.remove('bg-btnColor');
    document.getElementById(id).classList.add('bg-btnColor')
}

// Show And Hide Section
function mainPage(id) {
    document.getElementById('pageDonate').classList.add('hidden');
    document.getElementById('pageHistory').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
}

document.getElementById('btnDonate').addEventListener('click', function(){
    changeColor('btnDonate');
    mainPage('pageDonate');
});

document.getElementById('btnHistory').addEventListener('click', function(){
    changeColor('btnHistory');
    mainPage('pageHistory');
});

// Donation and History Button Actions End____________________________________________________________
