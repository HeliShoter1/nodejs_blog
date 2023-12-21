export function multipleMongooseToObject(mongooseArrays) {
    return mongooseArrays.map((item) => item.toObject());
}

export function mongoosetoObject(mongoose){
    return mongoose ? mongoose.toObject() : mongoose;
}
