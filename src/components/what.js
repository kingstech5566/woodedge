
import image from "./images/img2.webp"
export default function What(){
    return(
        <section className="about">
            <h1 className="one">WHAT WE DO</h1>
            <p className="two">At WoodEdge Partners, we specialize in comprehensive Employer of Record (EOR) services in Nigeria, offering seamless workforce management for foreign companies aiming to expand without establishing a local entity. We handle the complexities of Nigerian employment compliance, HR management, and payroll, so you can focus on your core business goals.<br/> Our services are tailored to meet the unique needs of international companies navigating Nigeria’s employment landscape. From managing employee benefits and onboarding to ensuring legal compliance with Nigeria’s labor laws, we deliver cost-effective, efficient solutions for your offshore teams.</p>
            <div className="six">
            <b className="bold">Our Core Services Include:</b>
                <ol>
                    <li><b>EOR services in Nigeria∹</b><br/>We serve as trusted local partner, managing everything from employee contracts and HR administration to payroll and tax compliance. By acting as your EOR(Employer of Record), we ensure full legal compliance with Nigeria employment laws, proctecting your business form regulatory risks.</li>
                    <li><b>Employment Legal Compliance∹</b><br/>Staying compliant with Nigeria's labor regulations is crucial for any business. Our team is well-versed in Nigeria's complex labor codes and works proactively to keep your compliant. We handle all local requirements for employment, taxes and benefits, ensuring your work force remain compliant with Nigerian employment laws.</li>
                    <li><b>HR Management and Support∹</b><br/>From recruiting and onboarding to managing employee relations, we provide full HR support, acting as your HR department in Nigeria. With our hands-on approach, we help you build a high-performing team while handling all HR functions and administrative tasks locally.</li>
                    <li><b>Payroll and Benefits Administration∹</b><br/>We ensure prompt, accurate payroll management tailored to Nigerian standards. Our team manages employee benefits and payroll distribution, ensuring your team is supported and compensated correctly, following Nigerian legal standards.</li>
                    <li><b>Risk and Compliance Assurance∹</b><br/>Operating internationally comes with challenges, but our risk management and compliance assurance help mitigate them. We manage employment-related risks, ensuring your business operates smoothly and within legal bounds.</li>
                </ol>
            </div>
            <div className="three">
                <article className="four">
                    <h1>Our services</h1>
                    <img src={image} alt="" width="100" />
                </article>
                <div className="five">
                <article>
                    <h2>✔Legal</h2>
                    <p>We ensur you workforce remains fully compliant with Nigerian employment laws</p>
                </article>
                <article>
                    <h2>✔Taxes</h2>
                    <p>Comprehensive managemnet of taxes, benefits, and payslips</p>
                </article>
                <article>
                    <h2>✔Recruitment</h2>
                    <p>Comprehensive Employee Recruitment and Onboarding Process</p>
                </article>
                <article>
                    <h2>✔Payments</h2>
                    <p>Streamlined payments for contractors, EORs, and direct hires</p>
                </article>
                </div>
            </div>
            <div className="techniques">
                    <h1>TECHNIQUES</h1>
                    <p>Maintaining strong employee engagement in offshore teams</p>
                    <ul>
                        <h2>Tailored Onboarding Programs</h2>
                        <li>Team member starts with clarity and confidence by customizing onboarding to match their roles and cultural context.</li>
                        <h2>Regular Virtual Check-ins</h2>
                        <li>Schedule consistent one-on-one or team check-ins to address concerns, provide feedback, and foster open communication.</li>
                        <h2>Performance Recognition and Rewards</h2>
                        <li>Celebrate achievements with tailored recognition programs that resonate across cultural and individual preferences.</li>
                        <h2>Professional Development Oppourtines</h2>
                        <li>Offer training, certifications and career growth paths to keep employees motivated and invested in their roles.</li>
                        <h2>Clear Communication and Transparency</h2>
                        <li>Use tools and practices that encourage consistent updates, alignment on goals, and an inclusive feedback loop.</li>
                        <h2>Work-Life Balance Support</h2>
                        <li>Implement policies that respect local customs and promote flexibilty to ensure employees feel valued and balanced</li>
                    </ul>
            </div>
        </section>
    )
}