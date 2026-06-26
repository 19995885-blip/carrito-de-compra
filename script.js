// script.js

let contador = 0;
let total = 0;

function agregarCarrito(nombre, precio){

  contador++;
  total += precio;

  document.getElementById("contador").innerText = contador;

  document.getElementById("total").innerText = total;

  let lista = document.getElementById("lista-carrito");

  let item = document.createElement("div");

  item.classList.add("item-carrito");

  item.innerHTML = `
    <span>🎮 ${nombre}</span>
    <span>$${precio}</span>
  `;

  lista.appendChild(item);

}

function comprar(){

  let resultado = document.getElementById("resultadoCompra");

  if(total <= 0){

    resultado.style.display = "block";

    resultado.innerHTML = `
      ❌ Tu carrito está vacío
    `;

  }else{

    resultado.style.display = "block";

    resultado.innerHTML = `
      ✅ Compra realizada con éxito <br><br>
      🛒 Productos comprados: ${contador} <br>
      💵 Total pagado: $${total} <br><br>
      🎮 Gracias por comprar en CYBER SHOP
    `;

  }

}