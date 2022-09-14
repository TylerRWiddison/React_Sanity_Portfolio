import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div
        aria-label="linkedin.com/in/tyler-widdison"
        onClick={() =>
          window.open("https://www.linkedin.com/in/tyler-widdison")
        }
      >
        <BsLinkedin />
      </div>
      <div
        aria-label="https://github.com/TylerRWiddison"
        onClick={() => window.open("https://github.com/TylerRWiddison")}
      >
        <BsGithub />
      </div>
    </div>
  );
};

export default SocialMedia;
