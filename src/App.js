import './App.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainRouters from './route'

const App = () => {
  return (
    createRoot(document.getElementById("root")).render(
      <BrowserRouter>
        <MainRouters />
      </BrowserRouter>
    )
  );
}

export default App;
