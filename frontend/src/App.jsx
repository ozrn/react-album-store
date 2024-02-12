import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

const App = () => {
  return <div className="bg-red-400 text-white">
    <Navbar />
    <div className="pages">
      <Routes>
        <Route
          path= "/"
          element={<Home />}
        />
      </Routes>
    </div>
  </div>
}

export default App
