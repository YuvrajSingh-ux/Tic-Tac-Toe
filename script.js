let turn="player1"
let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let box4=document.querySelector(".box4");
let box5=document.querySelector(".box5");
let box6=document.querySelector(".box6");
let box7=document.querySelector(".box7");
let box8=document.querySelector(".box8");
let box9=document.querySelector(".box9");



function winner() {
    let case1 = box1.innerText !== "" && box1.innerText === box2.innerText && box2.innerText === box3.innerText;
    let case2 = box1.innerText !== "" && box1.innerText === box5.innerText && box5.innerText === box9.innerText;
    let case3 = box1.innerText !== "" && box1.innerText === box4.innerText && box4.innerText === box7.innerText;
    let case4 = box2.innerText !== "" && box2.innerText === box5.innerText && box5.innerText === box8.innerText;
    let case5 = box3.innerText !== "" && box3.innerText === box6.innerText && box6.innerText === box9.innerText;
    let case6 = box3.innerText !== "" && box3.innerText === box5.innerText && box5.innerText === box7.innerText;
    let case7 = box4.innerText !== "" && box4.innerText === box5.innerText && box5.innerText === box6.innerText;
    let case8 = box7.innerText !== "" && box7.innerText === box8.innerText && box8.innerText === box9.innerText;
    let case9 = (
        box1.innerText !== "" && box2.innerText !== "" && box3.innerText !== "" &&
        box4.innerText !== "" && box5.innerText !== "" && box6.innerText !== "" &&
        box7.innerText !== "" && box8.innerText !== "" && box9.innerText !== ""
    );

    if (case1 || case2 || case3 || case4 || case5 || case6 || case7 || case8) {
        let winnerText = turn === "player1" ? "Player 2" : "Player 1"; // Flip because turn just switched
        document.querySelector("#gamezone").style.visibility="hidden";
        document.querySelector("#play").innerText=`${winnerText} won!!!`;
    } else if (case9) {
        document.querySelector("#gamezone").style.visibility="hidden";
        document.querySelector("#play").innerText="Game tied!!!";
    }
}
const callback=(box)=>
{
    if(box.innerText!=="")
        box.innerText="";
    if(turn==="player1")
    {
        box.innerText="O";
        turn="player2";
    }
    else
    {
        box.innerText="X";
        turn="player1";
    }
    winner();
}
box1.addEventListener("click",()=>callback(box1));
box2.addEventListener("click",()=>callback(box2));
box3.addEventListener("click",()=>callback(box3));
box4.addEventListener("click",()=>callback(box4));
box5.addEventListener("click",()=>callback(box5));
box6.addEventListener("click",()=>callback(box6));
box7.addEventListener("click",()=>callback(box7));
box8.addEventListener("click",()=>callback(box8));
box9.addEventListener("click",()=>callback(box9));

// document.addEventListener("DOMContentLoaded", () => {
//     let form = document.querySelector("#login-form");
//     form.addEventListener("submit", (evt) => {
//         evt.preventDefault();
//         window.location.href = "game.html";
//     });
// });




