// Donation and History Button Actions Start________________________________________________

document.getElementById('btnDonate').addEventListener('click', function(){
    changeColor('btnDonate');
    mainPage('pageDonate');
});

document.getElementById('btnHistory').addEventListener('click', function(){
    changeColor('btnHistory');
    mainPage('pageHistory');
});

// Donation and History Button Actions End__________________________________________________