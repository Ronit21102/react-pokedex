import React from "react";
import Wrapper from "../sections/Wrapper";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src="https://media.licdn.com/dms/image/D5603AQEKtub1jRPmVA/profile-displayphoto-shrink_800_800/0/1706811399506?e=1721260800&v=beta&t=O5fTWCLBHu3SOyuvRPU8i6wb1ehLxTtWqaqJt2UdNvE" alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Ronit Roushan</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      
      <div className="profile-links">
        <a href="https://github.com/Ronit21102">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ronit-roushan-460a9b194/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
