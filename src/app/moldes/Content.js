import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug); 

const Schema = mongoose.Schema;

const ContentSchema = new Schema({
    name: { type: String, maxLength: 100 },
    decription: { type: String, maxLength: 500 },
    image: { type: String, default:'https://images.spiderum.com/sp-thumbnails/defaultthumbnail.png' },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    content: { type: String },
    slug:{type: String, slug: 'name'},
});

const content_Model = mongoose.model('news', ContentSchema);

export { content_Model };
