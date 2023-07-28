import "./assets/css/theme.css";
import "./assets/css/main.css";
import "./assets/css/style.css";
import "./assets/css/frontend.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import Landing from "./pages/Landing";
import AddFoodItem from "./pages/AddFoodItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="App">
       <Landing/> 
      <AddFoodItem />
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
  );
}
