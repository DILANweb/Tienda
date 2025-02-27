// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    alert(`${producto} ha sido agregado al carrito.`);
}

// Función para buscar productos
function buscarProducto() {
    const input = document.getElementById('busqueda').value.toLowerCase();
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        const nombre = producto.querySelector('h3').textContent.toLowerCase();
        if (nombre.includes(input)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

// Animación de entrada
document.addEventListener("DOMContentLoaded", () => {
    const secciones = document.querySelectorAll(".fade-in");

    const observar = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observar.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.3
    });

    secciones.forEach(seccion => observar.observe(seccion));
});

// Validación de formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    alert('Mensaje enviado con éxito. ¡Gracias por contactarnos!');
    e.target.reset();
});
