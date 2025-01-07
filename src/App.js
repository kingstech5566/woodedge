import { BrowserRouter as Browser } from "react-router-dom"
import Header from "./components/header"
import "./app.css"
import "./mobile.css"
import Main from "./components/main"
import Footer from "./components/footer"
export default function App(){
    return(
            <Browser>
            <section className="app-contain">
                <Header/>
                <Main/>
                <Footer/>
            </section>
            </Browser>
    )
}