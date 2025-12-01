const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

// audio
const musica = document.getElementById("musica");

document.addEventListener("click", (e) => {

    // Si hace clic sobre cualquier parte del sobre
    if (
        e.target.matches(".sobre") ||
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")
    )  {

        envoltura.classList.toggle("abierto");
        envoltura.classList.add("desactivar-sobre");

        //reproducir audio
        if (musica && musica.paused) {
            musica.volume = 0.85;
            musica.play().catch(err => console.log("error al reproduciraudio", err));
        }

        if (!carta.classList.contains("abierta")) {
            setTimeout(() => {
                carta.classList.add("mostrar-carta");

                setTimeout(() => {
                    carta.classList.remove("mostrar-carta");
                    carta.classList.add("abierta");
                }, 500);

            }, 500);
        }

    }

    // Si hace clic FUERA del sobre → cerrar
    else if (!e.target.closest(".envoltura-sobre")) {

        envoltura.classList.remove("abierto");
        envoltura.classList.remove("desactivar-sobre");

        if (carta.classList.contains("abierta")) {
            carta.classList.add("cerrando-carta");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta");
            }, 500);
        }
    }

});
