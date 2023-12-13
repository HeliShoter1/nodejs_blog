import express from 'express';
import morgan from 'morgan';
import path from 'path';
import {engine} from 'express-handlebars';
import {fileURLToPath} from 'url';

const app = express();
const port = 3000;
const handlebars = engine;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(morgan('combined'));

app.engine('handlebars', handlebars({
  extname: '.handlebars'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resource/views'))

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});