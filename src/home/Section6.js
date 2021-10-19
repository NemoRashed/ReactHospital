import React from "react";

function Section6() {
  return (
    <div className="contact-us">
      <div className="containeer">
        <h2>Contact us</h2>

        <div class="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span className="text">First Name</span>
              <span className="line"></span>
            </div>
          </div>

          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span className="text">Last Name</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div class="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span className="text">Email</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span className="text">Mobile</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="inputBox textarea">
              <textarea required="required"></textarea>
              <span className="textT">Type your message here...</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <input type="submit" value="send" />
          </div>
        </div>
      </div>
      <div className="contact-info">
        <h2>contact </h2>
        <h4>📌Location- Hargeisa,Somaliland</h4>
        <h4>📩Email-somalilandhospitals@44gamil.com</h4>
        <h4>📞Phone- 55444133467</h4>
        <h4>📞Phone- 99777133467</h4>
        <div className="social-icons-contact">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Section6;

//https://www.youtube.com/watch?v=rpujWVkmiPE&t=37s
