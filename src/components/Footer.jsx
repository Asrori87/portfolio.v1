import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full flex justify-end fixed bottom-0 left-0 py-4 px-8">
      <a target="_blank" href="https://github.com/Asrori87">
        <FaGithub size={30} />
      </a>
    </footer>
  );
};

export default Footer;
