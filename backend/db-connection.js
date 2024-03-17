import mongoose from "mongoose"

async function main() {
  mongoose.set("strictQuery", false)
  mongoose.connect(process.env.DB_URL || "mongodb://127.0.0.1/music-db")
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err))
}    

main()
