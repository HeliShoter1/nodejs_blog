import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Node_DB');
        console.log('connect successfully');
    } catch (error) {
        console.log('connect failure');
    }
}
