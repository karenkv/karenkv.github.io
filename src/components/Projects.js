import React, {useState} from "react";
import ThemeToggle from "./ThemeToggle";

const Projects = () => {
    const [theme, setTheme] = useState("Light");

    const handleThemeChange = () => {
        theme === "Light" ? setTheme("Dark") : setTheme("Light");
    }

    return (
        <div className={"App " + theme}>
            <ThemeToggle theme={theme} action={handleThemeChange}/>
            <div>Projects Placeholder</div>
        </div>
    )
}

export default Projects;