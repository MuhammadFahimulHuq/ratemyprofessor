import React from "react";

const RateScore = ({ reviews }) => {
  return (
    <div className="d-inline-flex  justify-content-center align-items-center">
      <h4 className="text-light bg-dark">Average Rating</h4>
      <h2 className="mx-2 text-info">
        {(
          reviews.reduce(
            (total, item) => total + item.rating * item.rating,
            0
          ) / reviews.reduce((total, item) => total + item.rating, 0)
        ).toFixed(1)}
        /5
      </h2>
    </div>
  );
};

export default RateScore;
