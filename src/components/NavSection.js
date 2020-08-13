import React from "react";
import history from '../history.js';

const NavSection = (props) => {
    const theme = props.theme;
    return (
        <div className={"nav-section " + theme}>
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