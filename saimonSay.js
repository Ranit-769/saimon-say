
let gamels=[];
let userls=[]; 
let start=false;
let level=0;


let btns=["yellow", "red", "blue ","purpal"];

let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(start==false){
        console.log("game started");
        start=true;

        levelup();

    }

});

function levelup(){
    userls=[];
    level++;
    h2.innerText=`level ${level}`;


    let ramidx=Math.floor(Math.random()*3);
    let ramcolor=btns[ramidx];
    let ramBtn=document.querySelector(`.${ramcolor}`);
    gamels.push(ramcolor);4
    console.log(gamels);
   
    btnflash(ramBtn);
  }

  function btnflash(btn) {
    btn.classList.add("flash");
    
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}


   let buttons=document.querySelectorAll(".btn");
   for(btn of buttons){
       btn.addEventListener("click", btnpress);
       
   }
   
   function btnpress() {
    console.log("Button pressed");
    let user = this;
    btnflash(user);

    let usercolor = user.getAttribute("id"); // Get color from class
    userls.push(usercolor);
    chack(userls.length - 1);
}

function chack(idx){
   
     if(gamels[idx]===userls[idx]){
        if(gamels.length==userls.length){
          setTimeout(levelup,1000);
        }
        console.log("same");
     }
     else{
       
        h2.innerHTML=`game over!! score:<b>${level}</b><br>press any key to start`;
        reset();
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },500);
     }
}
function reset(){
     gamels=[];
     userls=[]; 
     start =false;
     level=0;
}
 

