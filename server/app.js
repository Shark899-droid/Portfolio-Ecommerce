import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import UserRouter from "./controllers/User.js"
import sequelize from "./database/database.js"
dotenv.config()
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use("/api/v1",UserRouter)
const port = process.env.PORT
const start = async () => {
  app.listen(port, async () => {
    await sequelize.sync({ alter: true });
    console.log('Database sincronizzato con successo.')
    console.log(`Server listening on port ${port}`)
  })
}

start()
