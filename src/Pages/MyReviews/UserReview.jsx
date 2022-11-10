import React from "react";
import { Link } from "react-router-dom";
import right_arrow from "../../assets/icons/right_arrow.svg";

const UserReview = ({ rev }) => {
  const { serviceName, service_id, review, serviceImage } = rev;
  return (
    <>
      {/* <!-- row 1 --> */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold flex items-center">
                {serviceName}
                <Link to={`../services/${service_id}`} title="Go to review">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="#eaa636"
                    class="bi bi-arrow-right-short ml-2 hover:ml-3 hover:bg-black hover:rounded-md transition-all"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </td>
        <td>{review}</td>
        <td>{service_id} </td>
        <th>
          <button className="btn btn-ghost btn-xs ">Edit</button>
        </th>
      </tr>
    </>
  );
};

export default UserReview;
