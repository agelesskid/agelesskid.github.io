import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
    return (
        <footer id="contact">
            <div className="footer-item">
                <h2 className="footer-heading">Sviatoslav Kulieshov</h2>
                <p className="footer-desc">Please reach out if you have any questions! I would gladly jump on a video call to speak with you!</p>
            </div>
            <ul className="footer-links-list links-wrapper">
                <li className="footer-links-list-item"><Link to="mailto:agelesskid@proton.me"><FontAwesomeIcon icon={faEnvelope} className="fa-2x"/></Link></li>
                <li className="footer-links-list-item"><Link to="https://github.com/agelesskid"><FontAwesomeIcon icon={faGithub} className="fa-2x"/></Link></li>
            </ul>
        </footer>
    )
}
