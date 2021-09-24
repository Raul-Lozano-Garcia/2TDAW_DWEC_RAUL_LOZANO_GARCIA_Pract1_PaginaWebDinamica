'use strict'

// let jugadores=parseInt(prompt("Introduce el número máximo de jugadores de tu videojuego"));
// let portada=prompt("Introduce la URL de la portada de tu videojuego");
// let nombre=prompt("Introduce el nombre de tu videojuego");
// let descripcion=prompt("Introduce la descripción de tu videojuego");
// let categoria=prompt("Introduce la categoría de tu videojuego");
// let precio=parseFloat(prompt("Introduce el precio de tu videojuego"));
// let enlace=prompt("Introduce el enlace de la página oficial de tu videojuego");
// let edad=confirm("¿Tu videojuego es para mayores de 18 años?");
// let date=prompt("Introduce la fecha de lanzamiento de tu videojuego (YYYY-MM-DD)");
// let fecha=date.split("-");

let jugadores=1;
let portada="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Blasphemous.jpg";
let nombre="Blasphemous";
let descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel exercitationem architecto fugit perspiciatis quibusdam ab tenetur repellendus enim officia, recusandae corrupti, ex iste labore. Omnis facilis eligendi, ab exercitationem odit consectetur vel alias nam tempora cum dicta, earum molestiae dolores nisi laboriosam dolore. Quaerat sed dolorum assumenda unde est minus quae amet vitae eius ipsum numquam aliquid temporibus, asperiores, quisquam, autem saepe impedit optio at voluptatem aperiam id natus excepturi cupiditate? Totam cupiditate, accusantium dolore sequi enim repellat, inventore labore aut maxime exercitationem quam ad mollitia iste distinctio? Soluta blanditiis ipsam molestiae eius? Consequatur, laudantium blanditiis. Adipisci, omnis neque.";
let categoria="Indie";
let precio=12.55;
let enlace="https://store.steampowered.com/app/774361/Blasphemous/";
let edad="true";
let date="2021-02-10";
let fecha=date.split("-");

document.write(`
<header>
<h1 class="centrado" style="font-size: 3em;">${nombre}</h1>
<div id="portada">
<img src="${portada}" alt="Portada del videojuego">
</div>
</header>
<main>
<div>
    <h2>Descripción:</h2>
    <p>${descripcion}</p>
</div>
<table border>
    <caption>Especificaciones</caption>
    <tr>
        <td>Número máximo de jugadores</td>
        <td>${jugadores}</td>
    </tr>
    <tr>
        <td>Categoría</td>
        <td>${categoria}</td>
    </tr>
    <tr>
        <td>Precio</td>
        <td>${precio}€</td>
    </tr>
    <tr>
        <td>Página web oficial</td>
        <td><a href="${enlace}" target="blank">Pincha aquí para acceder</a></td>
    </tr>
    <tr>
        <td>¿Es para mayores de 18?</td>
        <td>${edad}</td>
    </tr>
    <tr>
        <td>Fecha de lanzamiento</td>
        <td>${fecha[2]}-${fecha[1]}-${fecha[0]}</td>
    </tr>
</table>
</main>
<footer class="centrado">
<small>&copy; Copyright Raúl Lozano García 2021</small>
</footer>
`);