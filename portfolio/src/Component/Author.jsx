import { FaGithub, FaJsSquare, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiSupabaseFill, RiVuejsFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Author() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const stacksIcon = [
    FaGithub,
    FaJsSquare,
    FaReact,
    RiNextjsFill,
    RiSupabaseFill,
    RiVuejsFill,
  ];

  const experiences = [
    {
      organisation: "Web3bridge community",
      image: "/images/web3bridge.jpg",
      role: "Frontend developer",
    },
    {
      organisation: "Dawn Ai ",
      image: "/images/dawnAi.png",
      role: "Frontend developer",
    },
    {
      organisation: "Orglobal Network",
      image: "/images/orglobal.jpg",
      role: "Frontend developer",
    },
  ];
  return (
    <div className="flex flex-col md:justify-start justify-center mt-50 ">
      <div className=" " data-aos="fade-right">
        <h5 className="text-4xl font-bold mb-5">About Me</h5>

        <p className="leading-8.75 md:text-xl text-md">
          I love building clean, scalable, and user-focused digital products
          that solve real problems. My work blends creativity, functionality,
          and innovation to deliver meaningful experiences. I’m Odekunle Waris,
          a Nigerian frontend developer passionate about crafting seamless user
          experiences using modern web technologies like React, Next.js, and
          Vue.js. Over the years, I’ve built and contributed to a diverse range
          of projects. A self-driven developer, I’ve grown through consistent
          learning, real-world projects, and community-focused training such as
          Web3Bridge Cohort XI. With 15+ production-ready projects, I enjoy
          solving complex problems, understanding how things work, and bringing
          ideas to life through code.
        </p>
      </div>

      <div className="md:w-[75%] w-full my-50 max-md:w-full">
        <h5 className=" text-4xl font-bold mb-10">My Tech Stack</h5>
        <div className="flex justify-between items-center  ">
          {stacksIcon.map((Icon) => {
            return <Icon key={Icon} className="text-5xl" />;
          })}
        </div>
      </div>

      <div className="w-[75%] mt-22.5 pb-75 max-md:w-full ">
        <h5 className="text-4xl font-bold mb-10">Experience</h5>
        <div className=" flex flex-col gap-7">
          {experiences.map((experience) => {
            return (
              <div key={experience.organisation} className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="organistionImage">
                    <img
                      src={`${experience.image}`}
                      alt={`${experience.organisation}`}
                      className="w-12.5 h-12.5"
                    />
                  </div>
                  <h1 className="md:text-xl text-md font-bold"> {experience.organisation}</h1>
                </div>
                <div className="organisationName text-md md:font-semibold font-medium text-primary-200">{experience.role}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
