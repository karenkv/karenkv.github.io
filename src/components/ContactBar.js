import React from "react";
import github from "../assets/github.png";
import devpost from "../assets/devpost.png";
import linkedin from "../assets/linkedin.png";
import pdf from "../assets/resume.pdf";
import resume from "../assets/resume.png";

const ContactBar = () => {
    return (
        <div className={"links"}>
            <a href="https://github.com/karenkv" target="_blank" rel="noopener noreferrer">
                <img alt="Github Icon" src={github} width="32px" height="32px"/>
            </a>
            <a href="https://devpost.com/karenkv" target="_blank" rel="noopener noreferrer">
                <img alt="Devpost Icon" src={devpost} width="38px" height="32px"/>
            </a>
            <a href="https://www.linkedin.com/in/karen-vu/" target="_blank" rel="noopener noreferrer">
                <img alt="Linkedin Icon" src={linkedin} width="32px" height="32px"/>
            </a>
            <a href={pdf} target="_blank" rel="noopener noreferrer">
                <img alt="Resume Icon" src={resume} width="32px" height="32px"/>
            </a>
        </div>
    );
}

export default ContactBar;