const express = require("express");
const app = express();
const port = 3055;

// Configuración del motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("in_persona_02");
});

app.post("/procesar", (req, res) => {
    const { nombre, apellido, direccion, fechaNacimiento, comentario} = req.body;

    // Calcula la edad a partir de la fecha de nacimiento 
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const ahora = new Date();
    const edad = ahora.getFullYear() - fechaNacimientoDate.getFullYear();
    // contar cuantos carácteres numericos tiene el comentario
    const cantNumerosComentario = comentario.replace(/\D/g, "").length;

    // Renderiza la vista de resultado
    res.render("out_persona_02", {
    nombre,
    apellido,
    direccion,
    edad,
    cantNumerosComentario
    });
});

app.listen(port, () => {
    console.log(`Servidor web escuchando en el puerto ${port}`);
});