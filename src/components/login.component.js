import React, { Component } from "react";
import { Navigate } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login, logout } from "../actions/auth";
import { isEmail } from "validator";
import JobRecruiter from "./JobRecruiter";
import JobSeeker from "./JobSeeker";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.{" "}
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props.login(this.state.email, this.state.password);
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { isLoggedIn, message } = this.props;
    console.log(isLoggedIn);
    if (isLoggedIn) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        return <Navigate to="/jobs" />;
      }
    }

    return (
      <div className="col-md-12">
        <div className="card card-container shadow-lg">
          <img
            src="https://leainstitution.org/wp-content/uploads/2020/09/VTECH-CODERS-DHARWAD-My_profile.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="email" className="pb-3"> Email </label>{" "}
              <Input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
              />{" "}
            </div>{" "}
            <div className="form-group">
              <label htmlFor="password" className="pb-3"> Password </label>{" "}
              <Input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />{" "}
            </div>{" "}
            <div className="form-group mb-5 mt-3">
              <button
                className=" mr-0 mt-3 p-2 text-primary border-solid border-2 border-primary rounded-md hover:bg-primary hover:text-white transition ease-out"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"> </span>
                )}{" "}
                <span> Login </span>{" "}
              </button>{" "}
            </div>{" "}
            Already have an account? sign in <a href='/register' className="text-primary">here</a>
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {" "}
                  {message}{" "}
                </div>{" "}
              </div>
            )}{" "}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />{" "}
          </Form>{" "}
          
        </div>{" "}
      </div>
    );
  }
  
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
