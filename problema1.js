const express = require("express");
const app = express();
const port = 3055; // Puerto en el que se ejecutará el servidor

// Ruta que ejecutará el programa "Hola Mundo"
app.get("/", (req, res) => {
    res.send("Diego Labrin desde la web");
});
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor web escuchando en el puerto ${port}`);
});