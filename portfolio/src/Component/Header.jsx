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
            <a href="">Portfolio</a>
          </li>
          <li>
            {" "}
            <a href="">Contact</a>
          </li>

          <li>
            <a href="">
              <FaGithub className="icon" />
            </a>
          </li>
          <li>
            <a href="">
              <FaXTwitter className="icon" />
            </a>
          </li>
          <li>
            <a href="">
              <FaFacebook className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
