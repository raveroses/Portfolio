import { motion } from "motion/react";
import { SiGitconnected } from "react-icons/si";
import { Detail } from "./Detail";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Project() {
  return (
    <div className="my-20" id="project">
      <h5 className="text-4xl font-bold mb-20">Projects</h5>
      <div className="grid grid-cols-2 gap-14.25  justify-center max-md:grid-cols-1 ">
        {Detail?.map((project, index) => {
          return (
            <div
              className="border-none bg-transparent shadow-[1px_1px_1px_grey] rounded-[10px] "
              key={index}
            >
              <div className="w-full">
                <img src={project.image} alt="get-image" className="w-full" />
              </div>
              <div className=" py-5 px-2 flex flex-col gap-5">
                <h5 className="text-xl font-semibold">{project.title}</h5>
                <p className="text-md leading-6.25">{project.shortDetail}</p>
                <div className="flex gap-3 items-center">
                  {project.techStack.map((stack, ind) => {
                    return (
                      <h6
                        key={ind}
                        className="text-md bg-neutral-300 px-2 rounded-xl"
                      >
                        {stack}
                      </h6>
                    );
                  })}
                </div>
                <div className="flex justify-start items-center gap-5 mt-4">
                  <div className="live">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      <motion.button
                        className="text-foreground border border-foreground text-md  md:font-bold font-semibold md:px-3 p-2 py-2 rounded cursor-pointer flex gap-3 items-center"
                        initial={{
                          scale: 1,
                          opacity: 1,

                          backgroundColor: "transparent",
                          color: "var(--foreground)",
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "var(--foreground)",
                          color: "var(--neutral-100)",

                          transition: { duration: 0.2 },
                        }}
                      >
                        <SiGitconnected />
                        <span>Live preview</span>
                      </motion.button>
                    </a>
                  </div>
                  <div className="view">
                    <Link
                      to={`project/${project.id}`}
                      key={index}
                    >
                      <motion.button
                        className="text-foreground border border-foreground text-md  md:font-bold font-semibold md:px-3 p-2 py-2 rounded cursor-pointer flex gap-3 items-center"
                        initial={{
                          scale: 1,
                          opacity: 1,
                          backgroundColor: "var(--foreground)",
                          color: "var(--neutral-100)",
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "transparent",
                          color: "var(--foreground)",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <FaEye />
                        <span>View Detail</span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
