import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
dotenv.config()
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
const port = process.env.PORT
const start = async () => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

start()
