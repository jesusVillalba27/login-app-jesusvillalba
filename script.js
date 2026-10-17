document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue
    
    const usuario = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();
    const mensaje = document.getElementById('mensaje');

    if (usuario === '' || password === '') {
        mensaje.textContent = 'Error: Todos los campos son obligatorios.';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'Ingreso exitoso.';
        mensaje.style.color = 'green';
    }
});