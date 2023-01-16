import React from "react"
import { About } from "../pages/About"
import { Portfolio } from "../pages/Portfolio"
import { Services } from "../pages/Services"
import { Hero } from "./Hero"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </>
  )
}
