import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveJobs, findJobsByTitle, deleteAllJobs } from "../actions/job";
import { Link } from "react-router-dom";

class JobsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveJob = this.setActiveJob.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllJobs = this.removeAllJobs.bind(this);

    this.state = {
      currentJob: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveJobs();
  }
  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      currentJob: null,
      currentIndex: -1,
    });
  }

  setActiveJob(job, index) {
    this.setState({
      currentJob: job,
      currentIndex: index,
    });
  }

  removeAllJobs() {
    this.props
      .deleteAllJobs()
      .then((response) => {
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByTitle() {
    this.refreshData();

    this.props.findJobsByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, currentJob, currentIndex } = this.state;
    const { jobs } = this.props;

    return (


      <div className="list row">
        <div className="col-md-8">

        <div class=" bg-white shadow=xl mb-10">
    <div class="container  flex items-center px-4 sm:px-6 lg:px-8  ml-20 pl-10 ">
        <div class="relative item-center justify-center"> 
        <input 
        type="text" 
        class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow  shadow-xl focus:outline-none items-center" 
        placeholder="Search anything..."
        value={searchTitle}
        onChange={this.onChangeSearchTitle}/>
            <div class="absolute top-4 right-20">   <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div>
        </div>
    </div>
</div>

{/* 
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />{" "}
            {/* <div className="input-group-append">
                              <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.findByTitle}
                              >
                                Search
                              </button>
                            </div> */}{" "}
          {/* </div>{" "} */}
        </div>{" "}

        <div className="flex justify-evenly">

        <div className="col-md-6 ml-10">
          <h4 className="font-bold text-3xl text-primary mb-5"> Jobs List </h4>
          <ul className="list-group">
            {" "}
            {jobs &&
              jobs
                .filter(
                  (_job) =>
                    _job.title != null && _job.title.includes(this.state.searchTitle)
                )
                .map((job, index) => (

                  <div className="mb-5 text-xl border-b-2 pb-3">
                      <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "") 
                    }
                    onClick={() => this.setActiveJob(job, index)}
                    key={index}
                  >
                    {job.title}{" "}
                  </li>
                < p className="text-primary text-sm">#Job #Apply</p> 
                  </div>
                  
                ))}{" "}
          </ul>
        </div>{" "}
        <div className="col-md-6">
          {" "}
          {currentJob ? (
            <div>
              <h4 className='text-primary text-3xl' > Job </h4>{" "}
              <div>
                <label>
                  <strong className="text-2xl"> Title: </strong>{" "}
                </label>{" "}
                <p className="text-xl">{currentJob.title}{" "}</p>
                
              </div>{" "}
              <div>
                <label>
                  <strong className="text-2xl"> Description: </strong>{" "}
                </label>{" "}
                <p className="text-xl mb-3">
                {currentJob.job_desc}{" "}
                </p>
               
              </div>{" "}
              {/* <div>
                <label>
                  <strong> Status: </strong>{" "}
                </label>{" "}
                {currentJob.published ? "Published" : "Pending"}{" "}
              </div> */}
              <Link
                to={"/jobs/" + currentJob.job_id}
                className=" mr-2 mt-3 p-2 text-primary border-solid border-2 border-primary rounded-md hover:bg-primary hover:text-white transition ease-out"
              >
                Edit{" "}
              </Link>{" "}
            </div>
          ) : (
            <div>
              <br />
              <p> Please click on a Job... </p>{" "}
            </div>
          )}{" "}
        </div>{" "}
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
  };
};

export default connect(mapStateToProps, {
  retrieveJobs,
  findJobsByTitle,
  deleteAllJobs,
})(JobsList);
