import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import logo from "./images/img1.jpg"
import menu from "./images/menu.png"
import home from "./images/home.png"
import about from "./images/about.png"
import price from "./images/prices.png"
import privacy from "./images/privacy.png"
import disclaimer from "./images/disclaimer.png"
export default function Header(){

    const [imageSrc] = useState(menu)
    const [slide, setSlide] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef(null)


    function handleSlide(){
        setSlide(!slide)
        setIsOpen(!isOpen)
    }

    const handleClickOutside = (e) =>{
        if (navRef.current && !navRef.current.contains(e.target)) {
            setIsOpen(false);
          }
    }

    useEffect(() => {
        // Add event listener for clicks outside of the navbar
        document.addEventListener("mousedown", handleClickOutside);
    
        // Cleanup the event listener when component unmounts
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    const slide_nav = {
        left: slide && 0 + "px"
    }

    return(
        <section className="header">
            <article>
                <img src={logo} alt="" width="30" />
                <p>WOODEDGE PARTNERS</p>
            </article>
          {isOpen && (
              <nav style={slide_nav} ref={navRef}>
              <Link to="/"><img src={home} alt="" width="25" />HOME</Link>
              <Link to="/about"><img src={about} alt="" width="25" />ABOUT US</Link>
              <Link to="/price"><img src={price} alt="" width="25" />PRICING</Link>
              <Link to="/privacy"><img src={privacy} alt="" width="25" />PRIVACY</Link>
              <Link to="/disclaimer"><img src={disclaimer} alt="" width="25" />DISCLAIMER</Link>
              <button><a href="https://docs.google.com/forms/d/e/1FAIpQLSeV20GwyIfojn9ze9FksZY05ZXaHnq_Dk7iRcQI6q_l7HNEyQ/viewform">CONTACT US</a></button>
          </nav>
          )}
            <button className="image" onClick={handleSlide}>
                <img src={imageSrc} alt="" width="30"/>
            </button>
        </section>
    )
}