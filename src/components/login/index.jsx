import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("myToken");
    if (token !== undefined) {
      navigate("/");
    }
  }, []);

  const [allValues, setValues] = useState({  // logic likha hai  
    username: "",
    password: "",
    errorMsg: ""
  });
  

  const onSubmitUser = async (e) => { // Async banana hai need to remember 
    e.preventDefault();

    const api = "https://apis.ccbp.in/login";  // api fetch ki hai 
    const userDetails = { username: allValues.username, password: allValues.password };
    const options = { method: "POST", body: JSON.stringify(userDetails) };

    try {
      const response = await fetch(api, options);
      const data = await response.json();

      if (response.ok) {
        Cookies.set("myToken", data.jwt_token);
        setValues({ ...allValues, errorMsg: "" });
        navigate("/");
      } else {
        setValues({ ...allValues, errorMsg: data.error_msg || "Login failed" });
      }
    } catch (error) {
      console.error("Error:", error);
      setValues({ ...allValues, errorMsg: "Something went wrong" });
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={onSubmitUser}>
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in to your HireHub account</p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={allValues.username}
            onChange={(e) => setValues({ ...allValues, username: e.target.value })}  // event lagaya hai yaha pe remember 
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={allValues.password}
            onChange={(e) => setValues({ ...allValues, password: e.target.value })} // event need to remember 
            required  
          />
        </div>

        <button type="submit" className="login-btn">Login</button>

        {allValues.errorMsg && <p className="error-msg">{allValues.errorMsg}</p>}

        <p className="login-footer">
          Don't have an account? <span className="signup-link">Sign Up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
