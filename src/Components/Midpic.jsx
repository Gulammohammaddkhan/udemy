import React, { useState } from 'react'
import MidPic1 from "./../assets/images/Mid-pic.webp"
import SecondPhoto from "./../assets/images/second-photo.jpg"

import "./MidpicStyle.css"
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";



function Midpic() {
  let picArr = [MidPic1, SecondPhoto]
  const [imageIndex, setImageIndex] = useState(0)

  const leftHandler = () => {
    if (imageIndex > 0) {
      setImageIndex(prev => prev - 1)
    }

  }
  const rightHandler = () => {
    if (imageIndex < picArr.length - 1) {
      setImageIndex(prev => prev + 1)
    }
  }

  return (

    <div className=''>
      <div className='midpic'>
        <button><FaChevronCircleLeft className='left' /></button>
        <button> <FaChevronCircleRight className='right' /> </button>

        <img src={MidPic1} />

        <div className='photo1'>
          <h1>24-Hour Flash Sale</h1>
          <p>Learn valuable, practical skills for as low as ₹549. Sale ends tonight!</p>
          <button className='info'>More Info</button>
        </div>
      </div>
      <div className='midpic'>
        <img src={SecondPhoto} />

        <div className='photo1'>
          <h1>Skills that drive you forward</h1>
          <p>"Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive."</p>
          <button className='info'>View Plans...</button>
        </div>
      </div>

    </div>
  )
}




export default Midpic