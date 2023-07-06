
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../../redux/actions/action_reviews';
//import './Reviews.module.css';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const Reviews = () => {
  const reviews = useSelector(state => state.reviews.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);


  return (
    <div className="reviews-container">
      <div className="w-[90vw] h-[90vh] flex items-start flex-col 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg mx-auto mt-5">
        <div className="h-[15%] w-full flex justify-center items-center text-3xl">
          <h2 className="text-center font-semibold text-3xl lg:text-6xl text-gray-800">Algunas de nuestras calificaciones:</h2>
        </div>
        <div className="h-[85%] w-full flex flex-row flex-wrap gap-5 px-5">
          <ul>
            {reviews.map((review) => (
              <li key={review.id} className="w-80 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg mx-auto mt-5">
                <div className="stars-container">
                  Rating: {[...Array(review.rating)].map((_, index) => (
                    <span key={index}><StarRoundedIcon className="text-yellow-500" /></span>
                  ))}
                </div>
                <div className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200">Tema: {review.topic}</div>
                <div className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200">Descripcion: {review.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>


    </div>
  );
};

export default Reviews;
