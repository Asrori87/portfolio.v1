import { FaArrowRightLong } from "react-icons/fa6";
import { skills } from "../constants";

const About = () => {
  return (
    <div id="about" className="min-h-screen py-32 px-20 flex space-x-8 ">
      <div className="mt-24 w-[500px] text-8xl text-gray-600 font-bold text-center">
        About
      </div>
      <div className="flex-1">
        <p className="text-gray-400 text-lg">
          "Hi, saya Nanami, seorang frontend developer yang berfokus pada
          menciptakan antarmuka pengguna yang bersih, responsif, dan mudah
          digunakan. Dengan keahlian utama di React, Tailwind CSS, dan
          JavaScript modern, saya bersemangat membangun pengalaman web yang
          intuitif dan menarik bagi pengguna."
        </p>
        <div className="flex gap-16 pt-20">
          <h2 className="uppercase font-bold text-gray-600 tracking-widest">
            Skills
          </h2>
          <div className="flex flex-1 justify-between">
            {skills.map((skill) => (
              <div key={skill.label}>
                <p className="uppercase text-gray-600 font-bold text-[15px]">
                  {skill.label}
                </p>
                {skill.items.map((item) => (
                  <p
                    key={item}
                    className="text-gray-600 text-[15px] font-light leading-6"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-4 px-4 py-2 rounded-sm text-sm font-semibold text-gray-100 bg-gray-500 mt-24"
        >
          Join Our Team <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
};

export default About;
