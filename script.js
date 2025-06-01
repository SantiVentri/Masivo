function handleAgregarAlCarrito() {
    const carrito = document.getElementById('cart_num');
    let numero = parseInt(carrito.textContent) || 0;
    numero += 1;
    carrito.textContent = numero;
}
