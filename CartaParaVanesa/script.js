// Esperar a que cargue toda la página
document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("abrir");
    const sobre = document.getElementById("sobre");

    boton.addEventListener("click", () => {

        // Ocultar el botón
        boton.style.display = "none";

        // Mostrar el sobre
        sobre.style.display = "block";

        // Pequeña animación antes de abrir
        setTimeout(() => {
            sobre.classList.add("abierto");
        }, 600);

        // Desplazarse suavemente hacia el sobre
        setTimeout(() => {
            sobre.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 400);

    });

    // Corazones flotando
    crearCorazones();

});

function crearCorazones() {

    setInterval(() => {

        const corazon = document.createElement("div");

        corazon.innerHTML = "💖";

        corazon.style.position = "fixed";
        corazon.style.left = Math.random() * window.innerWidth + "px";
        corazon.style.top = window.innerHeight + "px";
        corazon.style.fontSize = (20 + Math.random() * 30) + "px";
        corazon.style.opacity = "0.8";
        corazon.style.pointerEvents = "none";
        corazon.style.zIndex = "999";

        document.body.appendChild(corazon);

        let posicion = window.innerHeight;
        let lado = (Math.random() * 2 - 1) * 2;

        const animacion = setInterval(() => {

            posicion -= 2;
            corazon.style.top = posicion + "px";

            const izquierda = parseFloat(corazon.style.left);
            corazon.style.left = (izquierda + lado) + "px";

            corazon.style.opacity -= 0.005;

            if (posicion < -50 || corazon.style.opacity <= 0) {
                clearInterval(animacion);
                corazon.remove();
            }

        }, 16);

    }, 450);

}