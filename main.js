// Variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const inputNumber = document.querySelector("#inputNumber")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterReset)

// Funções
function handleTryClick(event) {
    event.preventDefault() // não faça o padrão
    
    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        
        screen2.querySelector(".screen2 h2").innerText =  `Acertou em ${xAttempts} tentativas`
    }

    if(Number(inputNumber.value) < 0 || Number(inputNumber.value) >= 11) {
        alert("Por favor, digite um número entre 0 e 10.")
    }
    
    if (inputNumber.value === "") {
        alert("Por favor, digite um número entre 0 e 10.")
        return
    }

    inputNumber.value = ""

        xAttempts++

}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function enterReset(e) {
    if(e.key === 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
}
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}