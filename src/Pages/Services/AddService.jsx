import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const AddService = () => {
  const handleAddService = (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const photoURL = from.photoURL.value;
    const price = from.price.value;
    const description = from.description.value;
    // console.log(title, photoURL, price, description);

    const service = {
      serviceName: title,
      description: description,
      image: photoURL,
      price: `$ ${price}`,
    };

    console.log(service);

    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
            toast.success('Successfully Added!')
        }
      });
  };
  return (
    <div>
      <div className="service-header text-white text-center h-[250px] flex flex-col justify-center items-center">
        <h1>Add Service</h1>
        <span className="block w-56 my-2 mx-auto border-[#ffb43a] border-b-4"></span>
        <p>You can add service here, it will show in the service page</p>
      </div>

      <div className="w-10/12 md:w-2/3 lg:w-1/2 mx-auto my-8">
        <form
          action="#"
          onSubmit={handleAddService}
          className="flex flex-col space-y-5"
        >
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="title"
              className="text-sm font-semibold text-gray-500"
            >
              Title of Service
            </label>
            <input
              required
              name="title"
              type="text"
              id="title"
              autoFocus
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-yellow-100"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="PhotoURL"
              className="text-sm font-semibold text-gray-500"
            >
              Photo URL
              <small className="font-normal">
                (image should be 1280*720 or bigger)
              </small>
            </label>
            <input
              required
              name="photoURL"
              type="URL"
              id="PhotoURL"
              autoFocus
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-yellow-100"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="price"
              className="text-sm font-semibold text-gray-500"
            >
              Price
            </label>
            <input
              required
              name="price"
              type="number"
              id="price"
              autoFocus
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-yellow-100"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
                className="text-sm font-semibold text-gray-500"
              >
                Description{" "}
                <small className="font-normal">
                  (Full description of your product)
                </small>
              </label>
            </div>
            <input
              required
              name="description"
              type="text"
              id="description"
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-yellow-100"
            />
          </div>
          <div className="pb-5">
            <button
              //   onClick={notify}
              type="submit"
              className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#eaa636] rounded-md shadow hover:bg-gray-800 focus:outline-none focus:ring-blue-200 focus:ring-4"
            >
             
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default AddService;
