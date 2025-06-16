function handleSubmit(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    const messageError = document.getElementById('messageError');

    form.email.classList.remove('error');
    form.subject.classList.remove('error');
    form.message.classList.remove('error');
    messageError.textContent = '';

    if (email === '' || subject === '' || message === '') {
        if (email === '') {
            form.email.classList.add('error');
        }
        if (subject === '') {
            form.subject.classList.add('error');
        }
        if (message === '') {
            form.message.classList.add('error');
        }
        messageError.style.display = 'block';
        messageError.style.color = 'red';
        messageError.textContent = 'Por favor, complete todos los campos.';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        form.email.classList.add('error');
        messageError.style.display = 'block';
        messageError.style.color = 'red';
        messageError.textContent = 'Por favor, ingrese un email válido.';
        return;
    }

    if (subject.length < 3) {
        form.subject.classList.add('error');
        messageError.style.display = 'block';
        messageError.style.color = 'red';
        messageError.textContent = 'El asunto debe tener al menos 3 caracteres.';
        return
    }

    if (message.length < 10) {
        form.message.classList.add('error');
        messageError.style.display = 'block';
        messageError.style.color = 'red';
        messageError.textContent = 'El mensaje debe tener al menos 10 caracteres.';
        return;
    }
    
    messageError.style.display = 'block';
    messageError.style.color = 'green';
    messageError.textContent = `Gracias por contactarnos. Alguien de nuestro equipo se pondrá en contacto contigo tu correo: ${email}`;
}

function handleReset() {
    const form = document.querySelector('form');
    const messageError = document.getElementById('messageError');
    form.email.classList.remove('error');
    form.subject.classList.remove('error');
    form.message.classList.remove('error');
    messageError.textContent = '';
    form.reset();
}