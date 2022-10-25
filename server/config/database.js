import mongoose from 'mongoose'
// const options = { useNewUrlParser: true, useUnifiedTopology: true };

const urlConection ='mongodb://localhost:27017/momories';

export const initializeDatabase = () => mongoose.connect(urlConection)


export const mongooseSet = () => mongoose.set('useFindAndModify', false)