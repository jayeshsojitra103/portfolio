import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    Icon: <FaGithub />,
    path: "https://github.com/jayeshsojitra103",
  },
  {
    Icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/jayesh-sojitra-3031ba54/",
  }
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
