import New from "../New/New";
import React, { useState, useEffect } from "react";
import style from "./News.module.css";
const news = [
  {
    id: 1,
    title:
      "El futuro de Lionel Messi en la Selección Argentina y una frase que ilusiona",
    subtitle:
      'Leo, entre vacaciones, despedidas y Miami, pero también la Selección "Empieza un ciclo nuevo, se vienen Eliminatorias y Copa América".',
    body: [
      {
        one: '"En principio no, iré viendo...". La frase rebotó desde China hasta Argentina y también al resto del mundo. Si bien no es ninguna bomba, porque no es la primera vez que lo dice, que lo repita Lionel Messi mueve montañas, métricas e ilusiones. Su declaración en la previa al amistoso ante Australia tiene mucho de lógica: falta mucho para la Copa del 2026 y llega en este recambio de pasar de las grandes ligas de Europa a probar en un torneo como la MLS. Más allá de eso, Leo está: clavó gol, récord y habló de su futuro en la Selección.',
        two: '"Lo que dije es algo normal, por edad y por tiempo es difícil que se dé, pero como dije, disfruto el momento, el día a día, el estar acá", soltó Messi desde el mismo césped del Workers Stadium de Pekín, después del buen 2-0 a Australia, con un golazo suyo a los 79 segundos de partido (otro récord para su lista). Y ahí, al toque, confirmó que hay Leo con la 10 de Argentina para un rato más: "Ahora vienen partidos de Eliminatorias y después la Copa América, es ir muy lejos pensar en el Mundial cuando recién terminamos uno".',
        three:
          "Lo que el capitán dijo al pasar, pero que no pasa desapercibido, es que en su horizonte siguen más capítulos con la Selección, y todo por los puntos, nada de amistosos. Las Eliminatorias arrancan en septiembre de este año con dos partidos: Argentina recibe a Ecuador (sería el jueves 7) y después visita a Bolivia. En el 2023 habrá otras dos dobles fechas, en octubre (local vs. Paraguay y visitante vs. Perú) y noviembre (local vs. Uruguay y visitante vs. Brasil). La Copa América, en tanto, se jugará desde el 14 de junio al 14 de julio del 2024 en Estados Unidos.",
        four: 'Según las palabras del propio Messi, estará un tiempo más en la Selección. ¿Cuánto? Eso lo irá viendo día a día. Por sus dichos, un año más al menos, porque habló -dos veces- de la Copa América. "Pensar en lo que se viene, empieza un ciclo nuevo, se vienen partidos de Eliminatorias, una Copa América dentro de poquito, más allá de lo que conseguimos que fue algo increíble y hermosos que va a quedar para siempre, lamentablemente no nos podemos quedar con eso. Esto sigue y hay que pensar en lo que viene y disfrutarlo cuando nos toca disfrutarlo", agregó desde Pekín.',
      },
    ],
    images: {
      one: "https://www.ole.com.ar/images/2023/06/16/3mGjccmBs_1290x760__1.jpg",
      two: "https://www.ole.com.ar/images/2023/06/16/UYlYmS_1r_720x0__1.jpg",
    },
  },
  {
    id: 2,
    title:
      "Choque de trenes en Europa: elegidos los onces ideales... ¿cuál es el más potente?",
    subtitle:
      "Los mejores de la temporada de las principales competiciones del continente",
    body: [
      {
        one: "Con el final de los campeonatos ligueros de toda Europa aparece siempre la difícil tarea de seleccionar a los mejores de la temporada. Entre tanta estrella se hace muy complicado escoger sólo a unos pocos que pasarán a la historia como representantes del equipo ideal de la 2022/23.",
        two: "Unos equipazos plagados de grandes jugadores que acaban la temporada con sobresaliente o matrícula de honor. Descubre los onces elegidos de las cinco mejores ligas del continente. ¿Cuál es el más potente?",
        three:
          "Haaland y su Manchester City lidera este equipo en el que también destacan futbolistas de un Arsenal que murió en la orilla y viejos conocidos del fútbol español como Trippier o Casemiro.",
        four: "El súper Nápoles ha arrasado en la Serie A y también lo hace en el once ideal de la competición italiano. Finalmente el MVP racayó en el georgiano Kvaratskhelia en dura pugna con su compañero Osimhen que se lleva el galardón de capocannoniere.",
        five: "Dortmund y Bayern se jugaron la Bundesliga en una última jornada de infarto que acabó con alegría de los Múnich. Sin embargo, el temporadón increíble de Bellingham tuvo premio al ser elegido MVP del campeonato alemán.",
        six: "Otro PSG del PSG en la Ligue 1 con un claro protagonista: Mbappé. El francés terminó como máximo goleador y MVP de la liga francesa que se le empieza a quedar muy pequeña. Leo Messi también fue elegido como miembro de este equipo en su última temporada en París. (Once ideal oficial)",
        seven:
          "El Barça no tuvo rival en LaLiga Santander donde acabó llevándose el Pichichi y el Zamora. Mención especial para el guardameta Ter Stegen que acarició el récord histórico de porterías a cero del campeonato español",
      },
    ],
    images: {
      one: "https://phantom-marca.unidadeditorial.es/08128286af431f21ae451e757c0e9ae1/resize/660/f/webp/assets/multimedia/imagenes/2023/06/16/16869207439207.jpg",
      two: "https://phantom-marca.unidadeditorial.es/1b6237acaaaebabbbc1d70e4b4377498/resize/990/f/webp/assets/multimedia/imagenes/2017/04/25/14931222987133.jpg",
      three:
        "https://phantom-marca.unidadeditorial.es/85d4baf91049df1cd6ea6eb11a2fab2d/resize/990/f/webp/assets/multimedia/imagenes/2023/06/16/16869174605885.jpg",
      four: "https://phantom-marca.unidadeditorial.es/e62908ffbbe10e58d62269a56be07536/resize/990/f/webp/assets/multimedia/imagenes/2017/04/24/14930264681363.jpg",
      five: "https://phantom-marca.unidadeditorial.es/08effe7b239c8a22ce0649278dabb693/resize/990/f/webp/assets/multimedia/imagenes/2023/06/16/16869174623700.jpg",
      six: "https://phantom-marca.unidadeditorial.es/63d2409af00c1d73ad7d2dee05dfecca/resize/990/f/webp/assets/multimedia/imagenes/2017/05/02/14937400733002.jpg",
      seven:
        "https://phantom-marca.unidadeditorial.es/eb7baba0369b6e35000016360cc04a96/resize/990/f/webp/assets/multimedia/imagenes/2023/06/16/16869174578740.jpg",
      eight:
        "https://phantom-marca.unidadeditorial.es/59402a87c6d39c770e2fd99eb08bb522/resize/990/f/webp/assets/multimedia/imagenes/2017/04/24/14930287567654.jpg",
      nine: "https://phantom-marca.unidadeditorial.es/3a46177a0fb6448af680330ca8ce1d4e/resize/990/f/webp/assets/multimedia/imagenes/2023/06/16/16869174593859.jpg",
      ten: "https://phantom-marca.unidadeditorial.es/a09763e21adf130f6be4f2282c7d3f5b/resize/990/f/webp/assets/multimedia/imagenes/2019/09/13/15683716632166.jpg",
      eleven:
        "https://phantom-marca.unidadeditorial.es/0eadf3a9e2278efc86950891ca4c12f9/resize/990/f/webp/assets/multimedia/imagenes/2023/06/05/16859658538714.jpg",
    },
  },
  {
    id: 3,
    title:
      'Zidane avala el fichaje de Gallardo por el Marsella: "Es algo muy bueno"',
    subtitle:
      'Zizou, sin embargo, no dio pistas sobre su regreso: "No sé cuándo, pero pasará"',
    body: [
      {
        one: 'Aún no es oficial, pero el rumor se está extendiendo como la pólvora: Marcelo Gallardo será el nuevo entrenador del Olympique Marsella.Tan extendido está que hasta el mismísimo Zinédine Zidane, que nunca ha escondido su devoción por el "OM", ha dado su "OK" al fichaje del exentrenador de River Plate',
        two: '"Es algo muy bueno", ha declarado "ZZ" cuando le han preguntado en un acto por el hecho de que "El Muñeco" pueda suceder a Igor Tudor en el banquillo del Vélodrome.',
        three:
          'Zidane compareció en la "Feria del fútbol" de Aix-en-Provence, a media hora de Marsella, y el público le rogó que fuera él quien se hiciera cargo del Olympique Marsella',
        p4: 'El exentrenador del Real Madrid, sin embargo, no dio pistas sobre su futuro en los banquillos. "No sé cuándo, pero llegará", aseguró en referencia a su próximo destino como técnico.',
      },
    ],
    images: {
      one: "https://phantom-marca.unidadeditorial.es/e379f7bb19408e7edccea874d5ff1c0f/resize/660/f/webp/assets/multimedia/imagenes/2023/06/16/16869423727725.jpg",
    },
  },
];

const News = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentNewsIndex + 1) % news.length;
      setCurrentNewsIndex(nextIndex);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentNewsIndex]);

  return (
    <div className={style.container}>
      <div className={style.newsTitle}>
        <h4>NOTICIAS DE HOY</h4>
      </div>
      {news.map((item, index) => (
        <div
          key={item.id}
          style={{ display: index === currentNewsIndex ? "block" : "none" }}
        >
          <New title={item.title} image={item.images.one} />
        </div>
      ))}
    </div>
  );
};

export default News;
