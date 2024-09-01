let allBox=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset")
let msg=document.querySelector("#msg");
let rescon=document.querySelector(".res-container");
let newgamebtn=document.querySelector("#newgame");
let cont=document.querySelector(".container");
let turn=false;
const xSound = document.getElementById("sound3");
const oSound = document.getElementById("sound2");
const resetSound = document.getElementById("sound1");
const win = document.getElementById("win");

const reset=()=>{
    enable();
    rescon.classList.add("hide");
    cont.classList.remove("hide");
    resetbtn.classList.remove("hide");
    turn=false;
    resetSound.play();
};
allBox.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        
        if(turn===true){
            box.innerText="O";
            turn=false;
            oSound.play();
        }
        else{
            box.innerText="X";
            turn=true;
            xSound.play();
        }
        box.disabled="true";
        checkwinner();
    })
})
allBox.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.add("clicked");
        console.log("clicked");

        setTimeout(() => {
            box.classList.remove("clicked");
        }, 200); 
    });
});
resetbtn.addEventListener("click",() => {
    resetbtn.classList.add("resetclick");
    console.log("clicked");

    
    setTimeout(() => {
        resetbtn.classList.remove("resetclick");
    }, 200); 
});
newgamebtn.addEventListener("click",() => {
    newgamebtn.classList.add("resetclick");
    console.log("clicked in new");
    setTimeout(() => {
        newgamebtn.classList.remove("resetclick");
    }, 200); 
});
const winpatterns=[
    [ 0 , 1 , 2 ],
    [ 0 , 3 , 6 ],
    [ 0 , 4 , 8 ],
    [ 1 , 4 , 7 ],
    [ 2 , 5 , 8 ],
    [ 2 , 4 , 6 ],
    [ 3 , 4 , 5 ],
    [ 6 , 7 , 8 ],
];
const disable=()=>{
    for(let box of allBox){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of allBox){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{ 
    msg.innerText="Congratulations , Winner is "+winner;
    rescon.classList.remove("hide");
    cont.classList.add("hide");
    resetbtn.classList.add("hide");
    disable();
    win.play();
    
}
const checkwinner=()=>{
    for(let pat of winpatterns){
        let p1=allBox[pat[0]].innerText;
        let p2=allBox[pat[1]].innerText;
        let p3=allBox[pat[2]].innerText;
        if(p1!=""){
        if(p1===p2&&p2===p3){
            console.log(`winner  is  ${p1}`);
            showwinner(p1);
        }
      }
        
    }
}

resetbtn.addEventListener("click" , reset);
newgamebtn.addEventListener("click" , reset);