import { Link } from "react-router-dom"
import { useState} from "react"
import logo from "./images/img1.jpg"
import menu from "./images/menu.png"
import close from "./images/close.png"
export default function Header(){

    const [imageSrc, setImageSrc] = useState(menu)
    const [slide, setSlide] = useState(false)


    function handleSlide(){
        setSlide(!slide)

        //change the nav image
        setImageSrc(preimageSrc =>
            preimageSrc === menu
            ? close
            : menu
        )
    }

    const slide_nav = {
        left: slide && 0 + "px"
    }

    return(
        <section className="header">
            <article>
                <img src={logo} alt="" width="30" />
                <p>WOODEDGE PARTNERS</p>
            </article>
              <nav style={slide_nav}>
              <Link to="/" className="home">HOME</Link>
              <Link to="/about">ABOUT US</Link>
              <Link to="/price">PRICING</Link>
              <button><a href="https://docs.google.com/forms/d/e/1FAIpQLSeV20GwyIfojn9ze9FksZY05ZXaHnq_Dk7iRcQI6q_l7HNEyQ/viewform">CONTACT US</a></button>
          </nav>
            <button className="image" onClick={handleSlide}>
                <img src={imageSrc} alt="" width="30"/>
            </button>
        </section>
    )
}