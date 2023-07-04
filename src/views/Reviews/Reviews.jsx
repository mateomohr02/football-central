import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../../redux/actions/action_reviews';
import './Reviews.module.css';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const Reviews = () => {
  const reviews = useSelector(state => state.reviews.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <div className="h-[90vh] v-full bg-orange-300">
      <h2>Todas las calificaciones:</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id} className="max-w-[60px] px-8 py-4 bg-white rounded-lg shadow-md">
            <div>
              Rating: {[...Array(review.rating)].map((_, index) => (
                <span key={index}><StarRoundedIcon className="text-yellow-500" /></span>
              ))}
            </div>
            <div>Topic: {review.topic}</div>
            <div>Description: {review.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
