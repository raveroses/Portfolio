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
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/author">About</Link>
          </li>

          <li>
            <Link
              to="https://github.com/raveroses"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </Link>
          </li>
          <li>
            <Link
              to="https://x.com/TitilopeNode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="icon" />
            </Link>
          </li>
          <li>
            <Link
              to="https://web.facebook.com/profile.php?id=100062592943567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
