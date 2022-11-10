import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";


import toast, { Toaster } from "react-hot-toast";

const ServiceDetails = () => {


  const { _id, description, image, price, serviceName } = useLoaderData();

  const { user } = useContext(AuthContext);

  const handleReviewBtn = () => {};
  const handleSend = (e) => {
    e.preventDefault();

    const review = e.target.review.value;

    const user_review = {
      user_image: user.photoURL,
      user_email: user.email,
      user_name: user.displayName,
      service_id: _id,
      review:review
    };


    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user_review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
            toast.success('Review Added!')
        }
      });


    console.log(review);
  };

  return (
    <div>
      <div className="service-header text-white text-center h-[250px] flex flex-col justify-center items-center">
        <h1>Practice Areas</h1>
        <span className="block w-56 my-2 mx-auto border-[#ffb43a] border-b-4"></span>
        <p>Reputation. Respect. Result.</p>
      </div>
      <div className="w-5/6 mx-auto my-16 ">
        <div className="flex gap-10">
          <img className="mb-8 h-96 rounded-[3px] " src={image} alt="" />
          <div>
            <h2 className="border-l-4 border-[#ffb43a]  pl-4 py-2">
              {serviceName}
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </div>

      {/* Review  */}
      <div>
        <div className="bg-yellow-400 text-white py-12 rounded-sm">
          <div className="text-center  w-5/6 mx-auto lg:flex justify-between items-center ">
            <h3 className="text-2xl font-semibold mb-6 lg:mb-0">
              Now! Get a Free Consultation for Your Case.
            </h3>
            <Link
              className="rounded-sm text-xs font-bold text-white no-underline bg-[#111] tracking-widest uppercase py-3 px-8"
              href="#"
            >
              Make Appointment
            </Link>
          </div>
        </div>

        <div className="text-center my-4">
          <h1 className="text-4xl font-bold py-2">Clients Reviews</h1>
          <p className="text-2xl font-semibold pb-3">
            What Our Clients Say About Us
          </p>
          <Link
            to={"/login"}
            onClick={handleReviewBtn}
            className="rounded-sm text-xs font-bold text-white no-underline bg-[#111] tracking-widest uppercase py-3 px-8"
          >
            Write a Review
          </Link>

          {user && (
            <div className="my-5 w-[60%] mx-auto">
              {/* Checking user  */}

              <form onSubmit={handleSend}>
                <div className="mb-4 w-full bg-gray-50 rounded-lg border border-yellow-400">
                  <div className="mb-4">
                    <img
                      style={{ borderRadius: "50%" }}
                      className="w-1h-14 h-14 btn m-1 block"
                      tabIndex={0}
                      src="https://lh3.googleusercontent.com/a/ALm5wu1uRfhVSfxKtytYXMoTUvZ4_juMPo3iDt88M_ssSMg=s96-c"
                      alt=""
                    />
                    <span className="block text-2xl font-semibold">
                      Name: {user.displayName}
                    </span>
                    <span className="block text-2xl font-semibold">
                      Email: {user.email}
                    </span>
                  </div>
                  <div className="py-2 px-4 bg-white rounded-t-lg ">
                    <textarea
                      name="review"
                      id="comment"
                      rows="4"
                      className="p-2 w-full text-sm text-black bg-white border-0  focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Write your review..."
                      required=""
                    ></textarea>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 border-t">
                    <button
                      type="submit"
                      className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#ffb43a] rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-[#ff9d00]"
                    >
                      Send
                    </button>
                    <div className="flex pl-0 space-x-1 sm:pl-2">
                      <button
                        type="button"
                        className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Attach file</span>
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Set location</span>
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Upload image</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Reviews */}

        <div className="flex">
          <div className="w-1/2 p-4 text-left my-4">
            {/* <!-- component --> */}
            <div className="flex items-center justify-center">
              <div className="px-10">
                <div className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
                  <div className="mt-4">
                    <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
                      Product Review
                    </h1>
                    <div className="flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="mt-4 text-md text-gray-600">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happines.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="mt-4 flex items-center space-x-4 py-6">
                        <div className="">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
                            alt=""
                          />
                        </div>
                        <div className="text-sm font-semibold">
                          John Lucas •{" "}
                          <span className="font-normal"> 5 minutes ago</span>
                        </div>
                      </div>
                      <div className="p-6 bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ServiceDetails;
