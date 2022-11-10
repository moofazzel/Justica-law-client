import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

import toast, { Toaster } from "react-hot-toast";
import Review from "../../components/Review";

const ServiceDetails = () => {
  const { _id, description, image, price, serviceName } = useLoaderData();

  const { user } = useContext(AuthContext);

  console.log(user);
  const handleReviewBtn = () => {};
  const handleSend = (e) => {
    e.preventDefault();

    const review = e.target.review.value;

    const user_review = {
      user_image: user.photoURL,
      user_email: user.email,
      uid: user.uid,
      user_name: user.displayName,
      service_id: _id,
      review: review,
      serviceName: serviceName,
      serviceImage: image,
    };

    fetch("https://justica-law-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user_review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Added!");
        }
      });
    console.log(review);
  };

  //  find service review with id

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://justica-law-server.vercel.app/service/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [_id]);

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

        <div className="flex justify-center w-5/6 mx-auto my-10">
          <div className="grid grid-cols-1 gap-5">
            {/* <!-- component --> */}
            {reviews.map((rev) => (
              <Review key={rev._id} rev={rev} />
            ))}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ServiceDetails;
