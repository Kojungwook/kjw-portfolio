import React from "react"
import Typewriter from "typewriter-effect"

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='heroContent'>
          <h1>
            <Typewriter
              options={{
                strings: ["안녕하세요", "웹개발자 고정욱입니다"],
                autoStart: true,
                loop: true,
                delay: 100
              }}
            />
          </h1>
        </div>
      </section>
    </>
  )
}