import New from "../New/New";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getNews } from "../../redux/actions/action-news";
import { ArticleRounded } from "@mui/icons-material";

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const news = useSelector((state) => state.news.news);

  console.log('las news',news)

  const dispatch = useDispatch();
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? news.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === news.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % news.length);
        dispatch(getNews());
      },
      6000,
      [dispatch]
    );

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, news.length]);

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {" "}
      {/* main container */}
      <Carousel
        selectedItem={currentSlide}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={500}
        emulateTouch
      >
        {/* container de news */}
        {news.map((article, index) => (
          <div key={article.id}>
            <New
              title={article.title}
              description={article.description}
              content={article.content}
              url={article.url}
              image={article.image}
              publishedAt={article.publishedAt}
            />
          </div>
        ))}
      </Carousel>
      {/* Slider redondos*/}
      <div className=" absolute -bottom-5 z-30 flex space-x-3 -translate-x-1/2  left-1/2">
        <button
          type="button"
          className={`w-2.5 h-2.5 rounded-full ${
            currentSlide === 0 ? "bg-pf-blue" : "bg-gray-500"
          }`}
          aria-current={currentSlide === 0 ? "true" : "false"}
          aria-label="Slide 1"
          onClick={() => handleSlideChange(0)}
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className={`w-2.5 h-2.5 rounded-full ${
            currentSlide === 1 ? "bg-pf-blue" : "bg-gray-500"
          }`}
          aria-current={currentSlide === 1 ? "true" : "false"}
          aria-label="Slide 2"
          onClick={() => handleSlideChange(1)}
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className={`w-2.5 h-2.5 rounded-full ${
            currentSlide === 2 ? "bg-pf-blue" : "bg-gray-500"
          }`}
          aria-current={currentSlide === 2 ? "true" : "false"}
          aria-label="Slide 3"
          onClick={() => handleSlideChange(2)}
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className={`w-2.5 h-2.5 rounded-full ${
            currentSlide === 3 ? "bg-pf-blue" : "bg-gray-500"
          }`}
          aria-current={currentSlide === 3 ? "true" : "false"}
          aria-label="Slide 4"
          onClick={() => handleSlideChange(3)}
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className={`w-2.5 h-2.5 rounded-full ${
            currentSlide === 4 ? "bg-pf-blue" : "bg-gray-500"
          }`}
          aria-current={currentSlide === 4 ? "true" : "false"}
          aria-label="Slide 5"
          onClick={() => handleSlideChange(4)}
          data-carousel-slide-to="4"
        ></button>
      </div>
      {/* Slider control flecha */}
      <button
        type="button"
        className="absolute top-6 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group outline-none"
        data-carousel-prev
        onClick={handlePrevSlide}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-6 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextSlide}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default News;

/* 
currentSlide -> el índice de la new actual

Funciones de control de diapositivas:

handleSlideChange: se ejecuta cuando se cliquea en uno de los botones redondos. Recibe el index de la new y actualiza currentSlide con ese valor.
handlePrevSlide: Se ejecuta al cliquear en el botón de la new anterior. Actualiza currentSlide restando 1 al index, siempre que no sea < 0. Si index=0, se setea .length -1
handleNextSlide: Se ejecuta al cliquear en el botón de la new siguiente. Actualiza currentSlide sumando 1 al index, asegurándose de que no sea mayor que .length -1 (la cantidad total de diapositivas). Si el índice actual es 4, se establece en 0, creando el efecto de bucle circular hacia la primera diapositiva.
Efecto para el cambio automático de diapositivas:

Se utiliza el hook useEffect para iniciar un intervalo que cambia automáticamente la diapositiva cada 5 segundos.
Dentro del intervalo, se actualiza currentSlide utilizando el operador de módulo % para asegurarse de que el índice se mantenga dentro del rango válido.
El intervalo se limpia al desmontar el componente, evitando que siga ejecutándose después de que el componente se haya eliminado.
Renderizado del componente:

Se utiliza el componente Carousel de la librería para mostrar las diapositivas.
Se configuran varias propiedades de Carousel para personalizar su comportamiento, como selectedItem para establecer la diapositiva actual, y showArrows, showStatus, showIndicators y showThumbs para ocultar las flechas, el estado, los indicadores y las miniaturas respectivamente.
Dentro del componente Carousel, se utiliza map para renderizar cada diapositiva del array news utilizando el componente New.
Las diapositivas se muestran u ocultan según el índice actual mediante el uso de estilos en línea dinámicos (display: block o display: none).
Botones redondos para la navegación entre diapositivas:

Se renderizan cinco botones redondos utilizando un bucle map, uno para cada diapositiva.
La clase CSS bg-blue-500 se aplica al botón correspondiente a la diapositiva actual (currentSlide === index).
Cada botón tiene un atributo onClick que llama a la función handleSlideChange con el índice de la diapositiva correspondiente.
Botones de flecha para la navegación entre diapositivas:

Se renderizan dos botones de flecha para la navegación anterior y siguiente.
Cada botón tiene un atributo onClick que llama a las funciones handlePrevSlide y handleNextSlide respectivamente.
*/
