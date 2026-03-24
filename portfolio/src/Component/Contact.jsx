import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "emailjs-com";
export default function Contact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setInput((values) => ({ ...values, [name]: value }));
    console.log(e.target.value);
  };

  const handlePrevent = (e) => {
    e.preventDefault();

    emailjs
      .send("service_aedvl54", "template_5yfqu38", input, "OQLSnmkohBV2wVepn")
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        },
      );

    // Optionally clear the form
    setInput({ name: "", email: "", message: "" });
  };
  return (
    <>
      <div className="flex items-start justify-center mt-25 flex-col gap-5 max-md:flex-col max-md:ml-7.5 max-md:mr-7.5">
        <div className="shadow-[1px_1px_1px_1px_lightgray] p-10 w-75 rounded-lg max-md:w-[90%] max-md:text-center max-md:m-auto max-md:max-w-full max-md:mb-5">
          <h5 className="text-gray-100 text-2xl font-semibold pb-4">
            {" "}
            Connect with me
          </h5>
          <a
            href="mailto:odekunlewaris@gmail.com"
            className="block text-[15px] no-underline font-medium text-gray-100 pb-8"
          >
            <SiGmail /> odekunlewaris01@gmail.com
          </a>

          <a
            href="tel:+2349024986450"
            className="block text-[15px] no-underline font-medium text-gray-100 pb-8"
          >
            <FaPhoneAlt />
            +2349024986450
          </a>

          <a
            href="https://github.com/raveroses"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[15px] no-underline font-medium text-gray-100 pb-8"
          >
            <FaGithub />
            @raveandroses
          </a>

          <a
            href="https://twitter.com/TitilopeNode"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[15px] no-underline font-medium text-gray-100 pb-8"
          >
            <FaXTwitter /> @TitilopeNode
          </a>

          <a
            href="https://wa.me/2348163700384?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[15px] no-underline font-medium text-gray-100 pb-8"
          >
            <FaWhatsapp /> Let's Chat
          </a>
        </div>
        <div className="flex justify-start w-[90%] max-w-full m-auto max-md:flex-col">
          <form
            onSubmit={handlePrevent}
            className="flex flex-col justify-start items-start w-212.5 max-md:w-full p-8 shadow-[1px_1px_1px_1px_lightgray] rounded-lg gap-5 max-md:max-w-full"
          >
            <label
              htmlFor="name"
              className=" text-[18px] text-left mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleOnchange}
              className="w-full border border-gray-300 p-[13px_5px] bg-transparent  rounded-[5px] mb-5 text-[17px] focus:outline-none max-md:max-w-full"
              required
            />
            <label
              htmlFor="email"
              className=" text-[18px] text-left mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleOnchange}
              className="w-full border border-gray-300 p-[13px_5px] bg-transparent  rounded-[5px] mb-5 text-[17px] focus:outline-none max-md:max-w-full"
              required
            />
            <label
              htmlFor="message"
              className=" text-[18px] text-left mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              value={input.message}
              onChange={handleOnchange}
              className="border border-gray-300 p-[30px_5px] bg-transparent  rounded-[5px] mb-5 text-[17px] w-full resize-none focus:outline-none max-md:max-w-full"
              required
            ></textarea>
            <button
              type="submit"
              className="border-none bg-red-600  py-3 px-12.5 text-[14px] font-medium rounded ml-165 max-md:ml-2.5 max-md:p-[9px_40px]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
