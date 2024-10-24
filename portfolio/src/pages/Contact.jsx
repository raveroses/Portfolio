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
        }
      );

    // Optionally clear the form
    setInput({ name: "", email: "", message: "" });
  };
  return (
    <>
      <div className="connect">
        <div className="firstbox">
          <h5> Connect with me</h5>
          <a href="mailto:odekunlewaris@gmail.com">
            <SiGmail /> odekunlewaris01@gmail.com
          </a>

          <a href="tel:+2349024986450">
            <FaPhoneAlt />
            +2349024986450
          </a>

          <a
            href="https://github.com/raveroses"
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
          <form onSubmit={handlePrevent}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleOnchange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleOnchange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={input.message}
              onChange={handleOnchange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
