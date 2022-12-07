import React from 'react'

const ReviewSection = ({review}) => {
  return (
    <>
  <p>Rating: {review.rating}</p>
  <p>Comment: {review.comment}</p>
    </>
  )
}
export default ReviewSection