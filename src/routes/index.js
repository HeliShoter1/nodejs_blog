import { router_new } from './route_news.js';
import { router_site } from './route_site.js';
import { router_post } from './route_posts.js';

function route(app) {
    app.use('/news', router_new);
    app.use('/post',router_post);
    app.use('/', router_site);
}

export { route };
