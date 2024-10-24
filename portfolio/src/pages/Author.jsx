import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Author() {
  return (
    <div className="contact-flex">
      <div className="auth-image">
        <img src="/images/auth.JPG" alt="Author-image" />
      </div>
      <div className="detail">
        <h5>About Me</h5>

        <p>
          A front-end developer who is passionate about building functional
          websites. As a Mass Communication graduate with experience in
          advertising and public relations, I create websites and content that
          appeal to, attract, and persuade users. Quality User experience is my
          priority, and I deliver it to their satisfaction.
        </p>
      </div>

      <div className="tech">
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

      <div className="experience">
        <h5>Experience</h5>

        <div className="realExperience">
          <p></p>
        </div>
      </div>
    </div>
  );
}
