import express from 'express';
import morgan from 'morgan';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware, son funciones que se ejecuten antes de que lleguen a las rutas
app.use(morgan('dev'));  // imprime las peticiones al servidor


// Routes

// Static files

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
