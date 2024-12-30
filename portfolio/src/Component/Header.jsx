import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
export default function Header() {
  const [check, setChecker] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Get the current vertical scroll position
    console.log("Current scroll position:", scrollPosition);
    if (window.scrollY > 39) {
      setChecker(true);
    } else {
      setChecker(false);
    }
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const [display, setDisplay] = useState(false);
  const handleHamburger = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <div className={check ? "sticky" : "header"}>
      <div className="logoname">
        <h5>{"{TitilopeNode=>"}</h5>
      </div>

      <div className="navbar">
        <ul className="bigScreen">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/project">Portfolio</Link>
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
        <div className="harmburger">
          <IoMenu
            onClick={handleHamburger}
            style={{ display: !display ? "block" : "none" }}
          />
          <ul
            className="smallScreen"
            style={{ display: display ? "block" : "none" }}
          >
            <li>
              <FaTimes
                className="harmburgers"
                style={{ display: display ? "block" : "none" }}
                onClick={handleHamburger}
              />
            </li>
            <li onClick={handleHamburger}>
              <Link to="/"> Home</Link>
            </li>
            <li onClick={handleHamburger}>
              <Link to="/project">Portfolio</Link>
            </li>
            <li onClick={handleHamburger}>
              <Link to="/contact">Contact</Link>
            </li>
            <li onClick={handleHamburger}>
              <Link to="/author">About</Link>
            </li>
            <li onClick={handleHamburger}>
              <Link
                to="https://github.com/raveroses"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </Link>
            </li>
            <li onClick={handleHamburger}>
              <Link
                to="https://x.com/TitilopeNode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="icon" />
              </Link>
            </li>
            <li onClick={handleHamburger}>
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
    </div>
  );
}
