import { Link } from "react-router-dom"
import port from "./images/img3.png"
import port1 from "./images/img4.png"
import map from "./images/map.png"
import image from "./images/employ.jpg"
import card from "./images/teches.jpg"
import wall from "./images/wall.png"
import tick from "./images/ticker.png"
import usa from "./images/usa.png"
import uk from "./images/uk.png"
import france from "./images/france.png"
import greece from "./images/greece.png"
import czech from "./images/czech.png"
import glo from "./images/gloup.png"
import world from "./images/world.png"
export default function Home(){
    return(
        <section className="home">
            <div className="wall">
                <article className="wall-one"><h2>WOODEDGE PARTNERS</h2>
                <button><a href="https://docs.google.com/forms/d/e/1FAIpQLSeV20GwyIfojn9ze9FksZY05ZXaHnq_Dk7iRcQI6q_l7HNEyQ/viewform">Start Today</a></button></article>
                <article className="wall-two"><img src={wall} alt="" /></article>
              </div>
            <article>
                <p>
                With WoodEdge Partners as your EOR in Nigeria, you gain a trusted partner that understands the local market, prioritizes cost-effective and compliant solutions, and enables your business to grow with confidence. Reach out today to discover how our expertise in EOR, HR services, and employment compliance can streamline your expansion into Nigeria.<br/>
                We provide a comprehensive EOR solution to help you hire, pay, and manage your international team. Our tailored approach simplifies HR, ensures compliance, and empowers your business to grow without borders.
                </p>
            </article>
            <div className="work">
                <article className="work-list">
                    <h2>Work Payments & Employer of Records solutions</h2>
                    <p>We help you expand your business, hire, pay, and manage your global team without the hassle of setting up a local legal entity. Our tailored solutions fit companies of any size. We handle all administration tasks and compliance, ensuring your team feels truly valued and cared for.</p>
                    <p className="work-button">
                    <button><Link to="/price">Get started</Link></button>
                    <button className="butt"><a href="https://docs.google.com/forms/d/e/1FAIpQLSeV20GwyIfojn9ze9FksZY05ZXaHnq_Dk7iRcQI6q_l7HNEyQ/viewform">Talk to an Expert</a></button>
                    </p>
                </article>
                <article className="work-image">
                    <p><img src={tick} alt="" /><b>40% faster</b> operational processes</p>
                    <p><img src={tick} alt="" />Cut admin time by <b>90%</b></p>
                    <p><img src={tick} alt="" />Onboard <b>3x faster</b></p>
                    <p><img src={tick} alt="" /><b>Time is money. Don't waste time</b></p>
                </article>
            </div>
            <div className="next">
                <img src={image} alt="" />
                <h1>WHAT WE DO</h1>
                <p>
                    At WoodEdge Partners, we specialize in comprenhensive Employer of Record (EOR) services in Nigeria, offering seamless workforce management for foreign companies aiming to expand or extend without establishing a local entity. We handle the complexities of Nigerian employment compliance, HR management, and payroll, so you can focus on your core business goals. 
                </p>
                <b className="bold">Our Core Services Include:</b>
                <ol>
                    <li className="li"><b>EOR services in Nigeria∹</b><br/>We serve as trusted local partner, managing everything from employee contracts and HR administration to payroll and tax compliance. By acting as your EOR(Employer of Record), we ensure full legal compliance with Nigeria employment laws, proctecting your business form regulatory risks.</li>
                    <li className="li"><b>Employment Legal Compliance∹</b><br/>Staying compliant with Nigeria's labor regulations is crucial for any business. Our team is well-versed in Nigeria's complex labor codes and works proactively to keep your compliant. We handle all local requirements for employment, taxes and benefits, ensuring your work force remain compliant with Nigerian employment laws.</li>
                    <li className="li"><b>HR Management and Support∹</b><br/>From recruiting and onboarding to managing employee relations, we provide full HR support, acting as your HR department in Nigeria. With our hands-on approach, we help you build a high-performing team while handling all HR functions and administrative tasks locally.</li>
                    <li className="li"><b>Payroll and Benefits Administration∹</b><br/>We ensure prompt, accurate payroll management tailored to Nigerian standards. Our team manages employee benefits and payroll distribution, ensuring your team is supported and compensated correctly, following Nigerian legal standards.</li>
                    <li className="li"><b>Risk and Compliance Assurance∹</b><br/>Operating internationally comes with challenges, but our risk management and compliance assurance help mitigate them. We manage employment-related risks, ensuring your business operates smoothly and within legal bounds.</li>
                </ol>
            </div>
            <div className="image">
            <h2>WOODEDGE PARTNERS</h2>
            <p>One solution, worldwide reach—locally tailored for your success</p>
            <article>
            <img src={port} alt="" width="200" />
            <img src={port1} alt="" width="200" />
            </article>
            </div>
            <div className="div">
                <article className="maps">
                    <img src={map} alt="" width="300" />
                </article>
                <article className="map-list">
                    <ul>
                        <li>Streamlined payments for contractors, EORs, and direct hires</li>
                        <li>Comprehensive management of taxes, benefits, and payslips</li>
                        <li>Automated invoicing to reduce administrative load</li>
                        <li>Local expertise in legal, tax, and accounting compliance</li>
                        <li>Recruitment</li>
                    </ul>
                </article>
            </div>
            <div className="card">
                <article className="card-list">
                    <h2>Build Your Career On Your Terms</h2>
                    <h2>@WOODEDGE PARTNERS</h2>
                    <p>We help you expand your business, hire, pay, and manage your global team without the hassle of setting up a local legal entity. Our tailored solutions fit companies of any size. We handle all administrative tasks and compliance, ensuring your team feels truly valued and cared for.</p>
                    <article className="card-button">
                    <Link to="/price"><button>Get STARTED</button></Link>
                    <button className="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLSeV20GwyIfojn9ze9FksZY05ZXaHnq_Dk7iRcQI6q_l7HNEyQ/viewform">MEET AN EXPERT</a></button>
                    </article>
                </article>
                <article className="card-image">
                    <img src={card} alt="" />
                </article>
            </div>
            <div className="cover">
            <article className="cover-first">
                <h2>Each individual is different.</h2>
                <p>We look after your employees better than anyone else.</p>
                <button>Explore employee solutions</button>
            </article>
            <article className="cover-second">
                <h2>Global coverage</h2>
                <p>One solution, worldwide reach—locally tailored for your success</p>
                <article>
                    <p className="cover-third">
                        <b className="cover-image">
                            <img src={usa} alt="" />
                            <img src={uk} alt="" />
                            <img src={france} alt="" />
                            <img src={greece} alt="" />
                            <img src={czech} alt="" />
                        </b>
                       <p className="cover-p">
                       <b>85+</b>
                       <i>countries worldwide</i>
                       </p>
                    </p>
                    <p className="cover-glo">
                        <img src={glo} alt="" />
                       <p>
                       <b>300</b>
                       <i>employers served</i>
                       </p>
                    </p>
                    <p className="cover-world">
                        <img src={world} alt="" />
                        <p>
                        <b>Personalised approach</b>
                        <i>across the globe</i>
                        </p>
                    </p>
                </article>
            </article>
        </div>
        </section>
    )
}