import {
  FaDollarSign,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaUserAstronaut,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-full z-50 bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-evenly flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Socials</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/nithin142/">
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaInstagram />
              <a href="https://www.instagram.com/_nithin142">
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaTwitter />
              <a href="https://twitter.com/_nithin142">
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaDollarSign />
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaUserAstronaut />
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaEnvelope />
              <a href="mailto:nithin.sagar.359@gmail.com">
                <span className="text-[15px] ml-[6px]">
                  nithin.sagar.359@gmail.com
                </span>
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; {currentYear}. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
