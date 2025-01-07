
import port from "./images/img3.png"
import port1 from "./images/img4.png"
import map from "./images/map.png"
import nija from "./images/nigeria.png"
export default function Home(){
    return(
        <section className="home">
            <article>
                <h1>WOODEDGE PARTNERS</h1>
                <p>
                <b>With WoodEdge Partners as your EOR in Nigeria, you gain a trusted partner that understands the local market, prioritizes cost-effective and compliant solutions, and enables your business to grow with confidence. Reach out today to discover how our expertise in EOR, HR services, and employment compliance can streamline your expansion into Nigeria.</b>
                <b>We provide a comprehensive EOR solution to help you hire, pay, and manage your international team. Our tailored approach simplifies HR, ensures compliance, and empowers your business to grow without borders.</b>
                <button><a href="https://docs.google.com/forms/d/e/1FAIpQLSeV20GwyIfojn9ze9FksZY05ZXaHnq_Dk7iRcQI6q_l7HNEyQ/viewform">SEND US A MESSAGE</a></button>
                </p>
            </article>
            <div className="next">
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
            <img src={port} alt="" width="200" />
            <img src={port1} alt="" width="200" />
            </div>
            <div className="marquee">
                <p><marquee direction="direction"><img src={nija} alt="" width="50" />Leverage Nigeria's skilled, adaptable workforce at a fraction of global labor costs.</marquee></p>
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
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeV20GwyIfojn9ze9FksZY05ZXaHnq_Dk7iRcQI6q_l7HNEyQ/viewform"><button>Request a Consultant</button></a>
                </article>
            </div>
        </section>
    )
}