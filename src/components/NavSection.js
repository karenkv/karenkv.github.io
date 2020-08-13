import React from "react";
import history from '../history.js';

const NavSection = () => {
    return (
        <div className={"nav-section"}>
            <div>
                <button onClick={() => history.push("/about")}>About Me</button>
                <button onClick={() => history.push("/experience")}>Experience</button>
            </div>
            <div>
                <button onClick={() => history.push("/projects")}>Projects</button>
                <button onClick={() => history.push("/awards")}>Awards</button>
            </div>
        </div>
    )
}

export default NavSection;