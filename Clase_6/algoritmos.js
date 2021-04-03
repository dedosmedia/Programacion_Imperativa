// EJERCICIO 1. LORO REPITE

function loro(palabra) {
  for (let i=1; i<=5; i++) {
    console.log(palabra);
  }  
}

function leerDatos() {
  let usuarioIngresa = document.getElementById("numero").value;
  loro(usuarioIngresa);  
}






//EJERCICIO 2. CUENTA LOS IMPARES

function noParesDeContarImparesHasta(numero) {

  let contador = 0;
  for (let i=1; i<=numero; i++) {
    if( i % 2 != 0)    
    {
      contador++;
      //console.log("i es: "+i+" impar. El contador va en: "+contador);
    }
  }  
  return contador;
}

function leerDatos2() {
  // Estoy leyendo lo que el usuario introduce
  let usuarioIngresa = document.getElementById("numero2").value;

  let respuesta = noParesDeContarImparesHasta(usuarioIngresa);  
  console.log("La respuesta es: "+respuesta);
}
