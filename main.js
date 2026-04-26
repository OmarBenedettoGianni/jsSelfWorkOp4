let numGatti =parseInt(prompt(`Inserisci il numero dei Gatti`));
let numGattiFile =parseInt(prompt(`Inserisci il numero dei Gatti in fila`));
let numeroFile = Math.floor(gattiTotali / gattiInFila);
let gattiAvanzo = gattiTotali % gattiInFila;
let gattiMancanti = gattiInFila - gattiAvanzo;
console.log(`Ci sono ${numeroFile} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${gattiAvanzo}`);