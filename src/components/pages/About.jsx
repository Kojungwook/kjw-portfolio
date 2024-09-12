import React from "react"
import { Heading } from "../common/Heading"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          <>
            <div className='left' data-aos='fade-down-right'>
              <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt='' />
            </div>
            <div className='right' data-aos='fade-down-left'>
              <Heading title='About Me' />
              <p>이름 : 고정욱</p>
              <p>생년월일 : 95.09.16</p>
              <p>주소 : 대구광역시 동구</p>
              <p>연락처 : 010-3262-2542</p>
            </div>
          </>
        </div>
      </section>
    </>
  )
}
