import {Schema, models, model } from 'mongoose';

//"The 'models' object is provided by the mongoose library and stores all the registered models"
// If a model named 'User' already exists in the models object, it assigns that existing object to User variable
//Thos prevents reusing the model and ensures that the existing model is reused.

//If a model named User doesnot exists in the models object, the model function from mongoose is called to ceate a new model.
//The newly created model is then assigned to the User variable

const userSchema = new Schema({
    username:{
        type: String
    },
    email:{
        type: String
    },
    image:{
        type: String
    }
});

const User = models.User || model('User', userSchema);

export default User;