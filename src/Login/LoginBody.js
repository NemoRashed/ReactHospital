import React from "react";

function LoginBody() {
  var rootProp = document.documentElement.style;
  var mode = true;

  function changeMode() {
    if (mode) {
      darkMode();
    } else {
      lightMode();
    }
    mode = !mode;
  }

  function lightMode() {
    rootProp.setProperty("--background1", "rgba(230, 230, 230)");
    rootProp.setProperty("--shadow1", "rgba(119, 119, 119, 0.5)");
    rootProp.setProperty("--shadow2", "rgba(255, 255, 255, 0.85)");
    rootProp.setProperty("--labelColor", "black");
  }

  function darkMode() {
    rootProp.setProperty("--background1", "rgb(9 25 33)");
    rootProp.setProperty("--shadow1", "rgb(0 0 0 / 45%)");
    rootProp.setProperty("--shadow2", "rgb(255 255 255 / 12%)");
    rootProp.setProperty("--labelColor", "rgb(255 255 255 / 59%)");
  }

  return (
    <div>
      {
        <div className="containerr">
          <center>
            <b className="title label">Login</b>
          </center>
          <form action="#" id="login-form">
            <div className="user-details">
              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  name="username"
                  id="username"
                  placeholder="UserName"
                  autocomplete="off"
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  className="input-field"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autocomplete="off"
                />
              </div>
              <div className="input-box">
                <input
                  type="checkbox"
                  checked
                  name="rememberMe"
                  id="rememberMe"
                />
                <b className="label">Remember Me</b>
              </div>

              <div className="button">
                <input type="button" value="Login" />
              </div>
            </div>
            <div className="footerr">
              <center>
                <span>
                  <b className="label">OR</b>
                </span>
              </center>
              <div className="social-media-icons">
                <i className="fa fa-google-plus"></i>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-pinterest"></i>
              </div>
              <center>
                <b className="label">
                  Forgot Password ?
                  <span id="toggle" onclick="changeMode();">
                    Dark Mode
                  </span>
                </b>
                <a href="/Register">
                  <button className="register">Register</button>
                </a>
              </center>
            </div>
          </form>
        </div>
      }
    </div>
  );
}

export default LoginBody;
