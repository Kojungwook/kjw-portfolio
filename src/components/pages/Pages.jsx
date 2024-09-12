import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../common/Header"
import { Home } from "../home/Home"
import { About } from "./About"
import { Portfolio } from "./Portfolio"
import { Skills } from "./Skills"
export const Pages = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/kjw-portfolio' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
    // <>
    // <Hero />
    // <About />
    // <Skills />
    // <Portfolio />
    // </>
  )
}
