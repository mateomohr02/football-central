import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getReviews, createReview } from '../../redux/actions/action_reviews';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import './Success.module.css'

const Success = () => {
  const [rating, setRating] = useState(0);
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  useEffect(() => {
    // Convertir la calificación numérica a estrellas al cargar la página
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
      const rating = Number(starsContainer.getAttribute('data-rating'));
      setRating(rating);
    }
  }, []);


  const reviews = useSelector(state => state.reviews.reviews);
  const handleStarClick = (starCount) => {
    setRating(starCount);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      rating: rating,
      topic: topic,
      description: description
    };
    dispatch(createReview(newReview));
    setRating(0);
    setTopic('');
    setDescription('');
  };

  return (
    <div className="reviews-container">
     
      <form onSubmit={handleSubmit} className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg mx-auto mt-5">
        <h1 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">Califica nuestra página</h1>
        <div>
          <label>Rating:</label>
          <div className="stars-container" data-rating={rating}></div>
          <div>
            {[1, 2, 3, 4, 5].map((starCount) => (
              <span
                key={starCount}
                onClick={() => handleStarClick(starCount)}
                className='cursor-pointer'
              >
                {starCount <= rating ? <StarRoundedIcon className="text-yellow-500" /> : <StarOutlineRoundedIcon className="text-yellow-500" />}
              </span>
            ))}
          </div>
        </div>
        <div>
          <label>Tema:</label>
          <input type="text" placeholder="Elije un tema " value={topic} onChange={(e) => setTopic(e.target.value)} className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"/>
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" placeholder="Da un descripción breve" value={description} onChange={(e) => setDescription(e.target.value)} className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"/>
        </div>
        <button type="submit" className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">Sube tu calificación</button>
      </form>
    </div>
  )
};

export default Success;