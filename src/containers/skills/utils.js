import { FaHtml5, FaCss3, FaJs, FaJava, FaPython, FaPhp, } from 'react-icons/fa';
import { SiKalilinux } from "react-icons/si";
import { SiCisco } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";


export const skillsData = [
    {
      label: "FRONT END",
      data: [
        {
          skillName: "HTML",
          percentage: "90",
          icon: <FaHtml5 />
        },
        {
          skillName: "CSS",
          percentage: "70",
          icon: <FaCss3 />
        },
        {
          skillName: "JAVASCRIPT",
          percentage: "60",
          icon: <FaJs />
        },
      ],
    },
    {
      label: "BACK END",
      data: [
        {
          skillName: "JAVA",
          percentage: "70",
          icon: <FaJava />
        },
        {
          skillName: "PYTHON",
          percentage: "65",
          icon: <FaPython />
        },
        {
          skillName: "PHP",
          percentage: "35",
          icon: <FaPhp />
        },
      ],
    },
    {
      label: "Infrastructure",
      data: [
        {
          skillName: "FIGMA",
          percentage: "70",
          icon: <IoLogoFigma />
        },
        {
          skillName: "CISCO",
          percentage: "85",
          icon: <SiCisco />
        },
        {
          skillName: "KALI LX",
          percentage: "40",
          icon: <SiKalilinux/>
        },
      ],
    },
];
