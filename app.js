'use strict'

let jugadores=parseInt(prompt("Introduce el número máximo de jugadores de tu videojuego"));
let portada=prompt("Introduce la URL de la portada de tu videojuego");
let nombre=prompt("Introduce el nombre de tu videojuego");
let descripcion=prompt("Introduce la descripción de tu videojuego");
let categoria=prompt("Introduce la categoría de tu videojuego");
let precio=parseFloat(prompt("Introduce el precio de tu videojuego"));
let enlace=prompt("Introduce el enlace de la página oficial de tu videojuego");
let edad=confirm("¿Tu videojuego es para mayores de 18 años?");
let date=prompt("Introduce la fecha de lanzamiento de tu videojuego (YYYY-MM-DD)");
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
