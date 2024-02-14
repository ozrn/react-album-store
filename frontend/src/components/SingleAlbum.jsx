import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineDelete } from "react-icons/md"

const SingleAlbum = ({ album }) => {
  return (
    <div className="border-4 border-gray-600 rounded-lg px-12 py-4 m-4 relative hover:shadow-xl">
      <h2 className="absolute top-1 right-3 px-2 py-1 bg-red-200 rounded-lg">
        {album.releasedYear}
      </h2>
      <div className="flex justify-start items-center gap-x-2">
        <h2 className="my-2">{album.name}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <h2 className="my-2">{album.singer}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-4 mt-4 p-4">
        <Link to={`/books/details/${album._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black"/>
        </Link>
        <Link to={`/books/edit/${album._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black"/>
        </Link>
        <Link to={`/books/delete/${album._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black"/>
        </Link>
      </div>
    </div>
  )
}

export default SingleAlbum
