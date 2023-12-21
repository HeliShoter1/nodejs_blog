import {content_Model} from "../moldes/Content.js"
import { multipleMongooseToObject, mongoosetoObject } from '../../until/mongoose.js';

export default class Controller_Site {
    index(req, res, next) {
        content_Model
            .find({})
            .then((content) => {
                res.render('home', {
                    content: multipleMongooseToObject(content),
                });
            })
            .catch((err) => next(err));
    }
    login(req, res) {
        res.render('login');
    }
    search(req, res, next){
        content_Model.find({ name: { $regex: req.body.s, $options: 'i' } }).then((content) =>{
            res.render('home',{
                content : multipleMongooseToObject(content),
            });
        }).catch((err) => next(err));
    }
    register(req,res,next){
        res.render('register');
    }
}

export var controller_site = new Controller_Site();
