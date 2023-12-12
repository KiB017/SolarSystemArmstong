const contenedor = document.querySelector(".container");
const blur = document.querySelector(".blur");
const enterBtn = document.querySelector(".enterBtn");
const welcomeMsg = document.querySelector(".welcomeMsg");

const botonPregunta = document.getElementById('botonPregunta');
const modalSeleccion = document.getElementById('modalSeleccion');
const modal = document.getElementById('miModal');
const btnCerrarModal = document.getElementById('cerrarModal');
const preguntaElement = document.getElementById('pregunta');
const opcionesElement = document.getElementById('opciones');

const planetas = {
    mercury: {
        name: "Mercurio",
        radio: "2,439.7 km",
        temperature: "máxima 465°C (870° F) y mínima -184°C (-300° F)",
        distance: "0.39 UA (58 millones km)",
        translation: "88 días",
        rotation: "59d 0h 0m",
        gravity: "3.7 m/s²",
        composition: "Principalmente rocoso y metálico",
        summary: "Mercurio es el planeta más cercano al Sol en nuestro sistema solar y es un cuerpo rocoso y desértico. Es el planeta más pequeño y tiene una órbita elíptica alrededor del Sol. Con temperaturas extremas que oscilan entre muy altas durante el día y muy bajas durante la noche debido a su falta significativa de atmósfera para retener el calor, Mercurio presenta un ambiente inhóspito. Su superficie está marcada por grandes variaciones topográficas, como cráteres, llanuras y escarpadas montañas. Aunque se conocen pocos detalles sobre este planeta debido a su proximidad al Sol, diversas misiones espaciales han proporcionado información valiosa para entender mejor sus características y composición.",
        imgSource: "Images/mercury.png"
    },

    venus: {
        name: "Venus",
        radio: "6,051.8 km",
        temperature: "media 449°C (850° F)",
        distance: "0.722 UA( 108.2 millones km)",
        translation: "225 días",
        rotation: "243d 0h 0m",
        gravity: "8.87 m/s²",
        composition: "Atmósfera densa de dióxido de carbono",
        summary: "Venus es el segundo planeta más cercano al Sol y es similar en tamaño y composición a la Tierra, aunque difiere significativamente en condiciones atmosféricas. Venus tiene una atmósfera densa y opaca compuesta principalmente de dióxido de carbono, con gruesas capas de nubes de ácido sulfúrico. Estas condiciones atmosféricas generan un efecto invernadero descontrolado, resultando en temperaturas superficiales extremadamente altas, lo que hace de Venus el planeta más caliente de nuestro sistema solar. La superficie está marcada por llanuras volcánicas, montañas y grandes cañones. A pesar de su apariencia hostil, Venus ha sido objeto de estudio por diversas misiones espaciales para comprender mejor los procesos atmosféricos y geológicos en este planeta.",
        imgSource: "Images/venus.png"
    },

    earth: {
        name: "Tierra",
        radio: "Mediano",
        temperature: "media 7.2°C (45° F)",
        distance: "1 UA (149.6 millones km)",
        translation: "365 dias",
        rotation: "24h",
        gravity: "9.807 m/s²",
        composition: "Rocoso con una atmósfera rica en oxígeno y nitrógeno",
        summary: "La Tierra es el tercer planeta del sistema solar y es el único conocido por albergar vida. Es un planeta rocoso con una atmósfera que contiene oxígeno, lo que permite el sustento de una diversidad de formas de vida. Su superficie está cubierta en gran medida por océanos y continentes, y su clima varía desde polos fríos hasta ecuatoriales cálidos. La Tierra tiene una luna que orbita a su alrededor y está influenciada por un campo magnético que protege la vida al desviar la radiación solar y cósmica. La presencia de agua líquida y condiciones atmosféricas adecuadas han permitido el desarrollo y evolución de diversas formas de vida, incluyendo plantas, animales y seres humanos.",
        imgSource: "Images/earth.png"
    },

    mars: {
        name: "Marte",
        radio: "3,389.5 km",
        temperature: "máxima 36°C (98° F) y mínima -123°C (-190° F)",
        distance: "1.52 UA (227.9 millones km)",
        translation: " 687 días",
        rotation: "1d 0h 37m",
        gravity: "3.71 m/s²",
        composition: "Principalmente rocoso con una fina atmósfera",
        summary: "Marte es el cuarto planeta del sistema solar, conocido como 'el Planeta Rojo' debido a su característico color. Es un planeta rocoso con una fina atmósfera compuesta en su mayoría de dióxido de carbono. Marte presenta notables características geológicas, como el volcán más grande del sistema solar, el Monte Olimpo, y el cañón más extenso, Valles Marineris. A lo largo de los años, ha sido objeto de interés científico debido a la posibilidad de que haya existido agua en estado líquido en su superficie en el pasado, lo que ha llevado a la exploración mediante misiones espaciales. La búsqueda de signos de vida pasada o presente en Marte continúa siendo un objetivo clave para la investigación espacial.",
        imgSource: "Images/mars.png"
    },

    jupiter: {
        name: "Júpiter",
        radio: "69,911 km",
        temperature: "media -153°C (-244° F)",
        distance: "5 UA (778.5 millones km)",
        translation: "11.86 años",
        rotation: "0d 9h 56m",
        gravity: "24.79 m/s²",
        composition: "Compuesto principalmente de hidrógeno y helio",
        summary: "Júpiter es el quinto planeta del sistema solar y es el gigante gaseoso más grande. Posee una masa que supera a la de todos los demás planetas combinados y está compuesto principalmente de hidrógeno y helio. Júpiter carece de una superficie sólida y presenta una atmósfera densa con características notables como la Gran Mancha Roja, una inmensa tormenta que ha persistido durante siglos. También tiene anillos, aunque son menos notorios que los de Saturno. Júpiter tiene una intensa actividad magnética y es el planeta más brillante en el cielo nocturno después de Venus. Su gran tamaño y masa influyen en la dinámica orbital del sistema solar, desempeñando un papel crucial en la protección de la Tierra de impactos cometarios y asteroides.",
        imgSource: "Images/jupiter.png"
    },

    saturn: {
        name: "Saturno",
        radio: "58,232 km",
        temperature: "media -184°C (-300° F)",
        distance: "9.510UA (1.434 miles de millones km)",
        translation: "29.5 años",
        rotation: "0d 10h 34m",
        gravity: "10.44 m/s²",
        composition: "Anillos de partículas de hielo y roca",
        summary: "Saturno es el sexto planeta del sistema solar y es conocido por sus impresionantes anillos, que son uno de los rasgos más distintivos del planeta. Es un gigante gaseoso, compuesto principalmente de hidrógeno y helio, y carece de una superficie sólida definida. Los anillos de Saturno están compuestos por fragmentos de hielo y roca, distribuidos en numerosos anillos concéntricos alrededor del planeta. Además de sus anillos, Saturno tiene una atmósfera con patrones de nubes y tormentas, incluido un vórtice en su polo norte. Es el segundo planeta más grande del sistema solar después de Júpiter y es visible a simple vista en el cielo nocturno. Saturno ha sido objeto de estudio mediante misiones espaciales, como la sonda Cassini, que proporcionaron datos valiosos sobre sus anillos y su atmósfera.",
        imgSource: "Images/saturn.png"
    },

    uranus: {
        name: "Urano",
        radio: "25,362 km",
        temperature: "media -184°C (-300° F)",
        distance: "20UA (2.871 miles de millones km)",
        translation: "84 años",
        rotation: "0d 17h 14m",
        gravity: "8.87 m/s²",
        composition: "Compuesto principalmente de hidrógeno, helio y metano",
        summary: "Urano es el séptimo planeta del sistema solar y es un gigante gaseoso, similar en composición a Júpiter y Saturno. Es único debido a su inclinación extrema en el eje de rotación, lo que provoca que gire casi de lado en comparación con los otros planetas. Urano está compuesto principalmente de hidrógeno y helio, y carece de una superficie sólida definida. Su atmósfera muestra características como nubes y patrones climáticos, aunque su estudio es más desafiante que el de planetas más cercanos debido a la distancia y la falta de misiones espaciales dedicadas. Urano tiene anillos, aunque son menos notorios que los de Júpiter y Saturno, y también cuenta con un sistema de lunas, siendo la más grande Titania.",
        imgSource: "Images/uranus.png"
    },

    neptune: {
        name: "Neptuno",
        radio: "24,622 km",
        temperature: "-223°C (-370° F)",
        distance: "30.1UA (4.495 miles de millones km)",
        translation: "165 años",
        rotation: "0d 16h 6m",
        gravity: "11.15 m/s²",
        composition: "Compuesto principalmente de hidrógeno, helio y metano",
        summary: "Neptuno es el octavo y último planeta del sistema solar, ubicado más allá de Urano. Es un gigante gaseoso compuesto principalmente de hidrógeno y helio, con una atmósfera que muestra patrones climáticos y vientos extremadamente veloces. Su color azul intenso se debe a la presencia de metano en la atmósfera, que absorbe la luz roja. Neptuno tiene anillos, aunque son débiles y difíciles de observar desde la Tierra. Neptuno cuenta con un sistema de lunas, siendo Tritón la más grande. Tritón es peculiar porque orbita en dirección opuesta a la rotación del planeta, sugiriendo que pudo haber sido capturada por la gravedad de Neptuno en algún momento de su historia. Aunque Neptuno es el planeta más distante y frío del sistema solar, ha sido visitado solo por sondas espaciales, como la Voyager 2, que proporcionaron información valiosa sobre sus características y propiedades.",
        imgSource: "Images/neptune.png"
    },

    moon: {
        name: "Luna",
        radio: "1,737.4 km",
        temperature: "-184°C (-299.2° F)",
        distance: "384,400 km",
        translation: "27.32 días",
        rotation: "27.32 días",
        gravity: "1.62 m/s²",
        composition: "Rocoso con una fina capa de polvo y regolito",
        summary: "La Luna es el único satélite natural de la Tierra y es el quinto satélite más grande del sistema solar. Su tamaño relativo a la Tierra es considerablemente grande en comparación con otros satélites en el sistema solar. La Luna está en rotación síncrona con la Tierra, lo que significa que tarda aproximadamente 27.3 días en dar una vuelta completa sobre su propio eje y al mismo tiempo en completar una órbita alrededor de la Tierra. Esto resulta en que siempre muestra la misma cara hacia la Tierra. La Luna tiene una superficie cubierta de cráteres, montañas y mares lunares, aunque carece de una atmósfera significativa. Su influencia gravitatoria causa las mareas en la Tierra. La Luna ha sido un objeto de fascinación y estudio a lo largo de la historia, y las misiones espaciales han proporcionado datos valiosos sobre su composición y origen. Además, la Luna desempeña un papel importante en muchos aspectos de la vida en la Tierra, desde influir en las mareas hasta servir como referencia para calendarios y ciclos naturales.",
        imgSource: "Images/moon.png"
    },

    sun: {
        name: "Sol",
        radio: "696,340 Kilometros",
        temperature: "5,500 °C (9,932° F)",
        distance: "0",
        translation: "225 M de años ",
        rotation: "24 dias en el ecuador, 36 dias en los polos",
        gravity: "274 m/s²",
        composition: "71% de Hidrógeno, un 27% Helio, y un 2% de otros elementos más pesados",
        summary: "El Sol es una estrella ubicada en el centro del sistema solar, clasificada como una enana amarilla. Constituye la fuente primaria de energía para la vida en la Tierra mediante la fusión nuclear de hidrógeno en helio en su núcleo. Su masa es aproximadamente 333,000 veces la de la Tierra, y su diámetro es alrededor de 109 veces el de nuestro planeta. Emite luz y calor debido a la intensa actividad nuclear en su núcleo, generando un campo magnético que afecta a los planetas y otros cuerpos celestes en el sistema solar. La energía solar también desempeña un papel crucial en los fenómenos atmosféricos y climáticos de la Tierra",
        imgSource: "Images/sun.png"
    }
};

document.addEventListener("DOMContentLoaded", zoomFunction);
enterBtn.addEventListener("click", blurToggle);

function zoomFunction() {
  const contenedor = document.querySelector(".container");
  let zoomLevel = 1;

  function zoomIn() 
  {
      zoomLevel += 0.1;
      updateZoom();
  }

  function zoomOut() 
  {
      zoomLevel -= 0.1;
      updateZoom();
  }

  function updateZoom() 
  {
      zoomLevel = Math.min(Math.max(0.3, zoomLevel), 2);
      contenedor.style.transform = `scale(${zoomLevel})`;
  }

  document.querySelector(".botonZoomIn").addEventListener("click", zoomIn);
  document.querySelector(".botonZoomOut").addEventListener("click", zoomOut);

  contenedor.addEventListener("wheel", (evento) => {
      if (evento.deltaY < 0) {
          zoomIn();
      } else {
          zoomOut();
      }
  });

  let zoomInInterval;
  document.querySelector(".botonZoomIn").addEventListener("mousedown", () => {
      zoomIn();
      zoomInInterval = setInterval(zoomIn, 100);
  });

  document.querySelector(".botonZoomIn").addEventListener("mouseup", () => {
      clearInterval(zoomInInterval);
  });

  let zoomOutInterval;
  document.querySelector(".botonZoomOut").addEventListener("mousedown", () => {
      zoomOut();
      zoomOutInterval = setInterval(zoomOut, 100);
  });

  document.querySelector(".botonZoomOut").addEventListener("mouseup", () => {
      clearInterval(zoomOutInterval);
  });

  Object.keys(planetas).forEach(planetaKey => {
      const planeta = planetas[planetaKey];
      const planetaDiv = document.querySelector(`.${planetaKey}`);
      
      planetaDiv.addEventListener("click", () => {
          displayPlanetInfo(planeta);
      });

      // Agregar manejador de eventos de clic específico para la Luna
      if (planetaKey === "moon") {
          const moonDiv = document.querySelector('.moon');
          moonDiv.addEventListener('click', (event) => {
              event.stopPropagation(); // Evita que el clic se propague a elementos padres
              displayPlanetInfo(planetas.moon);
          });
      }
  });
}

function blurToggle()
{
    contenedor.classList.toggle('blur_activated');

    welcomeMsg.classList.toggle('inactive');
}

// Preguntas por planeta
const preguntasPorCategoria = {
  1: [
    { pregunta: '1. ¿Cuántos planetas Tierra pueden caber dentro del Sol?', opciones: ['A. 1', 'B. 10', 'C. 109', 'D. 100'], respuestaCorrecta: 'C. 109' },
    { pregunta: '2. ¿Cuántas capas ocupa en el interior del Sol?', opciones: ['A. 3 capas', 'B. 6 capas', 'C. 1 capa', 'D. 25 capas'], respuestaCorrecta: 'B. 6 capas' },
    { pregunta: '3. ¿Qué nos protege de las tormentas solares?', opciones:['A. El campo magnético','B. El campo atmosférico','C. El campo gravitatorio','D. El campo de Juan'], respuestaCorrecta: 'A. El campo magnético'},
    { pregunta: '4. La velocidad de la luz es de 300,000 kilómetros por segundo, por lo que la luz que irradia el Sol tarda ... en llegar a nuestro planeta', opciones:['A. 8 días','B. 8 horas','C. 8 segundos','D. 8 minutos'], respuestaCorrecta: 'D. 8 minutos'},
    { pregunta: '5. Los astrónomos predicen que el Sol llegará al final de su vida en ...', opciones:['A. 5 días','B. 5,000 años','C. 10,000 millones de años','D. 1,000,000,000 millones de años'], respuestaCorrecta: 'C. 10,000 millones de años'}, 
  ],
  2: [
    { pregunta: '1. El tamaño de Mercurio es considerado como el planeta más...', opciones: ['A. grande', 'B. chiquito', 'C. perfecto', 'D. dodecaedro'], respuestaCorrecta: 'B. chiquito' },
    { pregunta: '2. Mercurio es el planeta más cercano al sol,', opciones: ['A. por lo que es el planeta más propenso a ser absorbido por el Sol', 'B. Por lo que es el planeta más cálido del sistema solar', 'C. pero es el planeta más frío', 'D. pero no es realmente el más cálido'], respuestaCorrecta: 'D. pero no es realmente el más cálido' },
    { pregunta: '3. Mercurio solo tiene un amanecer cada ... de la Tierra', opciones:['A. 5 días','B. 400 semanas','C. 180 días','D. 2 minutos'], respuestaCorrecta: 'C. 180 días'},
    { pregunta: '4. Junto con Venus, la Tierra y Marte, Mercurio es uno de los planetas...', opciones:['A. gaseoso','B. rocosos','C. luminoso','D. Térmica'], respuestaCorrecta: 'B. rocosos'},
    { pregunta: '5. Si vivieras en Mercurio, tendrías una fiesta de cumpleaños cada', opciones:['A. 3 meses','B. 3 años','C. 3 décadas','D. 3 días'], respuestaCorrecta: 'A. 3 meses'},
  ],
  3: [
    { pregunta: '1. Venus gira ... de la Tierra', opciones: ['A. en la misma dirección','B. en dirección contraria','C. en cualquier dirección','D. ninguna de las anteriores'], respuestaCorrecta:'B. en dirección contraria'},
    { pregunta: '2. La atmósfera de Venus está llena de ...', opciones: ['A. Surfato','B. dióxido de carbono','C. Oro','D. Amoniaco'], respuestaCorrecta:'B. dióxido de carbono'},
    { pregunta: '3. ¿Qué pasaría si pusiéramos una barra de Plomo en Venus?', opciones: ['A. se volvería un charco','B. se expandiría hasta explotar','C. se volvería plastilina','D. se evaporaría hasta desaparecer'], respuestaCorrecta:'A. se volvería un charco'},
    { pregunta: '4. Venus es un planeta muy activo, lo que significa...', opciones: ['A. que tiene familia','B. que tiene llanuras y lomas','C. que tiene monte y cordilleras','D. que tiene montañas y volcanes'], respuestaCorrecta:'D. que tiene montañas y volcanes'},
    { pregunta: '5. Venus se conoce desde la antigüedad porque...', opciones: ['A. lo vieron a través de un satélite','B. se veía más cerca que en la actualidad','C. no es necesario usar telescopios avanzados para verlo','D. hicieron De Tin Marin y escogieron una estrella al azar'], respuestaCorrecta:'C. no es necesario usar telescopios avanzados para verlo'},
  ],
  4: [
    { pregunta: '1. El 70% de la Tierra está cubierto por:', opciones: ['A. Mercurio','B. Agua','C. Azufre','D. Lava'], respuestaCorrecta:'B. Agua'},
    { pregunta: '2. La Tierra es el ... planeta de nuestro sistema solar', opciones: ['A. Décimo','B. Segundo','C. Tercero','D. Cuarto'], respuestaCorrecta:'C. Tercero'},
    { pregunta: '3. La atmósfera de la Tierra está compuesta en gran parte por...', opciones: ['A. Nitrógeno','B. Helio','C. Asfalto','D. Propano'], respuestaCorrecta:'A. Nitrógeno'},
    { pregunta: '4. Nuestra atmósfera nos protege de meteoritos, ... antes de que lleguen a la superficie.', opciones: ['A. pateándolos','B. bloqueándolos','C. explotándolos','D. desintegrándolos'], respuestaCorrecta:'D. desintegrándolos'},
    { pregunta: '5. Un año en la Tierra dura 365,25 días. Ese 0,25 extra hace que cada 4 años tengamos que añadir un día más al calendario. Ese año se llama ...', opciones: ['A. año sideral','B. año del mono','C. año platónico','D. año bisiesto'], respuestaCorrecta:'D. año bisiesto'},
  ],  
  5: [
    { pregunta: '1. A pesar de que Marte es un planeta rocoso, como Mercurio, Venus y la Tierra, es un planeta...', opciones: ['A. desértico y caliente', 'B. líquido y frío', 'C. desértico y frío', 'D. líquido y caliente'], respuestaCorrecta:'C. desértico y frío'},
    { pregunta: '2. Por el hierro oxidado que tiene en el suelo, Marte es llamado...', opciones: ['A. "Naussica"', 'B. "Planeta rojo"', 'C. "Planeta de hierro"', 'D. "Mina de Hierro"'], respuestaCorrecta:'B. "Planeta rojo"'},
    { pregunta: '3. Marte tiene una atmósfera poco densa hecha de ...', opciones: ['A. hierro, surfato y oro', 'B. dióxido de carbono, nitrógeno y argón', 'C. hierro, oro y diamantes', 'D. oxígeno, níquel y amoníaco'], respuestaCorrecta:'B. dióxido de carbono, nitrógeno y argón'},
    { pregunta: '4. Hay signos de antiguas inundaciones en Marte, pero ahora ... existe principalmente en su polvo helado y sus nubes delgadas', opciones: ['A. el agua', 'B. la atmósfera', 'C. el clima', 'D. el gran cráter'], respuestaCorrecta:'A. el agua'},
    { pregunta: '5. Marte es el único planeta por donde han circulado ...', opciones: ['A. los astronautas', 'B. los rovers', 'C. los marcianos', 'D. los tripulantes del Apolo 11'], respuestaCorrecta:'B. los rovers'},
  ],  
  6: [
    { pregunta: '1. Júpiter es el planeta más ... de nuestro sistema solar', opciones: ['A. pequeño', 'B. gaseoso', 'C. grande', 'D. frío'], respuestaCorrecta:'C. grande'},
    { pregunta: '2. Júpiter es un planeta gigante hecho de ...', opciones: ['A. conjunto de estrellas que se chocan entre sí', 'B. Hielo', 'C. Roca', 'D. Gas'], respuestaCorrecta:'D. Gas'},
    { pregunta: '3. ¿Júpiter tiene anillos?', opciones: ['A. ¿Qué es eso?', 'B. no, para nada', 'C. sí, se ven a plena vista', 'D. sí, pero son muy difíciles de ver'], respuestaCorrecta:'D. sí, pero son muy difíciles de ver'},
    { pregunta: '4. ¿Cuántas lunas tiene Júpiter?', opciones: ['A. 50 lunas', 'B. 100 lunas', 'C. 90 lunas', 'D. 80 lunas'], respuestaCorrecta:'D. 80 lunas'},
    { pregunta: '5. La Gran Mancha Roja es ...', opciones: ['A. una Tormenta', 'B. un Huracán', 'C. un Cráter', 'D. una mancha'], respuestaCorrecta:'A. una Tormenta'},
  ],  
  7: [
    { pregunta: '1. Saturno no es el único planeta que tiene anillos', opciones: ['A. Verdadero', 'B. Falso'], respuestaCorrecta:'A. Verdadero'},
    { pregunta: '2. Los anillos están compuestos de ...', opciones: ['A. aros hechos de hielo y roca', 'B. aros hechos de fuego y pequeñas piedras', 'C. aros hechos de lunas', 'D. aros hechos de sal y zinc'], respuestaCorrecta:'A. aros hechos de hielo y roca'},
    { pregunta: '3. Saturno es una pelota hecha de ...', opciones: ['A. hierro y hielo', 'B. hidrógeno y helio', 'C. nitrógeno y níquel', 'D. zinc y oxígeno'], respuestaCorrecta:'B. hidrógeno y helio'},
    { pregunta: '4. Saturno cuenta con un precioso grupo de ... anillos separados por espacio entre ellos', opciones: ['A. 6', 'B. 7', 'C. 5', 'D. 8'], respuestaCorrecta:'B. 7'},
    { pregunta: '5. Saturno, aunque no lo parezca, tiene ... lunas', opciones: ['A. 344', 'B. 145', 'C. 245', 'D. 144'], respuestaCorrecta:'B. 145'},
  ],  
  8: [
    { pregunta: '1. Urano está compuesto de ...', opciones: ['A. agua, nitrógeno y helio', 'B. dióxido de carbono, agua y metales', 'C. mercurio, metano y azufre', 'D. agua, metano y amoníaco'], respuestaCorrecta:'D. agua, metano y amoníaco'},
    { pregunta: '2. Como Júpiter y Saturno, la atmósfera de Urano está hecha de ...', opciones: ['A. helio y oxígeno', 'B. hidrógeno y helio', 'C. fósforo y ceniza', 'D. sodio y magnesio'], respuestaCorrecta:'B. hidrógeno y helio'},
    { pregunta: '3. El ... es lo que le da a Urano el color azul', opciones: ['A. helio', 'B. metano', 'C. amoníaco', 'D. agua'], respuestaCorrecta:'B. metano'},
    { pregunta: '4. El único satélite que pude llegar a visitar fue ...', opciones: ['A. Voyager 2', 'B. Webster', 'C. Voyager 1', 'D. Apollo 10'], respuestaCorrecta:'A. Voyager 2'},
    { pregunta: '5. Como Venus, Urano rota en dirección opuesta a la de la mayoría de los otros planetas, pero ...', opciones: ['A. rota de lado', 'B. sus anillos rotan en la misma dirección de la Tierra', 'C. sus anillos rotan del lado contrario a Urano', 'D. Urano no puede rotar de lado'], respuestaCorrecta:'A. rota de lado'},
  ],  
  9: [
    { pregunta: '1. Neptuno es muy parecido a Urano. Está compuesto de una espesa mezcla de agua, amoníaco y metano sobre un centro sólido del tamaño de la ...', opciones: ['A. Venus', 'B. Tierra', 'C. Marte', 'D. Júpiter'], respuestaCorrecta:'B. Tierra'},
    { pregunta: '2. Un año en Neptuno es equivalente a ... de la Tierra', opciones: ['A. 300 años', 'B. 150 años', 'C. 165 años', 'D. 50 años'], respuestaCorrecta:'C. 165 años'},
    { pregunta: '3. Neptuno fue descubierto en ... por Urbain Le Verrier, John Couch Adams y Johann Galle.', opciones: ['A. 1783', 'B. 1969', 'C. 2009', 'D. 1846'], respuestaCorrecta:'D. 1846'},
    { pregunta: '4. Neptuno es el ... planeta del sistema solar', opciones: ['A. octavo', 'B. noveno', 'C. séptimo', 'D. quinto'], respuestaCorrecta:'A. octavo'},
    { pregunta: '5. La atmósfera de Neptuno está compuesta de ...', opciones: ['A. hidrógeno, helio y metano', 'B. calcio, titanio y tecnecio', 'C. arsénico y silicio', 'D. metano y flúor'], respuestaCorrecta:'A. hidrógeno, helio y metano'},
  ]    
};

  // Función para mostrar el modal de selección
function mostrarModalSeleccion() 
{
  modalSeleccion.style.display = 'block';
}
  
  // Función para mostrar preguntas según la categoría seleccionada
function mostrarPreguntas(categoria) {
  modalSeleccion.style.display = 'none';
  const preguntas = preguntasPorCategoria[categoria];
  mostrarSiguientePregunta(preguntas, 0);
  modal.style.display = 'block';
}
  
  // Índice para rastrear la pregunta actual
let preguntaActual = 0;
  
  // Función para mostrar la siguiente pregunta
function mostrarSiguientePregunta(preguntas, index) {
  if (index < preguntas.length) {
    const pregunta = preguntas[index];
    preguntaElement.textContent = pregunta.pregunta;

    // Limpia las opciones anteriores
    opcionesElement.innerHTML = '';

    // Crea botones para las opciones
    pregunta.opciones.forEach((opcion, opcionIndex) => {
      const botonOpcion = document.createElement('button');
      botonOpcion.textContent = opcion;
      botonOpcion.addEventListener('click', () => verificarRespuesta(opcion, pregunta.respuestaCorrecta, preguntas, index + 1));
      opcionesElement.appendChild(botonOpcion);
    });
  } else {
    // Si ya se han mostrado todas las preguntas, cierra el modal
    modal.style.display = 'none';
  }
}
  
  // Función para verificar la respuesta
function verificarRespuesta(respuesta, respuestaCorrecta, preguntas, index) {
  if (respuesta === respuestaCorrecta) {
    alert('¡Respuesta correcta!');
  } else {
    alert('Respuesta incorrecta. ¡Inténtalo de nuevo!');
  }

  // Muestra la siguiente pregunta
  mostrarSiguientePregunta(preguntas, index);
}
  
  // Mostrar el modal de selección al hacer clic en el botón de pregunta
botonPregunta.addEventListener('click', mostrarModalSeleccion);
  
// Cerrar el modal al hacer clic en el botón de cerrar
btnCerrarModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

function displayPlanetInfo(planeta) {
    const modalContent = document.getElementById("modalContent");
    document.getElementById("planetName").textContent = planeta.name;
    document.getElementById("planetRadio").textContent = "Radio: " + planeta.radio;
    document.getElementById("planetTemperature").textContent = "Temperatura: " + planeta.temperature;
    document.getElementById("planetDistance").textContent = "Distancia al sol: " + planeta.distance;
    document.getElementById("planetComposition").textContent = "Composición: " + planeta.composition;
    document.getElementById("planetRotation").textContent = "Rotación: " + planeta.rotation;
    document.getElementById("planetTranslation").textContent = "Traslación: " + planeta.translation;
    document.getElementById("planetGravity").textContent = "Gravedad: " + planeta.gravity;
    document.getElementById("planetSummary").textContent = "" + planeta.summary;

    document.getElementById("planetImg").src = planeta.imgSource;

    const modal = document.getElementById("myModal");
    modal.style.display = "flex";

    // Cierra el modal al hacer clic fuera de él
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
  };

  // Manejar cambios de pantalla completa
  const planetImg = document.getElementById('planetImg');

  document.addEventListener('fullscreenchange', function () {
    // Saliendo de pantalla completa
    planetImg.style.width = '400px';
    modalContent.style.width = '400px';
  });
}