import React, { useState, useEffect } from "react"
import axios from "axios"
import { BallTriangle } from "react-loader-spinner"
import AlbumsCard from "../components/AlbumsCard"
// import AlbumForm from "../components/AlbumForm"

const Home = () => {
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("http://localhost:3000/albums")
      .then((response) => {
        setAlbums(response.data.albums)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        {loading ? (
          <BallTriangle
            height={80}
            width={80}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            visible={true}
          />
        ) : (
          <AlbumsCard albums={albums} />
        )}
      </div>
      
    </div>
  )
}

export default Home