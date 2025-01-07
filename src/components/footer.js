
import email from "./images/mail.png"
import link from "./images/linked.png"
import insta from "./images/insta.png"
import tweet from "./images/tweet.png"
import image from "./images/footer.png"
export default function Footer(){
    return(
        <section className="footer">
            <article className="footer-one">
                <img src={image} alt="" width="100" />
                <p>&copy;Copyrights {new Date().getFullYear()}. Allrights Reseverd published by WOODEDGE PARTNERS</p>
            </article>
            <article className="footer-two">
                <p>Follow Us!</p>
                <a href="mailto:info@woodedgepartners.com"><img src={email} alt="" /></a>
                <a href="https://www.instagram.com/woodedgehq/#" target="_blank"><img src={insta} alt="" /></a>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fwoodedge-partners%2F&sa=D&sntz=1&usg=AOvVaw3b3t5vCOWU6107B9tGG2nZ"><img src={link}  alt="" /></a>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fx.com%2FWoodEdgeHQ%3Ft%3DjRgSsvkj4hZE3XO8i4_60Q%26s%3D08&sa=D&sntz=1&usg=AOvVaw3dxVISVgK1bCulttsz_JvG"><img src={tweet} alt="" /></a>
            </article>
        </section>
    )
}