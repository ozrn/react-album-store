import React, { useState } from "react"

const AlbumForm = () => {
  const [name, setName] = useState("")
  const [singer, setSinger] = useState("")
  const [releasedYear, setReleasedYear] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <div className="w-full max-w-xs">
      <form
        className="border-4 border-gray-600 rounded-lg px-12 py-4 m-4 relative hover:shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Album Name:{" "}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Singer:{" "}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={(e) => setSinger(e.target.value)}
            value={singer}
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Released Year:{" "}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            onChange={(e) => setReleasedYear(e.target.value)}
            value={releasedYear}
          />
        </div>
        <button
          className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 mt-3 mb-3 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add an album
        </button>
      </form>
    </div>
  )
}

export default AlbumForm
