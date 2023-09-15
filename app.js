const btns = document.querySelectorAll(".btn");
const elementButtons = document.querySelectorAll("button")
const bottom = document.getElementById("bottom");
const result = document.getElementById("result");
const main = document.querySelector("main")
const youPicked = document.getElementById("youPicked")
const housePicked = document.getElementById("housePicked")
const items = document.querySelectorAll(".item")
const textsPickeds = document.querySelectorAll(".textPicked")
const playAgain = document.querySelector(".playAgain")
const point = document.querySelector(".points")

const arrayClass = [
    "paper",
    "scissor",
    "rock"
]

let gameInProgr = true;
let classYouPicked = ""
let classHousePicked = ""

btns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(gameInProgr){
            bottom.classList.add("dp-none")
            result.classList.remove("dp-none")
            main.classList.add("change-mgBottom", "bgImage-none")
            textsPickeds.forEach(txtP => {
                txtP.classList.remove("dp-none")
            })

            setClassYouPicked(btn)
                        
            items.forEach(i=>{
                i.classList.remove("scissor")
                i.classList.remove("paper")
            })
            
            setClassHousePicked()

            housePicked.classList.add(classHousePicked);
            youPicked.classList.add(classYouPicked)

            showResult(arrayClass[numRandom], classYouPicked)
            
            gameInProgr = false;
        }
        changeCursor()
    })
})

function setClassYouPicked(btn){
    const insideButton = btn.querySelector(".item");
    if (insideButton.classList.contains("paper")) {
        classYouPicked = "paper";
    } else if (insideButton.classList.contains("scissor")) {
        classYouPicked = "scissor";
    } else if (insideButton.classList.contains("rock")) {
        classYouPicked = "rock";
    }
}

function setClassHousePicked() {
    let numRandom = Math.floor(Math.random()*3);
    classHousePicked = arrayClass[numRandom]
}

showResult = (classHousePick, classYouPick)  => {
    const textResult = document.querySelector(".dlw")
    if (classHousePick === classYouPick) {
        textResult.innerHTML = "DRAW";
    } else if (
        (classYouPick === "paper" && classHousePick === "rock") ||
        (classYouPick === "scissor" && classHousePick === "paper") ||
        (classYouPick === "rock" && classHousePick === "scissor")
    ) {
        textResult.innerHTML = "YOU WON";
        point.innerHTML = parseInt(point.textContent) + 1;
    } else {
        textResult.innerHTML = "YOU LOSE";
        point.textContent = "0"
    }
}


function addCursorAuto() {
    btns.forEach(btn => {
        btn.classList.add("cursorAuto")
    })
}

function removeCursorAuto() {
    btns.forEach(btn => {
        btn.classList.remove("cursorAuto")
    })
}

playAgain.addEventListener("click", () => {
    gameInProgr = true
    bottom.classList.remove("dp-none")
    result.classList.add("dp-none")
    main.classList.remove("change-mgBottom", "bgImage-none")
    housePicked.classList.remove(classHousePicked);
    youPicked.classList.remove(classYouPicked)
    classYouPicked = ""
    classHousePicked = ""
    textsPickeds.forEach(txtP => {
        txtP.classList.add("dp-none")
    })
    items.forEach((item, index)=>{
        item.classList.add(arrayClass[index])
    })
    removeCursorAuto()
})