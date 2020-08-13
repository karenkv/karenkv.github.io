import React, {useState} from 'react';
import ContactBar from "./components/ContactBar";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import './App.css';

const App = () => {
    const [theme, setTheme] = useState("Light");

    const handleThemeChange = () => {
        theme === "Light" ? setTheme("Dark") : setTheme("Light");
    }

    return (
        <div className={"App " + theme}>
            <ThemeToggle theme={theme} action={handleThemeChange}/>
            <Header/>
            <ContactBar theme={theme}/>
        </div>
    );
}

export default App;
