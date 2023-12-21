import express from 'express';
import { controller_site } from '../app/controller/Controler_Site.js';

var router_site = express.Router();

router_site.post('/login', controller_site.login);
router_site.get('/register',controller_site.register);
router_site.post('/search',controller_site.search);
router_site.post('/', controller_site.index);
router_site.get('/', controller_site.index);

export { router_site };
