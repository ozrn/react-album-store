import express from "express"
import { PORT, databaseURL } from "./config.js"
import mongoose from "mongoose"
import album from "./routers/album.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
app.use("/albums", album)


app.get("/", (req, res) => {
  return res.send("Welcome to Music Store App")
})

mongoose
  .connect(databaseURL)
  .then(() => {
    console.log("Connection is successfull")
    app.listen(PORT, () => {
      console.log(`App is listening on ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
