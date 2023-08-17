const coinContainer = document.querySelector(".coinContainer")
const frontFace = document.querySelector(".frontFace")
const backFace = document.querySelector(".backFace")

const yaziText = document.querySelector(".yazi")
const turaText = document.querySelector(".tura")

const flipButton = document.querySelector(".flipButton")
const resetButton = document.querySelector(".resetButton")

let option
let degreeToTurn

let yaziTextValue = 0
let turaTextValue = 0

function degreeGenerator(){
    option = Math.round(Math.random())
    if(option == 1){
        degreeToTurn = 2 + Math.floor(Math.random()*3)
        degreeToTurn = degreeToTurn*180

    }
    else{
        degreeToTurn = 2 + Math.floor(Math.random()*3)
        degreeToTurn = degreeToTurn*270

    }
    console.log(degreeToTurn)

}

function textUpdate(){
    if(option==1){
        yaziTextValue++
        yaziText.textContent = `Yazı: ${yaziTextValue}`
    }
    else{
        turaTextValue++
        turaText.textContent = `Tura: ${turaTextValue}`
    }
}

function resetGame(){
    yaziTextValue = 0
    yaziText.textContent = `Yazı: ${yaziTextValue}`

    turaTextValue = 0
    turaText.textContent = `Tura: ${turaTextValue}`
}

function resetCoin(){
    backFace.style.transform = `rotateX(${0}deg)`
    frontFace.style.transform = `rotateX(${0}deg)`
    coinContainer.style.transform = `rotateX(${0}deg)`
}

function flipCoin(){
    degreeGenerator()

    setTimeout(()=>{
        if(option==1){
            backFace.style.transform = `rotateX(${degreeToTurn}deg)`
            coinContainer.style.transform = `rotateX(${degreeToTurn}deg)`
        }
        else{
            frontFace.style.transform = `rotateX(${degreeToTurn}deg)`
            coinContainer.style.transform = `rotateX(${degreeToTurn}deg)`
        }
    },2000)

    textUpdate()
    resetCoin()
}


flipButton.addEventListener("click", flipCoin)
resetButton.addEventListener("click", resetGame)