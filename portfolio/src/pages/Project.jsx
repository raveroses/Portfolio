import { SiGitconnected } from "react-icons/si";

import Detail from "../Component/Detail";
import { FaGithub } from "react-icons/fa";

export default function Project() {
  return (
    <>
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
    </>
  );
}
