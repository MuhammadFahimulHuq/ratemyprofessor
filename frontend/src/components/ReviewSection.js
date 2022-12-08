import React from 'react'
import moment from 'moment'
const ReviewSection = ({review}) => {
  return (
    <>
    <div className='card my-2'>
      <div className='pt-3 px-4'>
     <div className='d-flex justify-content-between'>
      <div className='d-flex'><strong>{review.name}</strong><p className="mx-2">{review.comment}</p></div> 
      <div>
      <small>rating {review.rating}</small>
      
      <small className='text-muted ms-4'>{moment(review.created_at).fromNow()}</small>
      </div>
      
      </div>
      </div>
 
  </div>
    </>
  )
}
export default ReviewSection