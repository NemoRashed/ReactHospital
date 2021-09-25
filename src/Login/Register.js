import React from "react";

function Register() {
  return (
    <div>
      <div className="containerrr">
        <div className="tittlee">Registration</div>
        <form action="#" id="reg-from" name="reg-from">
          <div className="user-details">
            <div className="input-boxx">
              <input
                type="text"
                name="fullName"
                id="fullName"
                autocomplete="off"
                placeholder="example"
              />
              <label className="label" for="fullName">
                Full Name
              </label>
            </div>
            <div className="input-boxx">
              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                autocomplete="off"
                placeholder="example"
              />
              <label className="label" for="mobileNumber">
                Mobile Number
              </label>
            </div>
            <div className="input-boxx">
              <input
                type="text"
                name="email"
                id="email"
                autocomplete="off"
                placeholder="example"
              />
              <label className="label" for="email">
                E-Mail
              </label>
            </div>
            <div className="input-boxx">
              <input
                type="text"
                name="username"
                id="username"
                autocomplete="off"
                placeholder="example"
              />
              <label className="label" for="username">
                User Name
              </label>
            </div>
            <div className="input-boxx">
              <input
                type="password"
                name="password"
                id="password"
                autocomplete="off"
                placeholder="example"
              />
              <label className="label" for="password">
                Password
              </label>
            </div>
            <div className="input-boxx">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                autocomplete="off"
                placeholder="example"
              />
              <label className="label" for="confirmPassword">
                Confirm Password
              </label>
            </div>

            <div className="buttonn">
              <input type="submit" value="Register" />
            </div>
          </div>

          <div className="footerrr">
            <div className="login">
              <a href="#">Login</a>
            </div>
            <div className="social-media-icons">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-google-plus"></i>
              <i className="fa fa-pinterest"></i>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
