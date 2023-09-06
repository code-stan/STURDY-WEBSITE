import ReactDom from 'react-dom/client';
import App from './Components/App';
import "./Styles/style.scss"

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App/>)
