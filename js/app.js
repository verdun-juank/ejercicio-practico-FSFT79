console.log ("hola mundo");

/* #Solo un elemento con el mismo ID El mayor del HTML
const boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    console.log("se hizo click")
});
*/

// todos los elementos con el mismo ID

const botones = document.querySelectorAll('#boton');
const contador = document.getElementById("count");


botones.forEach(function(boton) {
  boton.addEventListener('click', function(event) {
    // console.log ("se hizo click");
    const contadorActual = Number(contador.textContent)
    contador.textContent = contadorActual + 1;
    // console.log ("se sumo")
    event.target.style.backgroundColor = 'green';
    setTimeout (() => {
    boton.style.backgroundColor = "#fff";
    }, 500)

    
  });
});






