import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getReviews, createReview } from '../../redux/actions/action_reviews';

const Success = () => {
  const [rating, setRating] = useState(0);
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

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
      <h1>Reviews</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label>
          <div className="stars-container" data-rating={rating}></div>
          <div>
            {[1, 2, 3, 4, 5].map((starCount) => (
              <span
                key={starCount}
                onClick={() => handleStarClick(starCount)}
                style={{ cursor: 'pointer' }}
              >
                {starCount <= rating ? '★' : '☆'}
              </span>
            ))}
          </div>
        </div>
        <div>
          <label>Topic:</label>
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>          
  )
};

export default Success;