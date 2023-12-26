import express from 'express';
import { controller_new } from '../app/controller/Controller_New.js';
import { checkToken,tokenMiddleware } from '../app/security/jwt.js';

express.urlencoded({
    extended: true,
});
var router_new = express.Router();

router_new.post('/store', checkToken, controller_new.create);
router_new.post('/',checkToken, controller_new.index);
router_new.get('/',checkToken, controller_new.index);

export { router_new };
