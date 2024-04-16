const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const carRouter = require("./routes/carRouter")
const userRouter = require("./routes/userRouter")


const PORT = 3000
const DB_NAME = "carsdb"
const DB_URL = `mongodb://localhost:27017/${DB_NAME}`

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.use("/api/cars", carRouter)
app.use("/api/users", userRouter)

const run = async () => {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT} port`)
    })
  } catch (err) {
    return console.log(err)
  }
}

run()

process.on("SIGINT", async () => {
  console.log("App finished")
  await mongoose.disconnect()
  process.exit()
})
