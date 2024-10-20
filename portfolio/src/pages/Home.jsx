import { FaGithub } from "react-icons/fa";
import { SiGitconnected } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import Detail from "../Component/Detail";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="home">
      <div className="flex">
        <div className="detail">
          <h5>Front-End Developer</h5>
          <h6>Results-Driven Front-End Developer </h6>
          <p>
            A front-end developer that's so passionate in building a functional
            website. A Masscommunication graduate who is well experienced in
            advert and public Relation. I can also make a website and its
            content appeal, attract and persuade user. User Experience is what
            matters, I deliver it to their satisfaction
          </p>
        </div>
        <div className="images">
          <img src="/images/waris.JPG" alt="author" />
        </div>
      </div>
      <div className="project-flex" data-aos="zoom-in">
        {Detail?.map((item, index) => {
          return (
            <div className="content" key={index}>
              <div className="project-image">
                <img src={item.image} alt="get-image" />
              </div>
              <div className="written">
                <h5>{item.title}</h5>
                <p>{item.content}</p>
                <h6>{item.language}</h6>
                <div className="code">
                  <div className="live">
                    <a href="">
                      <SiGitconnected />
                      Live preview
                    </a>
                  </div>
                  <div className="view">
                    <a href="">
                      {" "}
                      <FaGithub /> View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
    </div>
  );
}
