import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RoutingPaths from "../utility/RoutingPaths";
import {nanoid} from "nanoid";

export default function Login() {
  const navigate = useNavigate();

  const [logId, setLogId] = useState("");
  const [password, setPassword] = useState("");

  function loginHandler(e) {
    e.preventDefault();

    if (logId === "admin" && password === "abc@123") {
      navigate(RoutingPaths.DASHBOARD);
      toast.success("You are logged in");
      sessionStorage.setItem("token",nanoid());
    }
    else{
     toast.error("Please enter correct credentials!!");
    }
  }
  
  return (
    <>
      <section className="login-section sectionX">
        <div className="login-field">
          <h1>Log in!!</h1>
          <p>Please log in with your credentials</p>
          <p>
            <i>User Name : admin, Password : abc@123</i>
          </p>
          <form onSubmit={(event) => loginHandler(event)}>
            <div className="login-crad">
              <label>Username : </label>
              <input
                type="text"
                placeholder="Enter Your Username"
                required
                value={logId}
                onChange={(event) => setLogId(event.target.value)}
              />
            </div>
            <div className="login-crad">
              <label>Password : </label>
              <input type="password" placeholder="Enter Your Password" required 
              value={password}
              onChange={(event)=>setPassword(event.target.value)}    
              />
            </div>
            <div className="login-button">
              <button className="buttonX" type="submit">
                Log In
              </button>
              <button className="buttonX white" type="reset">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
