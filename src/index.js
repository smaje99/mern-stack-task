import express from 'express';
import morgan from 'morgan';

import routes from './routes/task.routes';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware, son funciones que se ejecuten antes de que lleguen a las rutas
app.use(morgan('dev'));  // imprime las peticiones al servidor
app.use(express.json());  // valida si el dato en la petición es un JSON

// Routes
app.use(routes);

// Static files

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
