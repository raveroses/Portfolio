import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Contact() {
  return (
    <>
      <p style={{ color: "white" }}>nttttet</p>
      <div className="connect">
        <div className="firstbox">
          <h5> Connect with me</h5>
          <a href="mailto:odekunlewaris@gmail.com">
            <SiGmail /> odekunlewaris@gmail.com
          </a>

          <a href="tel:+2349024986450">
            <FaPhoneAlt />
            +2349024986450
          </a>

          <a
            href="https://twitter.com/raveandroses"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            @raveandroses
          </a>

          <a
            href="https://twitter.com/TitilopeNode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter /> @TitilopeNode
          </a>

          <a
            href="https://wa.me/2348163700384?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Let's Chat
          </a>
        </div>
        <div className="secondbox">
          <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" />
            <label htmlFor="email">Email</label>
            <input type="email" />
            <label htmlFor="message">Message</label>
            <textarea name="" id=""></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
