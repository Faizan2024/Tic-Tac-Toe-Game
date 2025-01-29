let boxes = document.querySelectorAll(".box");
let msgbox = document.querySelector(".win-msg");
let reset = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let message = document.querySelector(".msg");
let container = document.querySelector(".container");
let turnO = true;

let player1 = "";
let player2 = "";

// Get the input elements and submit button
let playerInputs = document.querySelector("#player-inputs");
let player1Input = document.querySelector("#player1");
let player2Input = document.querySelector("#player2");
let submitBtn = document.querySelector("#submit-btn");

// Hide all other content initially
msgbox.classList.add("hide");
container.classList.add("hide");
reset.classList.add("hide");

// Submit button event listener
submitBtn.addEventListener("click", () => {
    player1 = player1Input.value;
    player2 = player2Input.value;
    if (player1 && player2) {
        playerInputs.classList.add("hide");
        container.classList.remove("hide");
        reset.classList.remove("hide");
        turnO = true;  // Ensure the game starts with "O"
    }
});

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    let winnerName = winner === "O" ? player1 : player2;
    message.innerText = `Congratulations! Winner is ${winnerName}`;
    msgbox.classList.remove("hide");
    disableBoxes();
    container.classList.add("hide");
    reset.classList.add("hide");
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    msgbox.classList.add("hide");
    container.classList.remove("hide");
    turnO = true;  // Ensure the game starts with "O"
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let postVal1 = boxes[pattern[0]].innerText;
        let postVal2 = boxes[pattern[1]].innerText;
        let postVal3 = boxes[pattern[2]].innerText;
        if (postVal1 != "" && postVal2 != "" && postVal3 != "") {
            if (postVal1 === postVal2 && postVal2 === postVal3) {
                showWinner(postVal1);
            }
        }
    }
};

newBtn.addEventListener("click", () => {
    enableBoxes();
    playerInputs.classList.remove("hide");
    player1Input.value = "";
    player2Input.value = "";
    msgbox.classList.add("hide");
    container.classList.add("hide");
    reset.classList.add("hide");
    turnO = true;  // Ensure the game starts with "O"
});

reset.addEventListener("click", enableBoxes);
