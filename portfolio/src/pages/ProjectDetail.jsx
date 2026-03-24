// import { useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoCodeSharp, IoFlash } from "react-icons/io5";
import { SiRemovedotbg } from "react-icons/si";
import { TbPointFilled } from "react-icons/tb";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import { Detail } from "../Component/Detail";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
export default function ProjectDetail() {
  const { id } = useParams();
  const project = Detail.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-5 lg:px-120 md:px-20 my-20 pb-20">
      <section className="flex flex-col gap-5">
        <Link to="/">
          <motion.button
            initial={{ opacity: 0, border: "2px dotted var(--foreground)" }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              backgroundColor: "var(--foreground)",
              color: "var(--neutral-100)",
            }}
            whileTap={{
              backgroundColor: "#800080",
            }}
            whileInView={{ opacity: 1 }}
            className="backIcon flex gap-2 items-center md:p-2 p-1 rounded font-semibold cursor-pointer md:w-45 w-35 text-center"
          >
            <span>
              <IoMdArrowRoundBack />
            </span>
            <span>Back to projects</span>
          </motion.button>
        </Link>

        <div className="projectName flex flex-col gap-5 text-wrap">
          <h1 className="md:text-5xl text-4xl font-bold">{project.title}</h1>
          <p className="md:text-xl text-md font-semibold text-primary-200 ">
            {project.shortDetail}
          </p>

          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <motion.button
              className=" text-foreground border border-foreground text-md  md:font-bold font-semibold py-2 rounded cursor-pointer flex md:gap-3 gap-2 justify-center items-center md:w-45 w-35 "
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
              <span> Visit live project</span>
              <span>
                <FiArrowUpRight />
              </span>
            </motion.button>
          </a>
        </div>
      </section>

      <section className="projectImage my-10 ">
        <motion.img
          src={project.image}
          alt="project-image"
          className="w-full rounded cursor-pointer"
          whileHover={{
            scale: 1.05,
          }}
          transition={{ duration: 0.2 }}
        />
        <div className="my-5 md:flex grid grid-cols-4 items-center gap-3">
          <img src="/images/movie.jpg" alt="" className="w-40" />
          <img src="/images/movie.jpg" alt="" className="w-40" />
          <img src="/images/movie.jpg" alt="" className="w-40" />
          <img src="/images/movie.jpg" alt="" className="w-40" />
        </div>
        <div className="flex flex-col gap-10 my-20">
          <div className="flex flex-col gap-5">
            <h1 className="flex items-center gap-3">
              <span className="text-2xl">
                <SiRemovedotbg />
              </span>
              <span className="text-3xl font-bold">Overview</span>
            </h1>
            <p className="md:text-xl text-md md:font-medium font-semibold">
              {project.overview}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="flex items-center gap-3">
              <span className="text-2xl">
                <IoFlash />
              </span>
              <span className="text-3xl font-bold">Challenges</span>
            </h1>
            <p className="md:text-xl text-md md:font-medium font-semibold">
              {project.challenges}
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="flex items-center gap-3">
              <span className="text-2xl">
                <IoFlash />
              </span>
              <span className="text-3xl font-bold">Solutions</span>
            </h1>
            <p className="md:text-xl text-md md:font-medium font-semibold">
              {project.solution}
            </p>
          </div>
        </div>
        <div className="techstack my-10">
          <h1 className="flex items-center gap-3">
            <span className="text-2xl">
              <HiSquare3Stack3D />
            </span>
            <span className="text-3xl font-bold">Tech Stack</span>
          </h1>

          <ul className="list flex items-center gap-5 list-none my-5 ">
            {project.techStack.map((stack, ind) => {
              return (
                <li
                  className="bg-neutral-300 rounded-2xl w-30 text-center py-1 text-md font-semibold"
                  key={ind}
                >
                  {stack}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="flex items-center gap-3">
            <span className="text-2xl">
              <IoCodeSharp />
            </span>
            <span className="text-3xl font-bold">Key Features</span>
          </h1>

          <div className="cards grid md:grid-cols-2 grid-cols-1 gap-5">
            {project.features.map((feature, i) => {
              return (
                <div
                  className="eachCard flex gap-3 items-center bg-neutral-400 shadow p-3 rounded-xl"
                  key={i}
                >
                  <span className="textxl">
                    <TbPointFilled />
                  </span>
                  <span className="text-xl">{feature}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-foreground w-full text-white text-center md:flex hidden flex-col justify-center py-10 ">
        <h3 className="text-md font-semibold">Want to see more?</h3>
        <HashLink smooth to="/#project">
          <h1 className="text-4xl font-bold underline">View All Projects</h1>
        </HashLink>
      </section>

      <section className="md:hidden block">
        <HashLink smooth to="/#project">
          <motion.button
            className=" text-foreground border border-foreground text-md  md:font-bold font-semibold py-2 rounded cursor-pointer flex md:gap-3 gap-2 justify-center items-center w-full "
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
            <span> Explore more live projects</span>
            <span>
              <FiArrowUpRight />
            </span>
          </motion.button>
        </HashLink>
      </section>
    </div>
  );
}
