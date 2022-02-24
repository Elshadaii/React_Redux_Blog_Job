import React, { Component } from "react";
import { connect } from "react-redux";
import { createApplication } from "../actions/application";

class AddApplication extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeJob_Id= this.onChangeDescription.bind(this);
    this.saveApplication = this.saveApplication.bind(this);
    this.newApplication = this.newApplication.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      published: false,
      submitted: false,
    };
  }

  

  onChangeJob_Id(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveApplication() {
    const { job_id} = this.state;

    this.props
      .createApplication(job_id)
      .then((data) => {
        this.setState({
          id: data.id,
          title: data.title,
          description: data.description,
          published: data.published,
          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newApplication() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {" "}
        {this.state.submitted ? (
          <div>
            <h4> You submitted successfully! </h4>{" "}
            <button className="btn btn-success" onClick={this.newJob}>
              Add{" "}
            </button>{" "}
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title"> Title </label>{" "}
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>{" "}
            <div className="form-group">
              <label htmlFor="description"> Description </label>{" "}
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>{" "}
            <button onClick={this.saveJob} className="btn btn-success">
              Submit{" "}
            </button>{" "}
          </div>
        )}{" "}
      </div>
    );
  }
}

export default connect(null, { createApplication })(AddApplication);
