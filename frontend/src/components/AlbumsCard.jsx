import React from "react"
import SingleAlbum from "./SingleAlbum"

const AlbumsCard = ({ albums }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {albums.map((album) => (
        <SingleAlbum key={album._id} album={album}/>
      ))}
    </div>
  )
}

export default AlbumsCard
