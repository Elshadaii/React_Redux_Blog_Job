import React from "react";
import about_dark from "../imgs/about_dark.png";

function Contact() {
  return (
    <div class="grid grid-cols-2 gap-4 bg-gray-200">
      <div class="p-3 pl-20 ">
        <h2 class="text-primary text-3xl font-bold pt-5"> Ask us questions </h2>{" "}
        <div class="bg-wite rounded-xl shadow-lg p-8 bg-white mt-10 mb-10 w-4/5">
          <form action="" class="">
            <div class="mb-5 ">
              {" "}
              {/* <label for='' class='text-sm'>Your name</label> */}
              <input
                type="text"
                placeholder="Your Name"
                className="ring-1 ring-gray-300 w-full rounded - md px - 4 py - 2 outline - none focus: ring - 2 focus: ring - primary "
              ></input>{" "}
            </div>{" "}
            <div class="mb-5">
              {" "}
              {/* <label for='' class='text-sm'>Email Address</label> */}
              <input
                type="email"
                placeholder="Email Address"
                class="ring-1 ring-gray-300 w-full
    rounded - md px - 4 py - 2 outline - none focus: ring - 2 focus: ring - primary "
              ></input>{" "}
            </div>{" "}
            <div>
              {" "}
              {/* <label for='' class='text-sm'>Email Address</label> */}
              <textarea
                type="Message"
                placeholder="Text area"
                class="ring-1 ring-gray-300 w-full 
    rounded - md px - 4 py - 2 outline - none focus: ring - 2 focus: ring - primary "
                rows="
    5 "
              ></textarea>{" "}
            </div>{" "}
            <button class="inline justify-start text-white bg-primary font-bold rounded-md px-6 py-2 mt-2">
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>{" "}
      </div>{" "}
      <div class="mt-20 justify-end ">
        <img src={about_dark} class="text-black" />
      </div>
    </div>
  );
}

export default Contact;
