import React, { useState } from "react"
import axios from "axios"
import { BallTriangle } from "react-loader-spinner"
import { useNavigate, useParams } from "react-router-dom"

const DeleteAlbum = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  const handleRemoveAlbum = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:3000/albums/${id}`)
      .then(() => {
        setLoading(false)
        navigate("/")
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }

  return (
    <div className="p-4">
      {loading ? <BallTriangle /> : ""}
      <div className="flex flex-col items-center border-2 border-green-400 rounded-xl w-[400px] p-6 mx-auto my-20">
        <h3 className="text-1xl">Are you sure you want to delete this album?</h3>
        <div>
        <button className="p-2 bg-green-600 rounded-xl text-white m-4 w-[100px]" onClick={handleRemoveAlbum}>
          Yes
        </button>
        <button className="p-2 bg-green-600 rounded-xl text-white m-4 w-[100px]" onClick={(() => navigate("/"))}>
          No
        </button>
        </div>
      </div>
    </div>
  )
}        
         
export default DeleteAlbum
