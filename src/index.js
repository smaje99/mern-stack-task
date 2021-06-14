const express = require('express');
const morgan = require('morgan');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware, son funciones que se ejecuten antes de que lleguen a las rutas
app.use(morgan('dev'));  // imprime las peticiones al servidor
app.use(express.json());  // valida si el dato en la petición es un JSON

// Routes
app.use(require('./routes/task.routes'));

// Static files

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
