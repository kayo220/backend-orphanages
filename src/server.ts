import express from 'express';
import 'express-async-errors'
import path from 'path';
import cors from 'cors';
import './database/connection'
import routes from './routes'
import errorHandler from './errors/handler'

const app = express();
app.use(cors(
    //  { origin: ['https://nlw-kayo-happy.herokuapp.com/'] } pode pasar a orgem do frontend que fará a requisição
));
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))//acesso à pasta de uploads
app.get('/users', (request, response) => {
    return response.json({ message: 'Hello World' })
    //response.send("Hello World");
});
app.use(errorHandler);


app.listen(process.env.PORT || 3333);
//localhost:3333