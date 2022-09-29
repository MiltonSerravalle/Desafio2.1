const contenedor = document.getElementById("contenedor");
 
let productos = [
  {
    id: 1,
    nombre: "Remera Britney",
    precio: 3000,
    
  },
  {
    id: 2,
    nombre: "Remera Pibes Chorros",
    precio: 3000,
    
  },
  {
    id: 3,
    nombre: "Buzo Berserk",
    precio: 4500,
    
  },
  {
    id: 4,
    nombre: "Buzo Gorillaz",
    precio: 5000,
    
  },
];

let carroCompras = [];

productos.forEach(item => {
  let productoDom = document.createElement("contenedor2");
  productoDom.innerHTML = `
    
    <h4 class="titulo">${item.nombre}</h4>
    <p class="precio">Precio: $ ${item.precio}</p>
    <button id=${item.id}>Agregar al carro</button>   
    `;

  contenedor.append(productoDom);
  const button = document.getElementById(item.id);
  button.addEventListener("click", () => agregaCarrito(item));
});

const agregaCarrito = (item) => {
  let productoStock = carroCompras.find((producto) => producto.id === item.id);
  if (productoStock !== undefined) {
    productoStock.precio = productoStock.precio + item.precio;
    productoStock.cantidad = productoStock.cantidad + 1;
  } else {
    carroCompras.push({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: 1,
    });
  }
};

let carrito = document.getElementById("numeroCarrito");
carrito.innerHTML = `${carroCompras.length}`;

boton.addEventListener("click", () => console.log(carroCompras))