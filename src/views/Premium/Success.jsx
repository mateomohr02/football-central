import React, { useState } from 'react';

const Success = () => {
  const [reviewMessage, setReviewMessage] = useState('');

  const handleReviewSubmit = () => {
    console.log(`Gracias por su compra. Review: ${reviewMessage}`);
  };
  return (
    <div>
      <h2>Gracias por su compra</h2>
      <form onSubmit={handleReviewSubmit}>
        <textarea
          value={reviewMessage}
          onChange={(event) => setReviewMessage(event.target.value)}
          placeholder='Escribe tu review...'
        />
        <button type="submit">Enviar Review</button>  
      </form>
    </div>
  )
};

export default Success