import React from "react";

function Appiontment() {
  return (
    <div>
      <div className="containerr">
        <center>
          <b className="title label">Appiontment</b>
        </center>
        <form action="#" id="login-form" className="Appiontment">
          <div className="user-details">
            <div className="input-boxx">
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="txt-appiontment"
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
                name="fullName"
                id="fullName"
                autocomplete="off"
                placeholder="example"
              />
              <label className="label" for="fullName">
                Email
              </label>
            </div>
            <div className="input-boxx">
              <input
                type="text"
                name="fullName"
                id="fullName"
                autocomplete="off"
                placeholder="example"
              />
              <label className="label" for="fullName">
                Department
              </label>
            </div>
            <div className="input-boxx">
              <input
                type="text"
                name="fullName"
                id="fullName"
                autocomplete="off"
                placeholder="example"
              />
              <label className="label" for="fullName">
                Doctor
              </label>
            </div>

            <div className="button">
              <input type="button" value="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Appiontment;
