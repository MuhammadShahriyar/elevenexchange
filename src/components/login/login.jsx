import React from 'react';
import { Link } from 'react-router-dom';
import logo from "/src/assets/header/logo.png";
import './login.css';
import btnicon from "/src/assets/icons8-enter-26.png";

const Login = () => {
  return (
    <>
      <div className='fullmainlogin'>
        <div className='main-login'>
          <div className="login-container">
            <img src={logo} alt="Logo" />
            <div className="login-box">
              <h2>Login <span className="login-icon">🔐</span></h2>
              <form>
                <div className="input-group">
                  <input type="text" placeholder="Username" required />
                  <span className="input-icon">👤</span>
                </div>
                <div className="input-group">
                  <input type="password" placeholder="Password" required />
                  <span className="input-icon">🔑</span>
                </div>
                
                <button type="submit" className="login-button">
                  Login
                  <img src={btnicon} alt="Enter Icon" className="btn-icon" />
                </button>
                <Link to="/home">
                <button type="button" className="demo-button">
                  Login with demo ID
                  <img src={btnicon} alt="Enter Icon" className="btn-icon" />
                </button></Link>
              </form>
              <p className="recaptcha-text">
                This site is protected by reCAPTCHA and the Google
                <a href="#">Privacy Policy</a> and
                <a href="#">Terms of Service</a> apply.
              </p>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-content">
            <div className='footer-content-p'>
              <p>Terms and Conditions</p>
              <p>Responsible Gaming</p>
            </div>
            <h3>24X7 Support</h3>
            <div class="social-icons-box"></div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Login;
