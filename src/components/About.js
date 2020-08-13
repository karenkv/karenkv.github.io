import React, {useState} from "react";
import ThemeToggle from "./ThemeToggle";

const About = () => {
    const [theme, setTheme] = useState("Light");

    const handleThemeChange = () => {
        theme === "Light" ? setTheme("Dark") : setTheme("Light");
    }

    return (
        <div className={"App " + theme}>
            <ThemeToggle theme={theme} action={handleThemeChange}/>
            <div>About Placeholder</div>
        </div>
    )
}

export default About;