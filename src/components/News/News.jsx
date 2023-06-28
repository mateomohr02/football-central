import New from "../New/New";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getNews } from "../../redux/actions/action-news";
import { ArticleRounded } from "@mui/icons-material";

const news= [
  {
    "title": "El Barça recibe un aluvión de críticas por apoyar al colectivo LGBTI: \"Ridículo\"",
    "description": "El FC Barcelona, como muchos clubes de fútbol y del deporte en general, celebra este 28 de junio el Día Internacional del Orgullo LGTBI. A través de sus...",
    "content": "El FC Barcelona, como muchos clubes de fútbol y del deporte en general, celebra este 28 de junio el Día Internacional del Orgullo LGTBI. A través de sus redes sociales, el conjunto catalán lo ha querido conmemorar con un sinfín de mensajes e iniciati... [1283 chars]",
    "url": "https://www.20minutos.es/deportes/noticia/5142345/0/barca-recibe-un-aluvion-criticas-por-apoyar-colectivo-lgbti-ridiculo/",
    "image": "https://imagenes.20minutos.es/files/og_thumbnail_panoramic/files/og_20m/uploads/imagenes/2023/06/28/araujo-lamentandose.png",
    "publishedAt": "2023-06-28T14:39:54Z",
    "source": {
      "name": "20 Minutos",
      "url": "https://www.20minutos.es"
    }
  },
  {
    "title": "las claves de una 'Chichoneta' muy baja ante Paranaense | FUTBOL-INTERNACIONAL | DEPOR",
    "description": "Alianza Lima | Ausencias, pasividad y decepciones: las claves de una 'Chichoneta' muy baja ante Paranaense",
    "content": "Once diezmado por bajas\nSi bien no es comprobable, no cabe duda que presentar bajas de jugadores clave en el once titular resulta una desventaja en la previa del partido. Si bien Alianza Lima ya venía jugando varios partidos sin los lesionados Andrés... [2992 chars]",
    "url": "https://depor.com/futbol-internacional/copa-libertadores/alianza-lima-ausencias-pasividad-y-decepciones-las-claves-de-un-alianza-lima-muy-bajo-ante-paranaense-rmmd-emcc-noticia/",
    "image": "https://depor.com/resizer/WOSe9mZcCsdX0S9j_UClMnNxGGQ=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BNOLO4LJ3RHBTIAETVMEV7SL3E.jpg",
    "publishedAt": "2023-06-28T14:22:26Z",
    "source": {
      "name": "Diario Depor",
      "url": "https://depor.com"
    }
  },
  {
    "title": "Alianza Lima vs. Universitario: ¿qué resultados se necesita para un clásico en Copa Sudamericana?",
    "description": "¡Es posible! Un clásico del fútbol peruano podría darse en un torneo internacional conmebol, conoce los escenarios que deberían darse para un partido ente cremas y blanquiazules.",
    "content": "Alianza Lima y Universitario de Deportes jugarán la útima fecha de la Copa Libertadores y Copa Sudamericana, respectivamente, y lucharán para mantener su participación internacional. Pese a que los compadres disputan distintas competiciones, podrían ... [2984 chars]",
    "url": "https://larepublica.pe/deportes/2023/06/27/alianza-lima-vs-universitario-de-deportes-que-resultados-se-necesita-para-un-clasico-peruano-en-copa-sudamericana-2023-2119635",
    "image": "https://imgmedia.larepublica.pe/1200x630/larepublica/original/2023/06/27/649b137e1016db0ae0027259.jpg",
    "publishedAt": "2023-06-27T16:51:37Z",
    "source": {
      "name": "LaRepública.pe",
      "url": "https://larepublica.pe"
    }
  },
  {
    "title": "Ver VTV y Fútbol Libre, Uruguay vs. Nicaragua EN VIVO por amistoso",
    "description": "Uruguay vs. Nicaragua juegan EN VIVO y EN DIRECTO este miércoles 14 de junio (6:30 p.m. hora peruana) en el Centenario, de Montevideo, vía VTV y AUF TV, por un amistoso internacional FIFA.",
    "content": "En el Estadio Centenario, de Montevideo, Uruguay vs. Nicaragua se ven las caras EN VIVO / EN DIRECTO / ONLINE TV / GRATIS por un amistoso internacional FIFA. El partido, que será el debut de Marcelo Bielsa al mando de los ‘charrúas’, arrancará a las ... [2421 chars]",
    "url": "https://depor.com/futbol-internacional/resto-del-mundo/uruguay-vs-nicaragua-en-vivo-via-vtv-fox-sports-auf-tv-y-futbol-libre-por-amistoso-internacional-ver-transmision-online-link-tv-y-a-que-hora-juegan-formaciones-deportes-noticia/",
    "image": "https://depor.com/resizer/ttZP_he5iQ44BKYvYRHW2CLK2yc=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/W7N4ZSCC3VEK5NC7HT27EMFUB4.jpg",
    "publishedAt": "2023-06-14T20:20:05Z",
    "source": {
      "name": "Diario Depor",
      "url": "https://depor.com"
    }
  },
  {
    "title": "“Pasé cuatro años en prisión” | Deportes | FUTBOL-INTERNACIONAL | DEPOR",
    "description": "El defensor francés del Lecce italiano ha recordado los duros momentos que vivió en el Barcelona durante los últimos años. No se imagina volviendo al Camp Nou.",
    "content": "Samuel Umtiti llegó al FC Barcelona en el mercado de fichajes de verano de 2016 y al poco tiempo se convirtió en uno de los mejores del mundo en su posición. Las primeras temporadas del defensor francés fueron tan buenas que hasta llegó a ser compara... [1845 chars]",
    "url": "https://depor.com/futbol-internacional/espana/fc-barcelona-umtiti-pase-cuatro-anos-en-prision-deportes-noticia/",
    "image": "https://depor.com/resizer/OmLfXF01ogqk7JUtRpaNglyj-zg=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/RBA52ICUONGD3IIVWWADB7BSPI.jpg",
    "publishedAt": "2023-05-26T12:22:22Z",
    "source": {
      "name": "Diario Depor",
      "url": "https://depor.com"
    }
  },
  {
    "title": "Olga García, la magia del fútbol trasladada a los ‘esports’",
    "description": "La delantera del DUX Logroño, ex del Barça o Atlético e internacional con España, Olga García, atiende a AS y repasa su trayectoria vital.",
    "content": "El fútbol vive de historias. En España, durante mucho tiempo, una generación ha y sigue asombrando al mundo. Esa es la que se encuentra o procede de la cantera del FC Barcelona. Muchos conocen el nombre de Alexia Putellas, Vicky Losada… y dentro de e... [7497 chars]",
    "url": "https://as.com/futbol/femenino/olga-garcia-la-magia-del-futbol-trasladada-a-los-esports-n/",
    "image": "https://img.asmedia.epimg.net/resizer/Iglr-6DoTpR3Wj1RZrw4pSmMZcw=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YS5OU3CASREPHH55MWYZPIADT4.jpg",
    "publishedAt": "2023-05-13T11:15:37Z",
    "source": {
      "name": "AS ",
      "url": "https://as.com"
    }
  },
  {
    "title": "La insólita reacción de Federico Salazar con Óscar del Portal tras derrota de Alianza Lima",
    "description": "El conductor de América TV, Federico Salazar, manifestó en vivo que Óscar del Portal no hablará del fútbol internacional tras derrota de Alianza Lima.",
    "content": "Alianza Lima no pudo celebrar en Brasil en su duelo ante Atlético Mineiro por la Copa Libertadores. Los blanquiazules se mantienen en los primeros lugares de la tabla, por lo que ahora darán todo de sí para sacar resultados positivos en los siguiente... [1137 chars]",
    "url": "https://libero.pe/futbol-peruano/alianza-lima/2023/05/04/insolita-reaccion-federico-salazar-oscar-portal-derrota-alianza-lima-copa-libertadores-america-tv-video-388244",
    "image": "https://libero.cronosmedia.glr.pe/original/2023/05/04/6453cb6cbc8d32328c22c4d8.jpg",
    "publishedAt": "2023-05-04T15:23:23Z",
    "source": {
      "name": "Libero.pe",
      "url": "https://libero.pe"
    }
  },
  {
    "title": "Xavi dice sí a la segunda venta | Deportes | FUTBOL-INTERNACIONAL | DEPOR",
    "description": "Según el diario Sport, el entrenador del Barcelona está de acuerdo con la salida de un volante que no entra en sus planes de cara a la temporada 2023-24.",
    "content": "Con el título de LaLiga Santander prácticamente en el bolsillo, y tras haber resignado las otras competencias de la temporada, Xavi Hernández ya empezó a pensar en la campaña 2023-24. Más allá de la vuelta de Lionel Messi, el entrenador del FC Barcel... [2206 chars]",
    "url": "https://depor.com/futbol-internacional/espana/fc-barcelona-llego-gratis-y-se-ira-por-un-dineral-xavi-dice-si-a-la-segunda-venta-deportes-noticia/",
    "image": "https://depor.com/resizer/cE3dHcoUM1G_tBFvkP5PUJW-DlU=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/5NTDA5LQLBCLLJWSVXL5BNPPIA.jpg",
    "publishedAt": "2023-04-28T20:14:56Z",
    "source": {
      "name": "Diario Depor",
      "url": "https://depor.com"
    }
  },
  {
    "title": "\"Este tío no para de cagarla\" | Deportes | FUTBOL-INTERNACIONAL | DEPOR",
    "description": "El defensor argentino Marcos Rojo recordó su pasó por el Manchester United y el día que le reclamó al entrenador Ole Gunnar Solskjaer por preferir al central inglés. Y así le respondió.",
    "content": "Harry Maguire sigue en boca de todos. Luego de haber sido el villano en la eliminatoria que el Manchester United perdió ante Sevilla, por los cuartos de final de la UEFA Europa League, el defensor inglés continúa siendo el protagonista de las noticia... [2110 chars]",
    "url": "https://depor.com/futbol-internacional/inglaterra/manchester-united-el-reclamo-de-rojo-por-maguire-este-tio-no-para-de-cagarla-deportes-noticia/",
    "image": "https://depor.com/resizer/Tie9jkMT9WLqo7_wF5FOe05hf5c=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/JLXJOVLA3ZDWTL2M4LL2U2FQCQ.jpg",
    "publishedAt": "2023-04-28T14:41:52Z",
    "source": {
      "name": "Diario Depor",
      "url": "https://depor.com"
    }
  },
  {
    "title": "¿por qué puede con todo? | Liga 1 | RMMD EMCC | FUTBOL-PERUANO | DEPOR",
    "description": "A los blanquiazules hoy les está yendo bien tanto a nivel nacional como internacional, pero para lograrlo han tenido que superar una serie de adversidades. ¿Cuáles?",
    "content": "“Todo lo que estamos viviendo no es fácil. No es fácil ir y ganar todos los partidos como lo hemos estado haciendo. Alianza siempre tiene mucho en contra. Pero no importa. Hay cosas en las que nosotros no podemos hacer nada. Solo queda seguir trabaja... [7874 chars]",
    "url": "https://depor.com/futbol-peruano/descentralizado/alianza-lima-derechos-de-tv-walkover-lesiones-y-lios-del-fondo-por-que-puede-con-todo-liga-1-rmmd-emcc-noticia/",
    "image": "https://depor.com/resizer/zKICqhgmF04cCpAtNTebAdNtFzM=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/QVEPOZAOBNDUHHIV5WENH7AJV4.jpg",
    "publishedAt": "2023-04-27T03:01:17Z",
    "source": {
      "name": "Diario Depor",
      "url": "https://depor.com"
    }
  }
]

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
 /*  
  const news = useSelector((state) => state.news.news);

  console.log('las news',news)

  const dispatch = useDispatch();
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % news.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [news.length]);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]); */

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
