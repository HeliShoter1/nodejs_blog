import express from 'express';
import { controller_site } from '../app/controller/Controler_Site.js';
import { tokenMiddleware } from '../app/security/jwt.js';

var router_site = express.Router();

router_site.post('/login', controller_site.addUser);
router_site.get('/login', controller_site.login);
router_site.get('/register',controller_site.register);
router_site.post('/search',controller_site.search);
router_site.post('/home', controller_site.home);
router_site.post('/', controller_site.index);
router_site.get('/', controller_site.index);

export { router_site };
