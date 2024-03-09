let animazioneInCorso = false;
var dado = document.getElementById('dice_container');

async function rollTheDice() {
    if (animazioneInCorso) {
        return; // Esce dalla funzione se l'animazione è già in corso
      }

    animazioneInCorso = true; // Imposta il flag a true per indicare che l'animazione è in corso
      
    const  randomNumber = Math.floor(Math.random() * 5); // Genera un numero casuale da 0 a 5 (incluso)

    const numeri = ['first','second','third','fourth','fifth','sixth']
    let numeroScelto = numeri[randomNumber] // Il numero che uscira' alla fine del roll
    
    var facceDelDado = document.querySelectorAll('.faccia'); // Nascondi tutte le facce del dado
    facceDelDado.forEach(function(faccia) {
        faccia.style.display = 'none';
    });
    
    dado.classList.remove('animato'); // Rimuovi la classe "animato" dal dado se presente, serve ad annullare la precedente richeista

    setTimeout(function() { // Attendi un breve ritardo prima di aggiungere la classe "animato"
        dado.classList.add('animato');
    }, 10);

    setTimeout(function() { 
        document.getElementById(numeroScelto).style.display="block"; // Mostra l'immagine del dado
        animazioneInCorso = false;
    }, 1000);
}


rollTheDice()