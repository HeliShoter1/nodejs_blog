import {content_Model} from "../moldes/Content.js";

export default class Controller_New {
    index(req, res) {
        res.render('new');
    }

    create(req, res) {
        const content = new content_Model(req.body);
        content.save();
        res.json(req.body)
    }
}

export var controller_new = new Controller_New();
