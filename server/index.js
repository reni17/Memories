import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import  {initializeDatabase}  from '../server/config/database.js'
import postRoutes from './routes/posts.js'

const PORT = process.env.PORT || 5000
const app = express()
app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

initializeDatabase()
.then(()=> {
    app.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}...`)) 
})
.catch((err) => console.log(err))

// mongooseSet()