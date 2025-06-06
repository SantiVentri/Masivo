function handleAgregarAlCarrito() {
    const carrito = document.getElementById('cart_num');
    let numero = parseInt(carrito.textContent) || 0;
    numero += 1;
    carrito.textContent = numero;
}

function handleSubmit() {
    const email = document.getElementById('email').value;
    alert(`Gracias por contactarnos. Alguien de nuestro equipo se pondrá en contacto contigo tu correo: ${email}`);
}