"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";

const DownloadCV = () => {
  const handleDownloadClick = () => {
    window.open("/assets/resume/jayesh_sojitra_react_js.pdf", "_blank");
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownloadClick}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadCV;
