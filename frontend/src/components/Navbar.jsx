import React from "react"
import music from "../assets/music.jpg"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          className="fill-current h-8 w-8 mr-2 rounded-full"
          style={{ width: 50, height: 50 }}
          src={music}
          alt="Music Image"
        />
        <span class="font-semibold text-xl tracking-tight m-2">
          Album Store
        </span>
      </div>
    </nav>
  )
}

export default Navbar
