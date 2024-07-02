import express from 'express'
import helmet from 'helmet'
import routes from './src/routes/index.js'
import mongoose from 'mongoose'
import { ENV } from './src/constant/index.js'
import chalk from 'chalk'

const app = express()
const port = 3000

app.use(express.json())
app.use(helmet())

// const connectDatabase = async () => {
  // try {
    // await 
    mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASS}@cluster0.laktd5w.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)

    mongoose.connection.on('connected', () => {
      console.log(chalk.yellow.bold('<---- Connected to Database ---->'))
    })
  // }
  // catch (error) {
  //   console.log('cannot connect to database')
  // }
// }

// connectDatabase()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
