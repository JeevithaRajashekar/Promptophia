import {Schema, models, model } from 'mongoose';

const PromptSchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt:{
        type: String,
        required: [true, 'Please enter a prompt']
    },
    tag:{
        type: String,
        required: [true, 'Please enter a Tag']
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt;