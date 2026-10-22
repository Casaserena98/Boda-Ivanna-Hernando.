/* =========================================
   ELEMENTOS
========================================= */

const boton = document.getElementById("abrirInvitacion");

const musica = document.getElementById("musica");


/* =========================================
   LINK DE LA INVITACIÓN
========================================= */

const linkInvitacion =
    "https://casaserena98.github.io/Boda-Ivanna-Hernando/";


/* =========================================
   AL HACER CLIC EN ABRIR INVITACIÓN
========================================= */

boton.addEventListener("click", function () {

    /* -------------------------------------
       1. REPRODUCIR MÚSICA
    ------------------------------------- */

    musica.volume = 1;

    musica.play()
        .then(function () {

            console.log("La música comenzó correctamente.");

        })
        .catch(function (error) {

            console.log(
                "No se pudo reproducir la música:",
                error
            );

        });


    /* -------------------------------------
       2. ABRIR LA INVITACIÓN
    ------------------------------------- */

    window.open(
        linkInvitacion,
        "_blank"
    );

});