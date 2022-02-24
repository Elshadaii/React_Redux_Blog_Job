import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <ul>
        <Link to="/job-seeker-Register">
          {" "}
          <li> Job seeker </li>
        </Link>
        <Link to="/job-recruiter-Register">
          {" "}
          <li> Job recruiter </li>
        </Link>
      </ul>{" "}
    </div>
  );
}

export default Register;
