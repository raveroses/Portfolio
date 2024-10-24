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
            <Link to="/author">About</Link>
          </li>
          <li>
            <Link to="/hummanitarian">Event</Link>
          </li>

          <li>
            <Link to="https://github.com/raveroses">
              <FaGithub className="icon" />
            </Link>
          </li>
          <li>
            <Link to="https://x.com/TitilopeNode">
              <FaXTwitter className="icon" />
            </Link>
          </li>
          <li>
            <Link to="https://web.facebook.com/profile.php?id=100062592943567">
              <FaFacebook className="icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
