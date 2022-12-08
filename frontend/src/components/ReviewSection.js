import React from 'react'

const ReviewSection = ({review}) => {
  return (
    <>
    <div className='card my-2'>
      <div className='pt-3 px-4'>
     <div className='d-flex justify-content-between'>
      <div className='d-flex'><strong>{review.name}</strong><p className="mx-2">{review.comment}</p></div> <small>rating: {review.rating}</small></div>
      </div>
 
  </div>
    </>
  )
}
export default ReviewSection