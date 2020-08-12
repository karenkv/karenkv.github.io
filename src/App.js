import React from 'react';
import headshot from './assets/karen-vu-headshot.JPG';
import github from './assets/github.png';
import devpost from './assets/devpost.png';
import linkedin from './assets/linkedin.png';
import resume from './assets/resume.png';
import pdf from './assets/resume.pdf';
import './App.css';

function App() {
    return (
        <div className={"App "}>
            <div className="header">
                <div className="headshot">
                    <img alt="Karen Vu's headshot" src={headshot}/>
                </div>
                <h1>Hello, World! My name is Karen Vu</h1>
            </div>
            <div className="links">
                <a href="https://github.com/karenkv" target="_blank" rel="noopener noreferrer">
                    <img alt="Github Icon" src={github}/>
                </a>
                <a href="https://devpost.com/karenkv" target="_blank" rel="noopener noreferrer">
                    <img alt="Devpost Icon" src={devpost}/>
                </a>
                <a href="https://www.linkedin.com/in/karen-vu/" target="_blank" rel="noopener noreferrer">
                    <img alt="Linkedin Icon" src={linkedin}/>
                </a>
                <a href={pdf} target="_blank" rel="noopener noreferrer">
                    <img alt="Resume Icon" src={resume}/>
                </a>
            </div>
        </div>
    );
}

export default App;
