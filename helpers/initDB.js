import mongoose from 'mongoose'

function initDB() {
    if (mongoose.connections[0].readyState) {
        console.log("Already Connected with DB");
        return
    }
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    })
    mongoose.connection.on('error', () => {
        console.log('Error occured in connection with DB');
    })
}

export default initDB