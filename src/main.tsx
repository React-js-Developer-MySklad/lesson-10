import {createRoot} from "react-dom/client";
import Button from "./components/button/button";
import './styles.css'
import logo from './assets/react.svg';

const root = createRoot(document.getElementById('root'))
//const i = 1;
//i = ''
root.render(
    <div>
        <Button/>
        <div><img className='logo' src={logo} alt='Logo'/></div>
        <div className='inline-log'></div>
    </div>
)