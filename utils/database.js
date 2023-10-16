import mongoose from 'mongoose';

let isConnected = false;

const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log('Mongo DB already connected');
        return;
    }

    try {

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        isConnected = true;
        console.log('Mongo DB Connected');
        
    } catch (error) {
        console.log(error)
    }
}

export default connectToDB;