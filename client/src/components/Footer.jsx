import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { footerLinks } from "../utils/data";
import { Linkedin } from "../assets";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
const Footer = () => {
  return (
    <footer className="text=white mp-20">
      <div className="bg-black">
        <div className="container px-5 py-20 mx-auto">
          <div className="w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4">
            {footerLinks.map(({ id, title, links }) => (
              <div className="w-auto px-4" key={id}>
                <h2 className="font-medium text-white tracking-widest text-sm mb-3">
                  {title}
                </h2>

                <div className="mb-10 flex flex-col gap-3">
                  {links.map((link, indexedDB) => (
                    <Link
                      key={link}
                      to="/"
                      className="text-gray-300 text-sm hover:text-white"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xl text-white flex justify-center">Follow us on</p>
        <hr className="w-60 h-1 mx-auto my-4 bg-gray-100   "></hr>

        <div className="">
          <div className="container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-center">
            <a className="text-white text-xl  hover:scale-150 ease-in-out duration-300">
              <FaFacebookF />
            </a>
            <a className="ml-10 text-white text-xl hover:scale-150 ease-in-out duration-300">
              <FaTwitter />
            </a>
            <a className="ml-10 text-white text-xl  hover:scale-150 ease-in-out duration-300">
              <FiInstagram />
            </a>

            <a className="ml-10 text-white text-xl  hover:scale-150 ease-in-out duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
