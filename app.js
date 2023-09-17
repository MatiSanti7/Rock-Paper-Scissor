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
const btnHouse = document.getElementById("btnHouse")
const btnYou = document.getElementById("btnYou")

const arrayClass = [
    "paper",
    "scissor",
    "rock",
    "blue",
    "yellow",
    "red"
]

let gameInProgr = true;
let classYouPicked = ""
let classHousePicked = ""
let colorHousePicked = ""
let colorYouPicked = ""
let numRandom = 0

btns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(gameInProgr){
            bottom.classList.add("dp-none")
            result.classList.remove("dp-none")
            main.classList.add("change-mgBottom", "bgImage-none")
            textsPickeds.forEach(txtP => {
                txtP.classList.remove("dp-none")
            })

            const insideButton = btn.querySelector(".item");
            btn.classList.remove("blue")
            if (insideButton.classList.contains("paper")) {
                classYouPicked = "paper";
            } else if (insideButton.classList.contains("scissor")) {
                classYouPicked = "scissor";
            } else if (insideButton.classList.contains("rock")) {
                classYouPicked = "rock";
            }


            items.forEach(i=>{
                i.classList.remove("scissor")
                i.classList.remove("paper")
            })
            
            numRandom = Math.floor(Math.random()*3);
            classHousePicked = arrayClass[numRandom]
            colorHousePicked = arrayClass[numRandom+3]
            btnHouse.classList.remove("yellow")
            btnHouse.classList.add(colorHousePicked)
            housePicked.classList.add(classHousePicked);
            youPicked.classList.add(classYouPicked)

            if(classYouPicked == "paper"){
                colorYouPicked = "blue"
            } else if(classYouPicked == "scissor"){
                colorYouPicked = "yellow"
            } else {
                colorYouPicked = "red"
            }
            btnYou.classList.add(colorYouPicked)
            
            const textResult = document.querySelector(".dlw")
            if (classHousePicked === classYouPicked) {
                textResult.innerHTML = "DRAW";
            } else if (
                (classYouPicked === "paper" && classHousePicked === "rock") ||
                (classYouPicked === "scissor" && classHousePicked === "paper") ||
                (classYouPicked === "rock" && classHousePicked === "scissor")
            ) {
                textResult.innerHTML = "YOU WON";
                point.innerHTML = parseInt(point.textContent) + 1;
            } else {
                textResult.innerHTML = "YOU LOSE";
                if(point.textContent != "0"){
                    point.innerHTML = parseInt(point.textContent) - 1;
                }
            }
            gameInProgr = false;
        }
        addCursorAuto()
    })
})

function addCursorAuto() {
    btns.forEach(btn => {
        btn.classList.add("cursorAuto")
    })
}

playAgain.addEventListener("click", () => {
    gameInProgr = true
    bottom.classList.remove("dp-none")
    result.classList.add("dp-none")
    main.classList.remove("change-mgBottom", "bgImage-none")
    housePicked.classList.remove(classHousePicked);
    youPicked.classList.remove(classYouPicked)
    btnHouse.classList.remove(colorHousePicked)
    btnYou.classList.remove(colorYouPicked)
    classYouPicked = ""
    classHousePicked = ""
    numRandom =  0
    colorHousePicked = ""
    textsPickeds.forEach(txtP => {
        txtP.classList.add("dp-none")
    })
    items.forEach((item, index)=>{
        item.classList.add(arrayClass[index])
    })
    btns.forEach((btn, index)=>{
        if(index<3){
            btn.classList.add(arrayClass[index+3])
        }
    })
    removeCursorAuto()
})

function removeCursorAuto() {
    btns.forEach(btn => {
        btn.classList.remove("cursorAuto")
    })
}

const btnRules = document.querySelector(".btnRules")
const rules = document.querySelector(".rules")
const btnClose = document.querySelector(".imgClose")

btnRules.addEventListener("click", ()=>{
    rules.classList.remove("dp-none")
    rules.classList.add("bottomToTop")
    rules.classList.remove("topToBottom")
})

btnClose.addEventListener("click", ()=>{
    rules.classList.remove("bottomToTop")
    rules.classList.add("topToBottom")
    setTimeout(() => {
        rules.classList.add("dp-none");
    }, 500);
})