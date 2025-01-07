import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "./images/img1.jpg"
import menu from "./images/menu.png"
import close from "./images/close.png"
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
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT US</Link>
                <Link to="/price">PRICING</Link>
                <Link to="/privacy">PRIVACY</Link>
                <Link to="/disclaimer">DISCLAIMER</Link>
            </nav>
            <button className="image" onClick={handleSlide}>
                <img src={imageSrc} alt="" width="30"/>
            </button>
        </section>
    )
}