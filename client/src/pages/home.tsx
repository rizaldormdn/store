import React, { } from "react"
import Footer from "../component/organisms/footer"
import Header from "../component/organisms/header"
import Navbar from "../component/organisms/navbar"

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <Footer />
    </div>
  )
}

export default Home