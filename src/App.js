import "./assets/css/theme.css";
import "./assets/css/main.css";
import "./assets/css/style.css";
import "./assets/css/frontend.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

import Router from "./router/Routes";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}
