import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home">
      <div className="flex">
        <div className="detail">
          <h5>Front-End Developer</h5>
          <h6>Results-Driven Front-End Developer </h6>
          <p>
            A front-end developer passionate about building functional,
            user-friendly websites. Skilled in HTML, CSS, JavaScript, and
            creating responsive designs, I focus on delivering smooth user
            experiences. I'm dedicated to writing clean, efficient code and
            always looking to improve my skills and stay updated with new
            technologies.
          </p>
        </div>
        <div className="images">
          <img src="/images/waris.JPG" alt="author" />
        </div>
      </div>

      <div className="whatsapp">
        <a
          href="https://wa.me/2348163700384?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
          target="_blank"
        >
          Let's Chat
          <FaWhatsapp style={{ marginLeft: "5px" }} />
        </a>
      </div>
    </div>
  );
}
