import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import CreateAlbum from "./pages/CreateAlbum"
import ShowAlbum from "./pages/ShowAlbum"
import UpdateAlbum from "./pages/UpdateAlbum"
import DeleteAlbum from "./pages/DeleteAlbum"

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums/create" element={<CreateAlbum />} />
          <Route path="/albums/album-details/:id" element={<ShowAlbum />} />
          <Route path="/albums/update/:id" element={<UpdateAlbum />} />
          <Route path="/albums/delete/:id" element={<DeleteAlbum />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
