import express, { Application } from 'express';
import path from 'path';
import cors from 'cors';
import exphbs from 'express-handlebars';

import photoRoutes from './routes/index';
import IndexRoutes from "./routes/routes";

// Initializations 
const app: Application = express();


// Settings 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials')
}));
app.set('view engine', '.hbs');

// Middlewares 
app.use(cors());
app.use(express.json());


// Routes 
app.use('/', IndexRoutes);
app.use('/api', photoRoutes);

// this folders for this application will be used to store public file images
app.use('/uploads', express.static(path.resolve('uploads')));

export default app; 