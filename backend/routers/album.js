import express, { Router } from "express"
import { Album } from "../models/album.js"

const router = express.Router()

router.post("/", async (req, res) => {
  const {name, singer, releasedYear} = req.body
  try {
    const album = await Album.create({name, singer, releasedYear})
    res.json(album)
  } catch (error) {
    res.json({ message: error.message })
  }
})

router.get("/", async (req, res) => {
  try {
    const albums = await Album.find({})
    res.json({ albums })
  } catch (error) {
    res.json({ message: error.message })
  }
})  

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const album = await Album.findById(id)
    if(!album){
      return res.json({error: 'No such album'})
    }
    res.json({ album })
  } catch (error) {
    res.json({ message: error.message })
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const album = await Album.findOneAndUpdate({_id: id}, {...req.body})
    if (!album) {
      return res.send("Try it again to update the album")
    } 
    res.send("Album updated successfully!")
  } catch (error) {
    res.json({ message: error.message })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const album = await Album.findByIdAndDelete(id)
    if (!album) {
      return res.json({ message: "The album could not be deleted" })
    } 
    res.json({ message: "The album deleted successfully" })
  } catch (error) {
    console.log(error.message)
  }
})

export default router

