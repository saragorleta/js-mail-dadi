// Generare un numero random da 1  a 6, sia per il giocatore
//sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// document.getElementById("genera").addEventListener('click',
// function(){

  var numeroUtente= Math.floor(Math.random()*6) +1;
  var numeroPc=Math.floor(Math.random()*6) +1;
  var pareggio;

  if (numeroUtente>numeroPc){
    var numeroUtente='hai vinto!';
  }
  else if (numeroPc>numeroUtente){
    var numeroPc='hai perso!';
  }
  else(numeroUtente==numeroPc){
    var pareggio='Pareggio';
  }

  document.getElementById('Genera').innerHTML='';
