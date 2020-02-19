let swedenFlag = document.getElementById("swedenFlag");
let denmarkFlag = document.getElementById("denmarkFlag");
let franceFlag = document.getElementById("franceFlag");

document.getElementById("sweden").addEventListener('click', function(){
    swedenFlag.style.transition = "2s";
    swedenFlag.style.opacity = "1";
});

document.getElementById("denmark").addEventListener('click', function(){
    denmarkFlag.style.transition = "2s";
    denmarkFlag.style.opacity = "1";
});

document.getElementById("france").addEventListener('click', function(){
    franceFlag.style.transition = "2s";
    franceFlag.style.opacity = "1";
});

swedenFlag.addEventListener('click', function(){
    if(swedenFlag.style.opacity !== 0){
        swedenFlag.style.opacity = 0;
    }
});

denmarkFlag.addEventListener('click', function(){
    if(denmarkFlag.style.opacity !== 0){
        denmarkFlag.style.opacity = 0;
    }
});

franceFlag.addEventListener('click', function(){
    if(franceFlag.style.opacity !== 0){
        franceFlag.style.opacity = 0;
    }
});