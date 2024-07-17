let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let highPnt=0;
let btns=["green","red","yellow","blue"];

let h2= document.querySelector("h2");
let h3= document.querySelector("h3");

document.addEventListener("keypress", function(){
   if(started==false){
      console.log("game started");
      started=true;
      levelUp();
   }
});

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function () {
      btn.classList.remove("flash");
   },250);
}
function levelUp(){
   userSeq=[]; 
   level++;
   h2.innerText=`Level ${level}`;

   let randInd=Math.floor(Math.random()*3);
   let randClr=btns[randInd];
   let randBtn = document.querySelector(`.${randClr}`);

   gameSeq.push(randClr);
   console.log(gameSeq);
   btnFlash(randBtn);
}
function checkAns(idx){

   if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length==gameSeq.length){
         setTimeout(levelUp,1000);
      }
   }else{
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
      },150); 
      h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>  Press any key to start!!`; 
      let score=level;
      if(score>highPnt){
         highPnt=score;
      }
      h3.innerHTML=`Highest score was <b>${highPnt} </b>`;
      reset();  
   }
}
function btnPress() {
   let btn=this;
   btnFlash(btn);
   userClr=btn.getAttribute("id");
   userSeq.push(userClr); 
   checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns ){
   btn.addEventListener("click",btnPress);
}
function reset(){
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
}
