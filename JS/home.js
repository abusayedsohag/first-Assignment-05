document.getElementById('blogPage').addEventListener('click',function(event){
    event.preventDefault()
    window.location.href="./blog.html";
});

// Donation and History Button Actions Start

document.getElementById('btnDonate').addEventListener('click', function(){
    changeColor('btnDonate');
    mainPage('pageDonate');
});

document.getElementById('btnHistory').addEventListener('click', function(){
    changeColor('btnHistory');
    mainPage('pageHistory');
});

// Donation and History Button Actions End