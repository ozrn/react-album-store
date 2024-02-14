import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <header className="bg-green-500 text-white">
        <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
            <Link to="/" >
                <h1>Music Store</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar