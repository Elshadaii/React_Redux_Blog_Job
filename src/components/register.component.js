import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { register } from "../actions/auth";

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
        This is not a valid email.
      </div>
    );
  }
};

const vname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword_confirmation = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vphone_no = (value) => {
  if (value.length < 10 || value.length > 15) {
    return (
      <div className="alert alert-danger" role="alert">
        invalid phone no
      </div>
    );
  }
};

const vaddress = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordConfirmation =
      this.onChangePasswordConfirmation.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangePhoneNo = this.onChangePhoneNo.bind(this);

    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      address: "",
      phone_no: "",
      role: "",
      successful: false,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
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

  onChangePasswordConfirmation(e) {
    this.setState({
      password_confirmation: e.target.value,
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
  onChangePhoneNo(e) {
    this.setState({
      phone_no: e.target.value,
    });
  }

  onChangeRole(e) {
    this.setState({
      role: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          register(this.state.name, this.state.email, this.state.password, this.state.password_confirmation, this.state.role, this.state.address, this.state.phone_no)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props;

    return (
      <div className="col-md-12">
        <div className="card card-container shadow-lg">
          <img
            src="https://leainstitution.org/wp-content/uploads/2020/09/VTECH-CODERS-DHARWAD-My_profile.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={(c) => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group mb-2">
                  <label htmlFor="name">Name</label>
                  <Input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-asap bg-white  leading-tight focus:outline-none focus:shadow-outline mt-2"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    validations={[required, vname]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline mt-2"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white  leading-tight focus:outline-none focus:shadow-outline mt-2"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password_confirmation">
                    Password Confirmation
                  </label>
                  <Input
                    type="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline mt-2"
                    name="password"
                    value={this.state.password_confirmation}
                    onChange={this.onChangePasswordConfirmation}
                    validations={[required, vpassword_confirmation]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Phone no</label>
                  <Input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white  leading-tight focus:outline-none focus:shadow-outline mt-2"
                    name="phone_no"
                    value={this.state.phone_no}
                    onChange={this.onChangePhoneNo}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Address</label>
                  <Input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline mt-2"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="text">Role</label>
                  <Input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline mt-2"
                    name="role"
                    value={this.state.role}
                    onChange={this.onChangeRole}
                    // validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <button className="mr-0 mt-3 p-2 text-primary border-solid border-2 border-primary rounded-md hover:bg-primary hover:text-white transition ease-out mt-5 mb-2">Sign Up</button>
                  <div>
                  Already have an Account? Login <a href="/login" className="text-primary">here</a>
                  </div>
                
                </div>
              </div>
            )}

            {message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Register);
