import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "./images/img1.jpg"
import menu from "./images/menu.png"
import close from "./images/close.png"
import home from "./images/home.png"
import about from "./images/about.png"
import price from "./images/prices.png"
import privacy from "./images/privacy.png"
import disclaimer from "./images/disclaimer.png"
export default function Header(){

    const [imageSrc, setImageSrc] = useState(menu)
    const [slide, setSlide] = useState(false)


    function handleSlide(){
        setSlide(!slide)

        // change the image
        setImageSrc(previmageSrc =>
            previmageSrc === menu
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
                <Link to="/"><img src={home} alt="" width="25" />HOME</Link>
                <Link to="/about"><img src={about} alt="" width="25" />ABOUT US</Link>
                <Link to="/price"><img src={price} alt="" width="25" />PRICING</Link>
                <Link to="/privacy"><img src={privacy} alt="" width="25" />PRIVACY</Link>
                <Link to="/disclaimer"><img src={disclaimer} alt="" width="25" />DISCLAIMER</Link>
            </nav>
            <button className="image" onClick={handleSlide}>
                <img src={imageSrc} alt="" width="30"/>
            </button>
        </section>
    )
}