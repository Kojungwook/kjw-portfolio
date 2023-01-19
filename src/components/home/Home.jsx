import React from "react"
import { About } from "../pages/About"
import { Portfolio } from "../pages/Portfolio"
import { Skills } from "../pages/Skills"
import { Hero } from "./Hero"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
    </>
  )
}
