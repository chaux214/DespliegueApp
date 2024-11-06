// Función para agregar productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        const productName = document.querySelector(`#modalBolso${productId}Label`).innerText;

        // Aquí puedes agregar la lógica para agregar al carrito, por ejemplo:
        alert(`${productName} ha sido agregado al carrito.`);
        
        // Ejemplo simple de agregar a un carrito (puedes mejorar esto)
        // Puedes guardar la información en un array o en localStorage
    });
});

// Función para mostrar el modal de Bootstrap
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
    modal.addEventListener('shown.bs.modal', () => {
        // Aquí puedes realizar cualquier acción cuando el modal se muestre
    });
});
