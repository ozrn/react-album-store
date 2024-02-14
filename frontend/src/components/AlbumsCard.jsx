import React from "react"
import SingleAlbum from "./SingleAlbum"

const AlbumsCard = ({ albums }) => {
  return (
    <div>
      {albums.map((album) => (
        <SingleAlbum key={album._id} album={album}/>
      ))}
    </div>
  )
}

export default AlbumsCard
