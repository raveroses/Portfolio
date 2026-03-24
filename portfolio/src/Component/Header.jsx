import { useState, useEffect } from "react";
import { motion } from "motion/react";
export default function Header() {
  const [check, setChecker] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    console.log("Current scroll position:", scrollPosition);
    if (scrollPosition > 39) {
      setChecker(true);
    } else {
      setChecker(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        check ? "fixed top-0  z-50" : "static"
      } shadow-md bg-background py-5 flex justify-between items-center w-full px-5 lg:px-100 md:px-20`}
    >
      <h5 className="text-xl font-bold"> Diamond</h5>

      <a
        href="https://wa.me/2348163700384?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
        target="_blank"
        rel="noreferrer"
      >
        <motion.button
          className="text-foreground border border-foreground text-sm  md:font-bold font-semibold md:px-3 p-2 py-2 rounded cursor-pointer"
          initial={{
            scale: 1,
            opacity: 1,
            backgroundColor: "transparent",
            color: "var(--foreground)",
            
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "var(--foreground)",
            color: "var(--background)",
            transition: { duration: 0.2 },
          }}
        >
          Contact Me
        </motion.button>
      </a>
    </div>
  );
}
