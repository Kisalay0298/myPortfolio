import logo from "../assets/raviKumarLogo.webp"
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={50} height={33} alt="logo" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center sm:gap-4 gap-6 text-2xl">
            <a href="https://www.linkedin.com/in/kisalay-komal-16125922b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-white hover:text-blue-500 transition-colors duration-300" size={28} />
            </a>
            <a href="https://www.linkedin.com/in/kisalay-komal-16125922b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaGithub className="text-white hover:text-blue-500 transition-colors duration-300" size={28} />
            </a>
            <a href="https://www.linkedin.com/in/kisalay-komal-16125922b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaInstagram className="text-white hover:text-blue-500 transition-colors duration-300" size={28} />
            </a>
            <a href="https://www.linkedin.com/in/kisalay-komal-16125922b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaTwitter className="text-white hover:text-blue-500 transition-colors duration-300" size={28} />
            </a>
        </div>
    </div>
  )
}

export default Navbar