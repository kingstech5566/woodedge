import { Route, Routes } from "react-router-dom"
import Home from "./home"
import What from "./what"
import Price from "./price"
import Privacy from "./privacy"
import Disclaimer from "./disclaimer"
export default function Main(){
    return(
        <section className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<What/>}/>
                <Route path="/price" element={<Price/>}/>
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path="/disclaimer" element={<Disclaimer/>}/>
            </Routes>
        </section>
    )
}