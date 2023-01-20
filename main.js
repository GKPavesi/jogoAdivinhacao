/// :: Variaveis
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const inputNumber = document.querySelector("#inputNumber");
let randomNumber = Math.round(Math.random() * 10);
let attempts = 1;


/// :: Eventos
/// :: Listeners   --> o btnTry ta recebendo a referencia de uma função e o btnReset esta recebendo uma função anonima, as duas sao callbacks!!!  ---> nao esta mais pq eu refatorei
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleEnterPress)


/// :: Funções CallBack
function handleTryClick(event) {
    event.preventDefault();

    let inputNumberValue = Number(inputNumber.value)

    if ((inputNumberValue >= 0) && (inputNumberValue <= 10) && (inputNumber.value != "")) {

        if (inputNumberValue == randomNumber) {
            toggleScreen();
            screen2.querySelector('h2').innerText = `Acertou em ${attempts} tentativas`;
        }

        attempts++;
    } else {
        alert("Você tem que digitar um número entre 0 e 10")
        inputNumber.focus();
    }

    inputNumber.value = "";
}

function handleResetClick() {
    toggleScreen();
    attempts = 1;
    randomNumber = Math.round(Math.random() * 10);
    inputNumber.focus();
}

function handleEnterPress(e) {
    if (e.key == "Enter" && screen1.classList.contains('hide')) {
        e.preventDefault()
        handleResetClick()
    }
}


/// :: Funções
function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}



