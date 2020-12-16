// Generare un numero random da 1  a 6, sia per il giocatore
//sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// document.getElementById("genera").addEventListener('click',
// function(){

  var numeroUtente= prompt('inserisci il numero da 1 a 6');
  var numeroPc=Math.floor(Math.random()*6) +1;
  var risultato='sono uguali';




  if (numeroUtente>numeroPc){
    var numeroUtente;

  }
  else if (numeroPc>numeroUtente){
    var numeroPc;

  }
  else(numeroUtente==numeroPc){
    var risultato;
  }

  document.getElementById('Genera').innerHTML='';
