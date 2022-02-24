import React, { Component } from "react";
import { connect } from "react-redux";
import { createJob } from "../actions/job";

class AddJob extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveJob = this.saveJob.bind(this);
    this.newJob = this.newJob.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveJob() {
    const { title, description } = this.state;

    this.props
      .createJob(title, description)
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

  newJob() {
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
      <div className="">
        {" "}
        {this.state.submitted ? (
          <div>
            <h4 className="font-bold text-4xl text-primary mt-10 text-center"> You submitted successfully! </h4>
            {" "}
            
            <button className="mr-2 mt-3 p-2 text-primary border-solid border-2 border-primary rounded-md hover:bg-primary hover:text-white transition ease-out content-center" onClick={this.newJob}>
              Add{" "}
            </button>{" "}
          </div>
        ) : (
          <div className="ml-20">
            <div className="">
              <label htmlFor="title" className="text-primary text-xl mt-20 font-bold mb-5"> Title </label>{" "}
              <input
                type="text"
                className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>{" "}
            <div className="form-group">
              <label htmlFor="description" className="text-primary text-xl font-bold mb-5"> Description </label>{" "}
              <input
                type="text"
                className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>{" "}
            <button onClick={this.saveJob} className="mr-2 mt-5 p-2 text-primary border-solid border-2 border-primary rounded-md hover:bg-primary hover:text-white transition ease-out">
              Submit{" "}
            </button>{" "}
          </div>
        )}{" "}
      </div>
    );
  }
}

export default connect(null, { createJob })(AddJob);
