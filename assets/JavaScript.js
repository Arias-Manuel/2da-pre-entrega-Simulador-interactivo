function nombre() {

  let usuario = prompt(`¡Hola!. ¿Cual es tu nombre/apodo?`);

  while (!isNaN(usuario)) {
    alert(`¡No has ingresado ningun nombre/apodo!, por favor vuelve a intentarlo!`);  
    usuario = prompt(`Vuelve a poner un nombre/apodo. Como suelen llamarte`);
   }
   return usuario;
}

let nombreUsuario = nombre();
console.log(`Hola ${nombreUsuario}`);

const productos = [
  {nombre: "Leche", precio: 100 },
  {nombre: "Yogur", precio: 120 },
  {nombre: "Fernet", precio: 350 },
  {nombre: "Cerveza", precio: 200 },
  {nombre: "Galletas", precio: 150 }

];

let carrito = [];

let seleccion = prompt(`Bienvenidos al Supermarket digital, ${nombreUsuario}. \n\n¿Desea comprar algo? Si o No\n`).toUpperCase();

while(seleccion != "SI" && seleccion != "NO") {
  alert(`Porfavor ingresa Si o No dentro del recuadro :C`);
  seleccion = prompt(`¿Denuevo, Desea comprar algo? Si o No`).toUpperCase();
}

console.log(`${seleccion} Has entrado al SuperMarket Digital`)

if(seleccion == "SI") {
  alert(`A continuacion vera nuestra lista de productos`);
  let productosGenerales = productos.map(productos => productos.nombre + " "+ productos.precio + "$");
  alert(productosGenerales.join(" - "));
} else if (seleccion == "NO"){
  alert(`Que lastima, vuelva pronto y cuidate mucho ${nombreUsuario} :)!!!`);
  console.log(`¡Adios!`)
}

while(seleccion != "NO") {
  let productos = prompt(`Leche 100$, Yogur 120$, Fernet 350$, Cerveza 200$, Galletitas 150$ \n\nAgrega unos de los productos al carrito\n`);
  let precio = 0;

  if(productos == "Leche" || productos == "Yogur" || productos == "Fernet" || productos == "Cerveza" || productos == "Galletitas") {
    switch(productos) {
      case "Leche":
          precio = 100;
          break 
      case "Yogur":
          precio = 120;
          break
      case "Fernet":
          precio = 350;
          break
      case "Cerveza":
          precio = 200;
          break
      case "Galletitas":
          precio = 150;
          break
      default:
        break; 
    }
    
    let unidades = parseInt(prompt(`¿Cuantas unidades quieres llevar, ${nombreUsuario}?`));

    carrito.push({productos, unidades, precio});

  } else {
    alert(`Ese producto no se encuentra disponible o a tipeado mal, ${nombreUsuario}`);
  }

  seleccion = prompt(`Desea seguir comprando, ${nombreUsuario}.\n\nSi o No\n`).toUpperCase();

  while(seleccion === "NO" ) {
    alert(`Gracias por su compra :). Hasta pronto`);
    carrito.forEach((carritoFinal) => {
      console.log(`Llevas---> Productos: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades}, Su factura: ${carritoFinal.unidades * carritoFinal.precio}`);
      alert(`Productos: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades}, Su factura: ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);

document.write(`El total a pagar por su compra es: ${total}, ¡ADIOS!`)

console.log(`El total a pagar por su compra es: ${total}`);

console.log(`Hasta luego!`);