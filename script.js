function handleAgregarAlCarrito() {
    const carrito = document.getElementById('cart_num');
    let numero = parseInt(carrito.textContent) || 0;
    numero += 1;
    carrito.textContent = numero;
}

function handleCambiarCategoría(categoria) {
    const productos = document.querySelectorAll('.item');

    productos.forEach(producto => {
        if (producto.classList.contains(categoria) || categoria === 'all') {
            producto.style.display = 'flex';
        } else {
            producto.style.display = 'none';
        }
    });
}