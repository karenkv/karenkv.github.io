import React, {useState} from "react";
import Header from "./Header";
import ContactBar from "./ContactBar";
import ThemeToggle from "./ThemeToggle";
import NavSection from "./NavSection";

const Home = () => {
    const [theme, setTheme] = useState("Light");

    const handleThemeChange = () => {
        theme === "Light" ? setTheme("Dark") : setTheme("Light");
    }

    return (
        <div className={"App " + theme}>
            <ThemeToggle theme={theme} action={handleThemeChange}/>
            <Header/>
            <ContactBar theme={theme}/>
            <NavSection/>
        </div>
    );
}

export default Home;