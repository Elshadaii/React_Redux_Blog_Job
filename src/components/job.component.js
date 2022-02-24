import React, { Component, useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { updateJob, deleteJob } from "../actions/job";
import JobDataService from "../services/job.service";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams()
    return <Child {...props} params={params} navigate={navigate} location={location} />;
  };
}

class Job extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getJob = this.getJob.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.removeJob = this.removeJob.bind(this);

    this.state = {
      currentJob: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getJob(this.props.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentJob: {
          ...prevState.currentJob,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentJob: {
        ...prevState.currentJob,
        description: description,
      },
    }));
  }

  getJob(id) {
    JobDataService.get(id)
      .then((response) => {
        this.setState({
          currentJob: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStatus(status) {
    var data = {
      id: this.state.currentJob.id,
      title: this.state.currentJob.title,
      description: this.state.currentJob.description,
      published: status,
    };

    this.props
      .updateJob(this.state.currentJob.id, data)
      .then((response) => {
        console.log(response);

        this.setState((prevState) => ({
          currentJob: {
            ...prevState.currentJob,
            published: status,
          },
        }));

        this.setState({ message: "The status was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContent() {
    this.props
      .updateJob(this.state.currentJob.job_id, this.state.currentJob)
      .then((response) => {
        console.log(response);

        this.setState({ message: "The Job was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeJob() {
    console.log(this.state.currentJob)
    this.props
      .deleteJob(this.state.currentJob.job_id)
      .then(() => {
        this.props.location.push("/jobs");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentJob } = this.state;

    return (
      <div className="item-center">
        {" "}
        {currentJob ? (
          <div className="edit-form justify-center ml-10 ">
            <h4 className="text-primary text-3xl font-bold pt-10"> Job </h4>{" "}
            <form>
              <div className="form-group">
                <label htmlFor="title" className="text-primary text-xl font-bold pb-3"> Title </label>{" "}
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                  id="title"
                  value={currentJob.title}
                  onChange={this.onChangeTitle}
                />{" "}
              </div>{" "}
              <div className="mb-5">
                <label htmlFor="description " className=" text-primary text-xl font-bold pb-3" > Description </label>{" "}
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  value={currentJob.job_desc}
                  onChange={this.onChangeDescription}
                />{" "}
              </div>{" "}
              {/* <div className="form-group">
                <label>
                  <strong> Status: </strong>{" "}
                </label>{" "}
                {currentJob.published ? "Published" : "Pending"}{" "}
              </div>{" "} */}
            </form>{" "}
            {currentJob.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(false)}
              >
                UnPublish{" "}
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(true)}
              >
                {/* Publish{" "} */}
              </button>
            )}{" "}
            <button
              className="mr-2 mt-3 p-2 text-primary border-solid border-2 border-primary rounded-md hover:bg-primary hover:text-white transition ease-out"
              onClick={this.removeJob}
            >
              Delete{" "}
            </button>{" "}
            <button
              type="submit"
              className="mr-2 mt-3 p-2 text-primary border-solid border-2 border-primary rounded-md hover:bg-primary hover:text-white transition ease-out"
              onClick={this.updateContent}
            >
              Update{" "}
            </button>{" "}
            <p> {this.state.message} </p>{" "}
          </div>
        ) : (
          <div>
            <br />
            <p> Please click on a Job... </p>{" "}
          </div>
        )}{" "}
      </div>
    );
  }
}

export default connect(null, { updateJob, deleteJob })(withRouter(Job));
