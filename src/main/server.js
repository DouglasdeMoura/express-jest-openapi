import dotenv from 'dotenv'
import { app } from './app'

dotenv.config() // load .env file

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
