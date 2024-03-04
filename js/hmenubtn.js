const buttons = document.querySelectorAll("button");

const modal = document.getElementById('exampleModal');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const currentState = button.getAttribute("data-state");

        if (!currentState || currentState === "closed") {
            button.setAttribute("data-state", "opened");
            button.setAttribute("aria-expanded", "true");
        } else {
            button.setAttribute("data-state", "closed");
            button.setAttribute("aria-expanded", "false");
        }
    });
});

modal.addEventListener('shown.bs.modal', function () {
    // Cuando el modal se muestra
    buttons.forEach((button) => {
        button.setAttribute("data-state", "opened");
        button.setAttribute("aria-expanded", "true");
    });
});

modal.addEventListener('hidden.bs.modal', function () {
    // Cuando el modal se cierra
    buttons.forEach((button) => {
        button.setAttribute("data-state", "closed");
        button.setAttribute("aria-expanded", "false");
    });
});

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    const modal = document.getElementById('exampleModal');

    if (windowWidth > 768) {
        // Cierra el modal si está abierto
        if (modal.classList.contains('show')) {
            const modalDismissButton = modal.querySelector('.btn-close');
            modalDismissButton.click(); // Simula un clic en el botón de cierre del modal
        }
    }
});

const contact = document.getElementById('contact');
contact.onmousemove = (e) => {
    const x = e.pageX - contact.offsetLeft;
    const y = e.pageY - contact.offsetTop;

    contact.style.setProperty('--x', x + 'px');
    contact.style.setProperty('--y', y + 'px');
}