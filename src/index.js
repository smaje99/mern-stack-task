import express from 'express';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware, son funciones que se ejecuten antes de que lleguen a las rutas

// Routes

// Static files

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
