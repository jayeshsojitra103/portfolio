import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";

const socials = [
  {
    Icon: <FaGithub />,
    path: "https://github.com/jayeshsojitra103",
  },
  {
    Icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/jayesh-sojitra-3031ba54/",
  },
  {
    Icon: <SiFiverr />,
    path: "https://www.fiverr.com/jayeshsojitra",
  },
  {
    Icon: <SiUpwork />,
    path: "https://www.upwork.com/freelancers/~018ed704edcaf0e007?mp_source=share",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.Icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
