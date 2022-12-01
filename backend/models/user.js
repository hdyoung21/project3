import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema ({
    name: {
        type: String, 
        required: [true, 'Please provide your first name.'], 
        minlength: 3, 
        maxlength: 20, 
        trim: true, 
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String, 
        required: [true, 'Please provide password.'],
        minlength: 8,
        select: false,
    },
    // lastName: {
    //     type: String, 
    //     trim: true, 
    //     maxlength: 20, 
    //     required: [true, 'Please provide your last name.']
    // },
    // githubUser: {
    //     type: String, 
    //     required: [true, 'Please provide your github username.']
    //     //could ask for the link but i think it would be better if it was just the username
    // }, 
    id: {
        type: String, 
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
      },
});

export default mongoose.model('User', userSchema);