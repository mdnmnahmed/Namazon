import mongoose from 'mongoose';


const initDB = () => {
    if(mongoose.connections[0].readyState){
        console.log('Already Connected with MongoDB')
        return
    }
    
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

    mongoose.connection.on('connected', ()=> {
        console.log('Connected with MongoDB')
    })

    mongoose.connection.on('error', (err)=> {
        console.log('Error in Connectiong with MongoDB :- ', err)
    })
}

export default initDB;