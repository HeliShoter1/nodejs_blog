import express from 'express';
import morgan from 'morgan';
import path from 'path';
import BodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import { checkToken } from './app/security/jwt.js';
import * as index_route from './routes/index.js';
import * as db from './config/db/index.js';

db.connect();

const app = express();
const port = 3000;
const bodyParser = BodyParser;
const handlebars = engine;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(morgan('combined'));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine(
    'handlebars',
    handlebars({
        extname: '.handlebars',
    }),
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));

index_route.route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
