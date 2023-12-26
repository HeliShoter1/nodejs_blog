import {content_Model} from "../moldes/Content.js"
import { multipleMongooseToObject, mongoosetoObject } from '../../until/mongoose.js';
import { user_Model } from "../moldes/User.js";
import { createToken } from "../security/jwt.js";

export default class Controller_Site {
    index(req, res, next) {
        console.log(req.headers.authorization);
        content_Model
            .find({})
            .then((content) => {
                res.render('home', {
                    content: multipleMongooseToObject(content),
                    token : req.token
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
    home(req, res, next) {
        user_Model.findOne({ email: req.body.email, password: req.body.password }).then((user) => {
            if (user) {
                content_Model.find({})
                .then((ct) => {
                    let tk = createToken(mongoosetoObject(user));
                    res.set('Authorization', `Bearer ${tk}`);
                    res.render('home',{
                        content : multipleMongooseToObject(ct),
                        token : req.token
                    })
            }).catch((err) => {
                    next(err);
                });
            }else {
                res.render('login', {
                err: `Sai mật khẩu hoặc email`
              });
            }
            }).catch((err) => {
                next(err);
            });
        }      
    addUser(req,res,next){
       if(req.body.password != req.body.Repassword){
            res.render('register',{
                err: 'Passwords are not the same'
            })
       }
       else{
            user_Model.findOne({email: req.body.email, password: req.body.password}).then((user) =>{
                console.log(user);
                if(user){
                    res.render('register',{
                        err : `email has exists`
                    })
                }else{
                    const user = new user_Model(req.body);
                    user.save();
                    res.render('login',{
                        Notification : 'registered successfully'
                    });
                }
            }).catch((err) => next);
       }
    }
}

export var controller_site = new Controller_Site();
