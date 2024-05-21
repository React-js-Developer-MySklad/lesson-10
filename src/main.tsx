import {createRoot} from "react-dom/client";
import Button from "./components/button/button";
import './styles.css'

const root = createRoot(document.getElementById('root'))
//const i = 1;
//i = ''
root.render(<Button/>)