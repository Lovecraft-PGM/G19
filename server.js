const express = require('express');
const path = require('path');
const app = express(); //crear una instancia de la aplicacion express
const PORT = 420;
//configurar express para que procese los datos del formulario en formato url
app.use(express.urlencoded({ extended: true }));//middleware que permite a express entender datos enviados-
//Css
app.use(express.static('style.css'));
app.use(express.static(path.join(__dirname, 'public')));
//definir la ruta para servir el archivo html
app.get('/', (req, res) => {
    //envia el archivo formulario .html al cliente
    res.sendFile(path.join(__dirname, 'form.html'))//
});
//define la ruta para procesar el envio del formulario
app.post('/register', (req, res) => {
    const { nombre, email, edad, cursos } = req.body;
  
    console.log(`
      Datos del formulario:
      Nombre: ${nombre}
      Email: ${email}
      Edad: ${edad}
      Cursos: ${cursos}
    `);
  
    res.send(`
      <h1>¡Registro exitoso!</h1>
      <p>Se ha registrado al estudiante:</p>
      <ul>
        <li>Nombre: ${nombre}</li>
        <li>Email: ${email}</li>
        <li>Edad: ${edad}</li>
        <li>Cursos: ${cursos}</li>
      </ul>
    `);
  });
app.listen(PORT, () => {
    console.log(`servidor funcionando en http://localhost:${PORT}`);
});