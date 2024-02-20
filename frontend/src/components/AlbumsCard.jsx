import React from "react"
import SingleAlbum from "./SingleAlbum"
import { CiSquarePlus } from "react-icons/ci"
import { Link } from "react-router-dom"

const AlbumsCard = ({ albums }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {albums.map((album) => (
        <SingleAlbum key={album._id} album={album} />
      ))}
      <div className="flex justify-start items-center gap-x-1 mt-4 p-4">
        <Link to={"/albums/create"}>
          <CiSquarePlus className="text-5xl text-green-800 hover:text-black" />
        </Link>
        <p>Add a new album</p>
      </div>
    </div>
  )
}

export default AlbumsCard
