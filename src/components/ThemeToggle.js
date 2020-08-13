import React from "react";

const ThemeToggle = (props) => {
    const theme = props.theme;
    const handleThemeChange = props.action;

    return (
        <div className="theme-changer">
            <input type="checkbox" id="theme" onClick={handleThemeChange}/>
            <label htmlFor="theme"><p className={"label" + theme}>{theme}</p></label>
        </div>
    )
}

export default ThemeToggle;