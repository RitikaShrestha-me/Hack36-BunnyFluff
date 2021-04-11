import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <form className="content" action="/registerUser" method="POST">
          <div className="image">
            <img src={loginImg} alt="loginimg" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username<span class="required">*</span></label>
              <input type="Text" name="userName" id="userName" placeholder="username" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email<span class="required">*</span></label>
              <input type="text" name="email" id="email" type="email" placeholder="email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password<span class="required">*</span></label>
              <input type="password" name="password" id="password" placeholder="password" required/>
            </div>
          </div>
          <div className="footer">
            <button type="submit" id="registerBtn" className="btn">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
