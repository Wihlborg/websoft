var duckElement = document.getElementById("duck");
var duckButton = document.getElementById("duckButton");

var maxW = window.innerWidth - (2* duckElement.offsetWidth);
var maxH = window.innerHeight - (2* duckElement.offsetHeight);

duckButton.onclick = function(){
    duckElement.hidden = !duckElement.hidden;
}

duckElement.onclick = moveDuckToRandomPos;

function moveDuckToRandomPos(){
    duckElement.style.left = Math.floor(Math.random()*maxW) + 'px';
    duckElement.style.top = Math.floor(Math.random()*maxH) + 'px';
}