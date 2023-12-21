import {content_Model as ct} from "../moldes/Content.js"
import { mongoosetoObject } from "../../until/mongoose.js";

export default class Controller_Post {
    show(req, res, next) {
        ct.findOne({slug: req.params.slug}).then((content)=>{
                res.render('content/show',{
                content : mongoosetoObject(content),
            });
        }).catch(next);
    }
}

export var controller_post = new Controller_Post();
