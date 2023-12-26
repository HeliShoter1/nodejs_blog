import {content_Model} from "../moldes/Content.js";
import { mongoosetoObject, multipleMongooseToObject } from "../../until/mongoose.js";
import { decodeToken } from "../security/jwt.js";
import * as formidable from "formidable";

export default class Controller_New {
    index(req, res) {
        res.render('new');
    }

    create(req, res, next) {
        const user = decodeToken(req.headers.authorization);
        if(req.headers['content-type'] && req.headers['content-type'].includes('multipart/form-data')){
            const form = new formidable.IncomingForm();
            form.parse(req, (err, fields, files) => {
                if (err) {
                  next(err);
                  return;
                }
                const newContent = new content_Model({ 
                    name: fields.name[0],
                    decription: fields.decription[0], 
                    image: fields.image[0],
                    content: fields.content[0],
                    idUser: user._id
                });
                newContent.save();
                content_Model.find({}).then((content) => {
                    res.render('home', {
                        content: multipleMongooseToObject(content),
                    });}).catch((err) => next(err));
                }).catch((err) => next(err));
        }else{
            const content = new content_Model(req.body);
            console.log(content);
            content.save();
            content_Model.find({}).then((content) =>{
                res.render('home',{
                    content : multipleMongooseToObject(content),
                });
            }).catch((err) => next(err));
        }
    }
}

export var controller_new = new Controller_New();
