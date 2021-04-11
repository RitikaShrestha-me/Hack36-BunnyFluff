import React from "react";
import loginImg from "../../login.svg";

export class Login extends React.Component {
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <form className="content" action="/validateUser" method="post">
          <div className="image">
            <img src={loginImg} alt="loginimg" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username<span class="required">*</span></label>
              <input type="text" name="username" placeholder="username" required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password<span class="required">*</span></label>
              <input type="password" name="password" placeholder="password" required/>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn" type="submit" id="loginBtn">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

