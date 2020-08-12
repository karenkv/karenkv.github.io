import React, {useState} from 'react';
import headshot from './assets/karen-vu-headshot.jpeg';
import github from './assets/github.png';
import devpost from './assets/devpost.png';
import linkedin from './assets/linkedin.png';
import resume from './assets/resume.png';
import pdf from './assets/resume.pdf';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState("light");

    const handleThemeChange = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return (
        <div className={"App " + theme}>
            <div className="theme">
                <label className="switch">
                    <input type="checkbox" onChange={handleThemeChange}
                           checked={theme === "dark"}/>
                    <span className={"slider " + {theme}}/>
                </label>
            </div>
            <div className="header">
                <div className="headshot">
                    <img alt="Karen Vu's headshot" src={headshot}/>
                </div>
                <h1>Hello, World! My name is Karen Vu</h1>
            </div>
            <div className={"links " + theme}>
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
        </div>
    );
}

export default App;
