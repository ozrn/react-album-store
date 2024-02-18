import React, { useState, useEffect } from "react"
import axios from "axios"
import { BallTriangle } from "react-loader-spinner"
import { useParams } from "react-router-dom"

const ShowAlbum = () => {
  const [album, setAlbum] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:3000/albums/${id}`)
      .then((response) => {
        setAlbum(response.data.album)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.message)
        setLoading(true)
      })
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl my-2">Album Details</h1>
      {loading ? (
        <BallTriangle />
      ) : (
        <div className="flex flex-col border-2 border-green-500 rounded-xl w-fit p-4">
          <div className="my-2">
            <span className="text mr-2 text-green-700 font-bold">Album Name:</span>
            <span>{album.name}</span>
          </div>
          <div className="my-2">
            <span className="text mr-2 text-green-700 font-bold">Singer:</span>
            <span>{album.singer}</span>
          </div>
          <div className="my-2">
            <span className="text mr-2 text-green-700 font-bold">Released Year:</span>
            <span>{album.releasedYear}</span>
          </div>
          <div className="my-2">
            <span className="text mr-2 text-green-700 font-bold">Created Time:</span>
            <span>{new Date(album.createdAt).toString()}</span>
          </div>
          <div className="my-2">
            <span className="text mr-2 text-green-700 font-bold">Last Updated Time:</span>
            <span>{new Date(album.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowAlbum
