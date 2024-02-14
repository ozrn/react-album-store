import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <header className="bg-red-400 text-white">
        <div className="mx-0 max-w-7xl px-2 sm:px-6 lg:px-8">
            <Link to="/" >
                <h1>Music Store</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar