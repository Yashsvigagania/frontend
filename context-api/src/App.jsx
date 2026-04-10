import {use, UserContext} from 'react';
import { ThemeContext,UserContext,LangContext } from './context';
import { useContext } from 'react';
const App()=>{
  const [theme,toggleTheme]=useContext();
  const [user,setUser]=useContext();
  const [lang,setLang]=useContext();
  return(
    <div>
    <p>Theme:{theme}</p>
    <p>User:{user.name}</p>
    <p>Lang:{lang}</p>
    </div>
  )
}
export default App;