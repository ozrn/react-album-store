import React from "react"

const SingleAlbum = ({ album }) => {
  return (
    <div>
      <h1>{album.name}</h1>
      <h3>{album.singer}</h3>
      <h3>{album.releseadYear}</h3>
    </div>
  )
}

export default SingleAlbum
