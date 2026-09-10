const menuMobile =
    document.getElementById("menuMobile");

const menuAberto =
    document.getElementById("menuAberto");



/* MENU MOBILE */

menuMobile.addEventListener("click", function () {

    if (menuAberto.style.display === "block") {

        menuAberto.style.display = "none";

        menuMobile.textContent = "☰";

    } else {

        menuAberto.style.display = "block";

        menuMobile.textContent = "✕";

    }

});



/* FECHAR MENU AO CLICAR */

const linksMenu =
    menuAberto.querySelectorAll("a");


linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menuAberto.style.display = "none";

        menuMobile.textContent = "☰";

    });

});



/* ANIMAÇÃO DAS SEÇÕES */

const elementos =
    document.querySelectorAll(
        ".service-card, .gallery-item, .testimonial, .experience-grid > div"
    );


const observador =
    new IntersectionObserver(
        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("mostrar");

                    observador.unobserve(
                        entrada.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


elementos.forEach(function (elemento) {

    elemento.classList.add("esconder");

    observador.observe(elemento);

});



/* ESTILO DINÂMICO DAS ANIMAÇÕES */

const estiloAnimacao =
    document.createElement("style");


estiloAnimacao.textContent = `

    .esconder {

        opacity: 0;

        transform: translateY(25px);

        transition:
            opacity .7s ease,
            transform .7s ease;

    }


    .mostrar {

        opacity: 1;

        transform: translateY(0);

    }

`;


document.head.appendChild(
    estiloAnimacao
);