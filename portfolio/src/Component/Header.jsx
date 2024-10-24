import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <div className="logoname">
        <h5>{"{TitilopeNode=>"}</h5>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" Contact>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/hummanitarian">Hummanitarian</Link>
          </li>

          <li>
            <Link to="#">
              <FaGithub className="icon" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaXTwitter className="icon" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaFacebook className="icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
