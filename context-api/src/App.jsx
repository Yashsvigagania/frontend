import { useContext } from 'react';   
import { ThemeContext, UserContext, LangContext } from './context';
import './App.css';

const App = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, setUser } = useContext(UserContext);
    const { lang, setLang } = useContext(LangContext);

    return (
        <div
          style={{
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            height: "100vh",
            padding: "20px"
          }}
        >
          <p>Theme: {theme}</p>
          <p>User: {user.name}</p>
          <p>Language: {lang}</p>

          <button onClick={toggleTheme}>Toggle Theme</button>
          <button onClick={() => setUser({ name: "John" })}>
            Set User
          </button>
          <button onClick={() => setLang(lang === "en" ? "es" : "en")}>
            Toggle Language
          </button>
        </div>
    );
};

export default App;