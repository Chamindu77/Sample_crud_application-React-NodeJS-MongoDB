import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCallbackResponse = useCallback((response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    localStorage.setItem('token', response.credential); // Store Google ID token in local storage
    navigateTo("/studentcrud");
  }, [navigateTo]);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "222867680260-pkfqnffv356qdusci4fpj0lpf5hls8l3.apps.googleusercontent.com",
      callback: handleCallbackResponse,
      ux_mode: "popup", // Use popup mode
      prompt: 'select_account' // Prompt the user to select an account
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large", type: "standard" } // Change the type to "standard" or "icon"
    );
  }, [handleCallbackResponse]);

  // const submitLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const data = { email, password };
  //     const response = await axios.post(`http://localhost:4000/api/u/login`, data);

  //     if (response.data.accessToken) {
  //       localStorage.setItem('token', response.data.accessToken); // Store token in local storage
  //       navigateTo("/studentcrud");
  //       window.alert("Login Successful!");
  //     } else {
  //       console.log('Login failed:', response.data.message);
  //       alert("Invalid Credentials!");
  //     }
  //   } catch (error) {
  //     console.log('Error:', error);
  //     alert("Invalid Credentials!");
  //   }
  // };

  const submitLogin = async (e) =>{
            
    try {
      e.preventDefault();
      const data = {
        email,
        password
      };
      const resp = await axios.post(`http://localhost:4000/api/u/login`, data, {withCredentials : true});
      console.log(resp);
      // save token in session storage
     sessionStorage.setItem("token", resp.data.token);
     if (resp.data.success === true) {
      navigateTo("/studentcrud");
        
      console.log(resp.data.token);
      window.alert("Login Successfull!");
     } 
     
     
     if(resp.status === 400 || resp.status === 401){
      alert("Invalid Crenditals!")
     }
    } catch (error) {
      console.log(error);
      alert("Invalid Credentials!")
    }
       
      
  }

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card border-success" style={{ width: '400px', height: '400px', borderWidth: '3px' }}>
              <div className="card-header text-center font-weight-bold h2">Log in</div>
              <div className="card-body d-flex flex-column justify-content-center">
                <form onSubmit={submitLogin} className="space-y-6" action="#" method="POST">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value) }}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100 mt-5">Log in</button>

                  <div className="d-flex justify-content-center mt-3">
                    <div id="signInDiv" className="d-flex justify-content-center"></div>
                  </div>

                  <div className="d-flex justify-content-center align-items-center mt-1">
                    <Link to="/Register" className="text-success">Don't have an account? Sign Up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
