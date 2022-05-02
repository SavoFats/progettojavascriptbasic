let counter = 0; 
const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const btnSubmit = document.getElementById("submit");

function increase(){
    counter++;
    document.getElementById("donation").innerHTML = "€ " + counter + ",00";
}

function decrease(){
    if (counter !=0) {
        counter--;
    }
    
    document.getElementById("donation").innerHTML = "€ " + counter + ",00";
}

function submit() {
    if (counter !=0) {
        document.getElementById("result").innerHTML = "Grazie per la tua donazione di € " + counter + ",00";
    } else {
        document.getElementById("result").innerHTML = "Non hai selezionato nessun importo!";
    }
} 

btnIncrease.addEventListener("click", () => increase());
btnDecrease.addEventListener("click", () => decrease());
btnSubmit.addEventListener("click", () => submit());