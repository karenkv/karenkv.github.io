import React from "react";
import headshot from "../assets/karen-vu-headshot.JPG";

function Header() {
    return (
        <div className="header">
            <div className="headshot">
                <img alt="Karen Vu's headshot" src={headshot}/>
            </div>
            <h1>Hello World! My name is Karen Vu</h1>
        </div>
    );
}

export default Header;