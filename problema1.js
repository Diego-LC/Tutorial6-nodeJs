const express = require("express");
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor
// Ruta que ejecutará el programa "Hola Mundo"
app.get("/", (req, res) => {
    res.send("Hola Mundo desde la web");
});
// Iniciar el servidor
app.listen(port, () => {
    console.log("Servidor web escuchando en el puerto ${port}");
});