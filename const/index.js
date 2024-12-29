import {
  FaCss3,
  FaEnvelope,
  FaHtml5,
  FaJs,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const links = [
  { path: "/", label: "Home" },
  // { path: "/services", label: "Services" },
  { path: "/resume", label: "resume" },
  // { path: "/work", label: "Work" },
  { path: "/contact", label: "Contact" },
];

export const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 97237 14743",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "jayesh.sojitra103@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "Ahmadabad, India",
  },
];

export const experience = {
  icon: "assets/resume/badge.svg",
  title: "My Experience",
  description:
    "",
  items: [
    {
      company: "SIMFORM SOLUTIONS LLP",
      position: "Sr. Software Engineer",
      duration: "2021 - Present",
    },
    {
      company: " CODAL SYSTEMS PVT LTD",
      position: "Sr. Front-end Developer",
      duration: "2018 - 2021",
    },
    {
      company: "Global Garner Sales Services Limited",
      position: "Sr. Front-end Developer",
      duration: "2016 - 2018",
    },
    {
      company: "ALPHANSOTECH",
      position: "Web Designer",
      duration: "2015 - 2016",
    },
    {
      company: "VISION INFORMATICS",
      position: "Web Designer",
      duration: "2014 - 2015",
    },
    {
      company: "Global Garner Sales Services Limited",
      position: "Sr. Front-end Developer",
      duration: "2016 - 2018",
    },
    {
      company: "ALPHANSOTECH",
      position: "Web Designer",
      duration: "2015 - 2016",
    },
    {
      company: "VISION INFORMATICS",
      position: "Web Designer",
      duration: "2014 - 2015",
    },
  ],
};
export const about = {
  title: "About me",
  description: `I am  Highly skilled Front-end Developer with over 9 years of experience specializing in JavaScript, React.js,
 Next.js, and UI development. Proven expertise in building scalable, performant, and user-friendly web
 applications. Adept at leading cross-functional teams, mentoring junior developers, and driving projects
 from conception to successful delivery. Experienced in project planning, task delegation, and ensuring
 adherence to best practices and high coding standards. Proficient in JavaScript, Docker, and version
 control (Git), with strong communication and collaboration skills. Passionate about fostering a positive
 team environment and delivering innovative solutions that align with business goals`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jayesh Sojitra",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 97237 14743",
    },
    {
      fieldName: "Experience",
      fieldValue: "10 Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "jayeshs.iipl",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "jayesh.sojitra103@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },

    {
      fieldName: "Languages",
      fieldValue: "English, Hindi,",
    },
  ],
};

export const education = {
  title: "My Education",
  description: "Here's a brief overview of my educational background.",
  items: [
    {
      institution: "P.K.M COLLEGE OF TECH & B. ED JUNAGADH",
      degree: "MSC, IT",
      duration: "2012-2014",
    },
    {
      institution: "J.K.M. B.C.A. COLLEGE JUNAGADH",
      degree: "BCA",
      duration: "2009-2012",
    },
  ],
};

export const skills = {
  title: "My Skills",
  description: "Here are some of the technologies I've worked with.",
  skillList: [
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiNodedotjs />,
      name: "node.js",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
  ],
};

export const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  },
  {
    num: "03",
    title: "Mobile App Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  },
  {
    num: "04",
    title: "Data Science",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  },
  {
    num: "05",
    title: "Artificial Intelligence",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  },
];

export const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi ratione eligendi quidem debitis. Tempore ab dolore aspernatur molestias fugiat expedita aut, vero adipisci, odit tempora totam aperiam, iste reprehenderit.",
    stacks: [{ name: "HTML5" }, { name: "CSS" }],
    image:
      "https://images.pexels.com/photos/29809528/pexels-photo-29809528/free-photo-of-illuminated-hotel-facade-at-night-in-sakarya.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    live: "https://github.com/jayeshsojitra103",
  },
  {
    num: "02",
    category: "Frontend",
    title: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti animi ratione eligendi quidem debitis. Tempore ab dolore aspernatur molestias fugiat expedita aut, vero adipisci, odit tempora totam aperiam, iste reprehenderit.",
    stacks: [{ name: "HTML5" }, { name: "CSS" }],
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    live: "https://github.com/jayeshsojitra103",
  },
];

export const initialContactState = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};
