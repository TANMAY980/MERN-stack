import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from"../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot} from "@fortawesome/free-solid-svg-icons";
const Hotel = () => {
  const[slideNumber,setSlideNumber]=useState(0);
  const[open,setOpen]=useState(false); 
  const photos=[
    {
      src:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202203031530499235-f84e7a8a9a3011ec95770a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg&downsize=821:550&crop=821:550"
  },
  {
      src:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202203031530499235-1b0785f0b5b411ecbef10a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;88,0&output-format=jpg&downsize=821:550&crop=821:550"
  },
  {
      src:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202203031530499235-83b2ab16b5b411ecbef10a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;3,0&output-format=jpg&downsize=821:550&crop=821:550"
  },
  {
      src:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202203031530499235-284f2a0ab5b511ecb9640a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;32,0&output-format=jpg&downsize=821:550&crop=821:550"
  },
  
  {
      src:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202203031530499235-af713e5eb5b711ecafe50a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg&downsize=821:550&crop=821:550"
  },
  {
    src:"https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202203031530499235-d12aa3e6db4611ec8a120a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;55,0&output-format=jpg&downsize=821:550&crop=821:550"
  },
  ];
 const handleOpen=(i)=>{
  setSlideNumber(i);
  setOpen(true);
 };
const handleMove=(direction)=>{
  let newSlideNumber;
  if(direction ==="l"){
    newSlideNumber = slideNumber ===0 ? 5 : slideNumber -1;
  }else{
    newSlideNumber = slideNumber ===5 ? 0 : slideNumber +1;
  }
  setSlideNumber(newSlideNumber);
};

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">  
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="slideWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel
          </h1> 
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton st 125 New York</span>
          </div>
            <span className="hotelDistance">
              Excellent location - 500m from center
            </span>
            <span className="hotelPriceHighlight">
            Book a stay over 3999 at this property and get a free airport taxi 
            </span>
            <div className="hotelImages">
              {photos.map((photo,i)=>(
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(i)}src={photo.src} 
                  alt="" 
                  className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hoteTitle">Stay in the heart of the City</h1>
                <p className="hotelDesc">
                Located a 5-minute walk from beach in mumbai ,Tower street apartments has accommodations with air conditioning and free wifi
                    the unit come with hardwood floors ans feature a fully equipped kitchenette with a microwave a flat screen Tv,and  a private bathroom with shower
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>perfect for a night-stay! </h1> 
                <span>located in the real heart of mumbai the property has an excellent location score of 9.8</span> 
                <h2>
                  <b>5999</b>(9 nights)
            </h2>
            <button>Reserve or Book Now</button>
             </div>
            </div>
            </div>
          <MailList/>
          <Footer/>
        </div>
      </div>
  )
}

export default Hotel

/*import "./hotel.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import{useState} from 'react';
import { faCircleXmark,faCircleArrowRight,faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
  const[slideNumber,setSlideNumber]=useState(0);
  const[open,setOpen]=useState(false);
  const photos=[
    {
        src:"https://cf.bstatic.com/xdata/images/hotel/square200/31204963.webp?k=4f2932bb4d141ce19a13c43f253e734382a4cc50fdf896aac401efb14a4279cc&o=&s=1"
    },
    {
        src:"https://cf.bstatic.com/xdata/images/hotel/square200/32810813.webp?k=bb406ae78c183de2c56c61cd4b28de03192ca497f4ec1f2873a4fd8a47bde33d&o=&s=1"
    },
    {
        src:"https://cf.bstatic.com/xdata/images/hotel/square200/61178298.webp?k=caec4e76105bec687e59b07ad34523cb96159922b81775e667ec86c2dc3f0070&o=&s=1"
    },
    {
        src:"https://cf.bstatic.com/xdata/images/hotel/square200/281146271.webp?k=59c863b4372225d6c6390fc1842120592e3d854c880b3ea24cec8b5040272449&o=&s=1"
    },
    {
        src:"https://cf.bstatic.com/xdata/images/hotel/square200/245293353.webp?k=47b83828a90e8557012530c55c4cfa2850ad30303c2e0c78a73d67c992e5f5f5&o=&s=1"
    },
    {
        src:"https://cf.bstatic.com/xdata/images/hotel/square200/58463474.webp?k=1d1f0de6265625c8b3d18da78b66d002061f4e01fba8e58fb3d4e4294ab88404&o=&s=1"
    },
    {
        src:"https://cf.bstatic.com/xdata/images/hotel/square200/169755493.webp?k=c795c700345164651ae8b6ffa20aa5e7c7bf94103a30793f5eda71f042822698&o=&s=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/square200/248811829.webp?k=1d0efca15d32234815e2e0df10f237e8bd39d81e9a9c478dc65e0cc13295b9af&o=&s=1"
    },
  ];
  const handleOpen=(i)=>{
    setSlideNumber(i);
    setOpen(true);
  }
  const handleMove=(direction)=>{
    let newSlideNumber;
    if(direction==="l"){
        newSlideNumber=slideNumber ===0?5:slideNumber-1 ;  
    }
    else{
        newSlideNumber=slideNumber ===5?0:slideNumber+1;
    }
    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
                <img src={photos[slideNumber].src} alt="" className="slideImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight}className="arrow"onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
            <button className="bookNow">Reserve or book now!</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton st 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m fron center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over 3999 at this property and get a free airport taxi 
          </span>
          <div className="hotelImages">
              {photos.map((photo,i)=>(
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg"/>
                </div>
              ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">
                    stay in the hearty of mumbai
                </h1>
                <p className="hotelDesc">
                    Located a 5-minute walk from beach in mumbai ,Tower street apartments has accommodations with air conditioning and free wifi
                    the unit come with hardwood floors ans feature a fully equipped kitchenette with a microwave a flat screen Tv,and  a private bathroom with shower
                </p>
            </div>
            <div className="hotelDetailsPrice">
                <h1>perfect for a night-stay! </h1> 
                <span>located in the real heart of mumbai the property has an excellent location score of 9.8</span>  
            
                <h2><b>5999</b>nights
            </h2>
            <button>reserve or book now</button>
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
</div>
  )
}

export default Hotel
*/
