import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function FirstSection() {
  const buttons = [
    {
      title: "View my work",
      href: "#",
    },
    {
      title: "View my resume",
      href: "#",
    },
  ];
  return (
    <>
      <div className="flex flex-col  justify-center md:justify-start gap-5 md:w-[70%] w-full">
        <div className="md:pr-0 pr-8 flex flex-col gap-5">
          <h1 className="md:font-extrabold text-4xl font-bold ">
            Hello👋, I'm Odekunle Waris.
          </h1>
          <h2 className="md:font-extrabold font-bold text-4xl">
            Frontend Developer
          </h2>
        </div>
        <p className="md:text-xl text-md">
          Front-end developer specializing in React, Next.js, and Vue.js ;
          building responsive, user-friendly web experiences with clean,
          efficient code.
        </p>
      </div>
      <div className="buttonparent flex gap-5 my-5 justify-start">
        {buttons.map((button, index) => {
          return (
            <a href={button.href} target="_blank" rel="noreferrer" key={index}>
              <motion.button
                className="text-foreground border border-foreground text-md  md:font-bold font-semibold md:px-3 p-2 py-2 rounded cursor-pointer"
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
                {button.title}
              </motion.button>
            </a>
          );
        })}
      </div>

      <div className="icons flex gap-5 justify-start ">
        <a href="https://github.com/raveroses" target="_blank">
          <FaGithub className="text-2xl font-medium" />
        </a>
        <a href="linkedin.com/in/diamond-stack-62a0b62a7/" target="_blank">
          <FaLinkedin className="text-2xl font-medium" />
        </a>
        <a href="https://x.com/TitilopeNode" target="_blank">
          <FaXTwitter className="text-2xl font-medium" />
        </a>
      </div>
    </>
  );
}
