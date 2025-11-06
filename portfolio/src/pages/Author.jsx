import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Author() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="contact-flex">
      <div className="auth-image" data-aos="fade-down-left">
        <img src="/images/realestate.jpg" alt="Author-image" />
      </div>
      <div className="detail" data-aos="fade-right">
        <h5>About Me</h5>

        <p>
          A front-end developer who is passionate about building functional
          websites. As a Mass Communication graduate with experience in
          advertising and public relations, I create websites and content that
          appeal to, attract, and persuade users. Quality User experience is my
          priority, and I deliver it to their satisfaction.
        </p>
      </div>

      <div className="tech" data-aos="zoom-in">
        <h5>Technologies</h5>
        <div className="tech-flex">
          <div className="st">
            <FaHtml5 className="techcon" />
          </div>
          <div className="st">
            <FaCss3Alt className="techcon" />
          </div>
          <div className="st">
            {" "}
            <FaJsSquare className="techcon" />
          </div>
          <div className="st">
            <FaReact className="techcon" />
          </div>
          <div className="st">
            <FaGithub className="techcon" />
          </div>
        </div>
      </div>

      <div
        className="experience"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h5>Experience</h5>
        <div className="realExperience">
          <h6>Frontend Developer - Web3Bridge</h6>
          <p>
            As we all know, learning is a continuous process. I joined the
            Web3Bridge Bootcamp, where I gained valuable experience in managing
            projects efficiently while meeting deadlines. It wasn’t just about
            technical skills—teamwork and collaboration were essential as we
            built a ChatGPT clone. Beyond technical expertise, soft skills like
            communication were emphasized. One of the most important experiences
            I had was presenting to my peers, preparing us for future
            professional interactions. At the Bootcamp, we were equipped with
            both technical and soft skills to ensure well-rounded development.
          </p>
        </div>
      </div>
    </div>
  );
}
