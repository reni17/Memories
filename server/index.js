import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import  {initializeDatabase}  from '../server/config/database.js'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'

const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use('/posts', postRoutes)
app.use('/user', userRoutes)


initializeDatabase()
.then(()=> {
    app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}...`)) 
})
.catch((err) => console.log(err))

// mongooseSet()