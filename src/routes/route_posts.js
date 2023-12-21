import express from 'express';
import { controller_post } from '../app/controller/Controller_Post.js';

express.urlencoded({
    extended: true,
});
var router_post = express.Router();

router_post.get('/:slug', controller_post.show);

export { router_post}

