import React from 'react';
import './CardPremium.css';
import premium from "../../assets/43822.jpg"

const Card = () => {
  return (
    <div className="CardPremium">
      <img src={premium} alt="Premium Subscription" />
      <div className="card-text">
        <h2>Suscripción Premium</h2>
        <p>
          Accede a rutas y características exclusivas diseñadas para usuarios
          premium. Disfruta de beneficios adicionales y contenido exclusivo.
        </p>
      </div>
    </div>
  );
};

export default Card;

