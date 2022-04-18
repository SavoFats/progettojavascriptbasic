var counter = 0; 

function aggiungi(){
    counter++;
    document.getElementById("donation").innerHTML = "€ " + counter + ",00";
}

function sottrai(){
    if (counter !=0) {
        counter--;
    }
    
    document.getElementById("donation").innerHTML = "€ " + counter + ",00";
}

function invia() {
    if (counter !=0) {
        document.getElementById("esito").innerHTML = "Grazie per la tua donazione di € " + counter;
    } else {
        document.getElementById("esito").innerHTML = "Non hai selezionato nessun importo!";
    }
} 
