import dotenv from "dotenv"
dotenv.config()
import "./db-connection.js"
import express from "express"
import album from "./routers/album.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
app.use("/albums", album)

app.get("/", (req, res) => {
  return res.send("Welcome to Music Store App")
})

export default app