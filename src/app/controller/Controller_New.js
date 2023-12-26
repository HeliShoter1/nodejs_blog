import {content_Model} from "../moldes/Content.js";
import { mongoosetoObject, multipleMongooseToObject } from "../../until/mongoose.js";

export default class Controller_New {
    index(req, res) {
        res.render('new');
    }

    create(req, res, next) {
        const content = new content_Model(req.body);
        content.save();
        console.log(req.headers.authorization);
        content_Model.find({}).then((content) =>{
            res.render('home',{
                content : multipleMongooseToObject(content),
            });
        }).catch((err) => next(err));
    }
}

export var controller_new = new Controller_New();
