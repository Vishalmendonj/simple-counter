let count=0;
function Increment(){
    document.getElementById("counter").innerHTML=count+=1;
}
function Reset(){
    document.getElementById("counter").innerHTML=0;
}
let rise= document.getElementById("increase");
rise.addEventListener("click",Increment);
let reset = document.getElementById("reset");
reset.addEventListener("click",Reset);
