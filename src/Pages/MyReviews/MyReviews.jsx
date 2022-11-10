import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import UserReview from "./UserReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReview] = useState();

  useEffect(() => {
    fetch(`https://justica-law-server.vercel.app/my_review?uid=${user?.uid}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  console.log(reviews);

  return (
    <div className="w-5/6 mx-auto  my-12">
      <div className="overflow-x-scroll w-full border-2 rounded-xl">
        <table className="table w-full ">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Service Image/Name</th>
              <th>Review</th>
              <th>Service Id</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {reviews?.map((rev) => (
              <UserReview key={rev._id} rev={rev} />
            ))}
          </tbody>
          {/* <!-- foot --> */}
          <tfoot>
            <tr>
              <th>Service Image/Name</th>
              <th>Review</th>
              <th>Service Id</th>
              <th>Edit</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
