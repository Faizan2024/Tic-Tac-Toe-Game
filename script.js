let boxes = document.querySelectorAll(".box");
let msgbox = document.querySelector(".win-msg");
let reset = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let message = document.querySelector(".msg");
let container = document.querySelector(".container");
let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const disableBoxes = ()=>{
    for(let box of boxes) {
        box.disabled = true
    }
}

const showWinner = (winner) => {
    message.innerText = `Congratulation! Winner is ${winner}`;
    msgbox.classList.remove("hide");  // Show the winner message
    disableBoxes();  // Disable all boxes
    container.classList.add("hide");
    reset.classList.add("hide");
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    msgbox.classList.add("hide");  
    container.classList.remove("hide");
    reset.classList.remove("hide");
}

const checkWinner = ()=> {
    for(let pattern of winPattern) {
        let postVal1 = boxes[pattern[0]].innerText;
        let postVal2 = boxes[pattern[1]].innerText;
        let postVal3 = boxes[pattern[2]].innerText;
        if(postVal1 != "" && postVal2 != "" && postVal3 != ""){
            if(postVal1 === postVal2 && postVal2 === postVal3) {
                console.log("winner");
                showWinner(postVal1);
            }
        }
    }
}

newBtn.addEventListener("click", enableBoxes);
reset.addEventListener("click", enableBoxes);