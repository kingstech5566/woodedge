
import price from "./images/price.png"
import basic from "./images/basic.png"
import premium from "./images/premium.png"
import enter from "./images/enterprise.png"
export default function Price(){
    return(
        <section className="price">
        <div className="price-header">
            <h1>PRICING</h1>
            <img src={price} alt="" width="200" />
            <article className="price-header-buttons">
                <button><a href="https://docs.google.com/forms/d/e/1FAIpQLSeV20GwyIfojn9ze9FksZY05ZXaHnq_Dk7iRcQI6q_l7HNEyQ/viewform">GET STARTED</a></button>
                <button><a href="https://docs.google.com/forms/d/e/1FAIpQLSeV20GwyIfojn9ze9FksZY05ZXaHnq_Dk7iRcQI6q_l7HNEyQ/viewform">GET STARTED</a></button>
                <button><a href="https://docs.google.com/forms/d/e/1FAIpQLSeV20GwyIfojn9ze9FksZY05ZXaHnq_Dk7iRcQI6q_l7HNEyQ/viewform">GET STARTED</a></button>
            </article>
        </div>
        <div className="price-list">
           <article className="price-list-basic">
            <h2><img src={basic} alt="" width="30" />Basic</h2>
            <ul>
                <li><b>$199</b> base platform fee per month</li>
                <li>Designed for teams of <b>1-9 employees</b></li>
                <li>Get on-demand expert payroll compliance support</li>
                <li>Payslip creation and delivery</li>
                <li>Salary and tax payments</li>
                <li>Employee benefits and deductions</li>
                <li>Local filing with authorities</li>
                <li>Customizable reporting</li>
                <li>HR experts to help navigate stateside workforce complexities </li>
                <li>Ideal for small businesses and startups needing straightforward, essential EOR services.</li>
            </ul>
           </article>
           <article className="price-list-premium">
            <h2><img src={premium} alt="" width="30" />Premium</h2>
            <ul>
                <li><b>$299</b> base platform fee per month</li>
                <li>Perfect for teams of <b>10-19 employees</b></li>
                <li>Get on-demand expert payroll compliance support </li>
                <li>Payslip creation and delivery</li>
                <li>Salary and tax payments</li>
                <li>Employee benefits and deductions</li>
                <li>Local filing with authorities</li>
                <li>Customizable reporting</li>
                <li>HR experts to help navigate stateside workforce complexities </li>
                <li>Adds scalability for growing businesses with advanced support needs.</li>
            </ul>
           </article>
           <article className="price-list-enter">
            <h2><img src={enter} alt="" width="30" />Enterprise</h2>
            <ul>
                <li><b>Contact us for pricing</b></li>
                <li>Customized solutions for <b>20+ employees</b> or specialized requirements</li>
                <li>Payslip creation and delivery</li>
                <li>Salary and tax payments</li>
                <li>Employee benefits and deductions</li>
                <li>Local filing with authorities</li>
                <li>Customizable reporting</li>
                <li>Get on-demand expert payroll compliance support </li>
                <li>HR experts to help navigate stateside workforce complexities </li>
                <li>Tailored for organizations seeking comprehensive EOR support with flexible options.</li>
            </ul>
           </article>
        </div>
        </section>
    )
}