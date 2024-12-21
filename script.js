let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-game");
let msgContainer = document.querySelector(".msg");
let turnX = true;
let winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const showWinner = (winner) => {
    msgContainer.classList.remove("hide");
    msgContainer.innerText = `Winner ${winner}`;
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            box.classList.add("x");
            box.classList.remove("o");
            turnX = false;
        }
        else {
            box.innerText = "O";
            box.classList.add("o");
            box.classList.remove("x");
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        msgContainer.classList.add("hide");
        box.innerText = "";
        box.disabled = false;
        turnX = true;
    })
});