import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, unique: true},
    password: {type: String},
});

const user_Model = mongoose.model('users', UserSchema);

export { user_Model };
