import express from 'express';
import { controller_new } from '../app/controller/Controller_New.js';

express.urlencoded({
    extended: true,
});
var router_new = express.Router();

router_new.post('/store', controller_new.create);
router_new.post('/', controller_new.index);
router_new.get('/', controller_new.index);

export { router_new };
