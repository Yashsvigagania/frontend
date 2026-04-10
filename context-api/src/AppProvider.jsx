import {usestate} from 'react';
import {ThemeContext, UserContext, LangContext} from './context';

const AppProvider = ({children}) => {
    const [theme, setTheme] = usestate("light");
    const [user, setUser] = usestate({name: "guest"});
    const [lang, setLang] = usestate("en");     

    const toggleTheme = () => {
        setTheme((prev)=>(prev===" light" ? "dark" : "light"));
    }
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        <UserContext.Provider value={{user, setUser}}>
            <LangContext.Provider value={{lang, setLang}}>
                {children}
            </LangContext.Provider>
        </UserContext.Provider>
    </ThemeContext.Provider>
}
export default AppProvider;