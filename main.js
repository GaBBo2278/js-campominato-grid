//Far selezionare la difficoltà all'utente e in base
//alla sua scelta generare la griglia con i quadrati
//(EASY -> 100, MEDIUM -> 81 e HARD -> 49)
//e quando l'utente clicca il quadrato colorarlo di azzuro


document.getElementById('play').addEventListener('click', gioco);

//dichiarazione variabile
function gioco() {
    //Salvo la scelta della difficoltà
    const difficolta = document.getElementById('selettore-difficolta').value;
    
    //Definisco delle variabili utili per la creazione della griglia
    let numeroCelle = 0;

    //In base alla difficoltà definisco il numero dei quadrati
    if (difficolta == "easy") {
        numeroCelle = 100;
    } else if (difficolta == "medium") {
        numeroCelle = 81;
    } else if (difficolta == "hard") {
        numeroCelle = 49;
    }

    //Dichiarazione di una variabile e al suo interno salvo il campo di gioco
    const gridContainer = document.getElementById('grid');

    //Reset del campo di gioco
    gridContainer.innerHTML = "";

    let cellePerRiga = Math.sqrt(numeroCelle);

    for (let i = 1; i <= numeroCelle; i++) {
        //Dichiarazione di una variabile e creazione di un DIV al suo interno
        const nodo = document.createElement("div");
        //Al DIV aggiungo la classe quadrato
        nodo.classList.add('quadrato');
        //e dentro il quadrato aggiungo il numero
        nodo.textContent = i;
        //Dichiarazione della variabile e aggiungo il calcolo per la dimensione del campo
        let dimensioneCampo = `calc(100% / ${cellePerRiga})`;
        //Aggiungo la dimensione del campo al CSS del quadrato
        nodo.style.width = dimensioneCampo;
        nodo.style.height = dimensioneCampo;
        //Quando clicco il quadratoh
        nodo.addEventListener('click' , function() {
            //aggiungo la classe CLICKED
            nodo.classList.add('clicked');
        });
        //Al campo di gioco aggiungo il quadrato  
        gridContainer.appendChild(nodo);
    }
}