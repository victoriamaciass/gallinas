/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Check, 
  ChevronRight, 
  ShieldCheck, 
  BookOpen, 
  Star, 
  Clock, 
  Heart, 
  Leaf, 
  Home, 
  Egg, 
  AlertCircle,
  ArrowRight
} from "lucide-react";

const SeccionInsignia = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-widest uppercase border rounded-full border-oro text-oro">
    {children}
  </span>
);

const TituloSeccion = ({ children, subtitulo, centrado = false }: { children: React.ReactNode, subtitulo?: string, centrado?: boolean }) => (
  <div className={`mb-16 ${centrado ? 'text-center' : 'text-left'}`}>
    {subtitulo && <p className="mb-4 font-serif italic text-naranja">{subtitulo}</p>}
    <h2 className="text-4xl md:text-5xl lg:text-6xl text-marron leading-tight">
      {children}
    </h2>
    <div className={`h-1 w-24 bg-oro mt-8 ${centrado ? 'mx-auto' : ''}`} />
  </div>
);

export default function App() {
  const precio = "$9,99";

  return (
    <div className="min-h-screen selection:bg-oro selection:text-white">
      {/* Barra de Navegación Minimalista */}
      <nav className="fixed top-0 z-50 w-full bg-crema/80 backdrop-blur-md border-b border-marron/5">
        <div className="container flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">
          <div className="text-xl font-display font-bold tracking-tighter text-marron">
            LA GUÍA <span className="text-oro">DE LAS GALLINAS</span>
          </div>
          <a 
            href="#comprar" 
            className="hidden md:flex items-center gap-2 px-6 py-2 text-sm font-semibold text-white transition-all rounded-full gradiente-premium hover:shadow-lg hover:scale-105"
          >
            Adquirir ahora — {precio}
          </a>
        </div>
      </nav>

      {/* Portada / Hero */}
      <header className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32">
        <div className="container relative z-10 px-6 mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SeccionInsignia>Edición Coleccionista 2026</SeccionInsignia>
              <h1 className="mb-8 text-5xl font-bold leading-[1.1] md:text-7xl lg:text-8xl text-marron">
                El Arte de la <br />
                <span className="italic font-normal text-oro">Vida Sencilla</span>
              </h1>
              <p className="mb-10 text-xl font-serif italic text-marron/70 lg:text-2xl">
                Descubra el fascinante mundo de la cría y el cuidado de estas aves y todos sus beneficios.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a 
                  href="#comprar" 
                  className="flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white transition-all rounded-full gradiente-premium hover:shadow-2xl hover:-translate-y-1"
                >
                  Comenzar mi viaje <ArrowRight className="w-5 h-5" />
                </a>
                <div className="flex items-center gap-3 px-6 py-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                        className="w-10 h-10 border-2 rounded-full border-crema" 
                        alt="Lector"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-marron/60">
                    +2.500 criadores satisfechos
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden shadow-2xl rounded-2xl aspect-[3/4] group">
                <img 
                  src="https://picsum.photos/seed/chicken-farm/800/1200" 
                  alt="Gallinas en el jardín" 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marron/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-sm font-bold tracking-widest text-white uppercase opacity-80">Victoria Maciass presenta</p>
                  <p className="text-2xl font-display text-white">La Guía Definitiva</p>
                </div>
              </div>
              {/* Elementos decorativos */}
              <div className="absolute top-1/2 -right-12 w-64 h-64 bg-oro/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-naranja/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Introducción Narrativa Expandida */}
      <section className="py-24 bg-beige/30">
        <div className="container px-6 mx-auto max-w-4xl">
          <div className="texto-editorial capitular">
            <p className="mb-8">
              Imagínese esto: son las ocho de la mañana, el sol entra por la ventana de la cocina. Sales al jardín con una taza de café, aún en pijama, y tus gallinas acuden a saludarte. No hacen ruido molesto, solo ese suave cacareo que ya te resulta familiar. Abres la puerta del gallinero, metes la mano en el nido y recoges tres huevos. Aún están calientes. El color de la cáscara es de un marrón intenso, casi anaranjado. Cuando los fríes para desayunar, la yema tiene un color tan vivo que parece un pequeño sol en el plato. Su sabor... no se parece en nada a los huevos que comprabas en el supermercado. Esa es la textura de lo auténtico, de lo que has criado tú mismo.
            </p>
            <p className="mb-8">
              Sin embargo, para muchos, este anhelo de conexión con la tierra se transforma rápidamente en una fuente de estrés innecesario. El vecino que manifiesta su incomodidad por los olores. El depredador nocturno que, en un descuido, termina con meses de ilusión. La gallina que, sin previo aviso, amanece decaída mientras usted observa con impotencia, sin saber cómo reaccionar. Las primeras semanas suelen ser un campo de batalla emocional lleno de dudas, sobresaltos y, en ocasiones, desilusiones profundas. Y en esos momentos de soledad frente al gallinero, es natural que surja la pregunta: «¿Realmente esto era para mí?».
            </p>
            <p className="mb-8">
              La realidad es que la cría de gallinas no es intrínsecamente complicada, pero posee secretos que han sido transmitidos durante generaciones y que hoy, en nuestra vida moderna, hemos olvidado. Conocer estos fundamentos antes de dar el primer paso marca la frontera entre una experiencia frustrante y la creación de un pequeño paraíso autosuficiente en su propio hogar. No se trata solo de tener aves; se trata de integrar un ciclo de vida que enriquezca su mesa y su espíritu.
            </p>
            <p className="mb-8">
              A lo largo de los años, he observado cómo familias enteras transforman su relación con el alimento gracias a estas aves. No es solo el huevo; es la lección de responsabilidad para los niños, es el abono orgánico que transforma un jardín yermo en un vergel exuberante, y es la paz mental que otorga el saber exactamente qué está ingiriendo su familia. Pero para llegar a ese estado de armonía, se requiere una base sólida. Una base que no se encuentra en foros de internet llenos de opiniones contradictorias, sino en la experiencia contrastada y el respeto por la biología del animal.
            </p>
            <p className="mb-8">
              Este libro nace de la necesidad de rescatar ese conocimiento ancestral y adaptarlo a las necesidades del siglo veintiuno. Ya sea que viva en una zona rural con hectáreas de terreno o en un entorno urbano con un pequeño patio trasero, las gallinas tienen un lugar en su vida. Solo necesitan que usted comprenda su lenguaje, sus necesidades y sus ritmos.
            </p>
            <p className="mb-8 font-semibold text-marron">
              La cría de gallinas es, en esencia, un acto de resistencia pacífica contra la industrialización del alimento y un retorno a la soberanía de nuestro propio hogar.
            </p>
          </div>
        </div>
      </section>

      {/* Nueva Sección: El Renacimiento del Patio Trasero */}
      <section className="py-24 bg-crema">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/garden-life/800/1000" 
                alt="Vida en el jardín" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-naranja p-8 rounded-2xl text-white shadow-xl max-w-xs">
                <p className="text-3xl font-display mb-2">Sostenibilidad</p>
                <p className="text-sm opacity-90">Transforme sus residuos orgánicos en el fertilizante más potente del mundo.</p>
              </div>
            </div>
            <div>
              <TituloSeccion subtitulo="Más que una afición">
                El impacto de las gallinas en su ecosistema doméstico
              </TituloSeccion>
              <div className="texto-editorial space-y-6">
                <p>
                  A menudo subestimamos el papel que una pequeña bandada de gallinas puede desempeñar en la salud de nuestro entorno inmediato. No son solo productoras de proteínas; son ingenieras biológicas. Una gallina sana es una experta en el control de plagas, capaz de limpiar su jardín de larvas, caracoles y otros insectos que podrían dañar sus plantas ornamentales o su huerto.
                </p>
                <p>
                  Pero el beneficio va mucho más allá de la limpieza. El estiércol de gallina, conocido tradicionalmente como gallinaza, es una de las fuentes más concentradas de nitrógeno, fósforo y potasio disponibles en la naturaleza. En este libro, le enseñaré cómo gestionar este recurso para que, en lugar de ser un problema de olores, se convierta en el motor de su jardín. Aprenderá el arte del compostaje acelerado y cómo aplicarlo de forma segura para no quemar sus cultivos.
                </p>
                <p>
                  Además, está el factor educativo y terapéutico. En un mundo cada vez más digital y desconectado de los procesos biológicos, cuidar de un ser vivo que nos alimenta nos devuelve una perspectiva necesaria. He visto a niños que rechazaban las verduras empezar a interesarse por el huerto simplemente porque las gallinas formaban parte de ese ciclo. He visto a personas con altos niveles de estrés encontrar en el suave murmullo del gallinero un refugio de paz inigualable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre la Autora Expandido */}
      <section className="py-24 border-y border-marron/5">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <TituloSeccion subtitulo="Una voz de experiencia real">
                Hola, soy Victoria Maciass
              </TituloSeccion>
              <div className="space-y-6 texto-editorial">
                <p>
                  Llevo años dedicando mi vida a la crianza de gallinas en entornos domésticos. He gestionado espacios limitados, lidiado con la proximidad de vecinos exigentes y enfrentado los desafíos climáticos y biológicos que conlleva este noble oficio. Mi viaje no comenzó en una granja idílica, sino en un pequeño jardín urbano donde la necesidad de saber qué comía mi familia me empujó a investigar lo que la industria nos oculta sistemáticamente.
                </p>
                <p>
                  No me presento ante usted como una académica de laboratorio ni como una ingeniera agraria distante. Soy una persona curiosa, apasionada por la simplicidad voluntaria y por el descubrimiento de formas de vida más coherentes con nuestra naturaleza. He cometido todos los errores imaginables: desde la elección de razas incompatibles hasta la construcción de gallineros con deficiencias de ventilación que provocaron resfriados en mis aves. He llorado la pérdida de ejemplares por ataques de depredadores que creía haber bloqueado, y he reído viendo a mis hijos aprender el ciclo de la vida de la forma más pura posible.
                </p>
                <p>
                  Cada tropiezo fue una lección magistral. Cada acierto, una alegría compartida. Tras años de investigación, práctica y observación minuciosa, he condensado todo ese conocimiento en una obra que busca, por encima de todo, serle útil. En esta guía no encontrará teorías áridas, sino la sabiduría de quien ha trabajado la tierra con sus propias manos, quien ha sentido el calor de un huevo recién puesto en una mañana de invierno y quien ha entendido que las gallinas son mucho más que simples aves de corral: son compañeras de un viaje hacia la autosuficiencia.
                </p>
                <p>
                  Mi único objetivo con este libro es que su camino sea más fácil, más gratificante y, sobre todo, más exitoso que el mío. Quiero ahorrarle las noches de preocupación, los gastos innecesarios en medicamentos que podrían haberse evitado con higiene y la frustración de no entender por qué sus aves no están prosperando. Este es mi legado para usted, una invitación a retomar el control de su alimentación y a redescubrir el placer de lo auténtico.
                </p>
                <p>
                  A lo largo de mi trayectoria, he ayudado a cientos de personas a iniciar sus propios proyectos. He visto cómo patios de cemento se convertían en oasis de vida y cómo personas que nunca habían tocado un animal descubrían una conexión profunda con la naturaleza. La cría de gallinas es una puerta de entrada a un mundo de mayor consciencia, y me siento honrada de poder ser su guía en este proceso de transformación hacia una vida más plena y soberana.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative p-4 border rounded-2xl border-oro/20">
                <img 
                  src="https://picsum.photos/seed/victoria/600/800" 
                  alt="Victoria Maciass" 
                  className="rounded-xl shadow-xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute p-6 shadow-lg -bottom-8 -right-8 bg-oro text-white rounded-xl max-w-[240px]">
                  <p className="font-serif italic text-lg">"Mi misión es que su camino sea más gratificante y sencillo que el mío."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El Contenido - Desglose Detallado Expandido */}
      <section className="py-24 bg-marron text-crema overflow-hidden">
        <div className="container px-6 mx-auto max-w-7xl">
          <TituloSeccion centrado subtitulo="Un viaje de catorce etapas hacia la maestría">
            <span className="text-crema">Anatomía de una Crianza Exitosa</span>
          </TituloSeccion>

          <div className="grid gap-12">
            {/* Bloque 1: Cimientos */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-oro/20 text-oro text-xs font-bold uppercase tracking-widest">
                  Parte I: Los Cimientos del Hogar
                </div>
                <h3 className="text-4xl font-display">Capítulos 1 a 3: El Origen y el Espacio</h3>
                <p className="texto-editorial opacity-80">
                  Comenzamos nuestro viaje entendiendo la psicología profunda de la gallina. ¿Sabía que estas aves poseen una estructura social compleja y una memoria capaz de reconocer hasta cien rostros diferentes? En el primer capítulo, desglosamos la historia de nuestra convivencia y qué esperar realmente de este compromiso.
                </p>
                <p className="texto-editorial opacity-80">
                  La elección de la raza es el error número uno de los principiantes. No es lo mismo buscar una producción intensiva de huevos que un animal dócil para convivir con niños. Analizamos razas como la Rhode Island Red por su robustez, la Orpington por su carácter afable o las razas miniatura para espacios urbanos.
                </p>
                <p className="texto-editorial opacity-80">
                  Finalmente, abordamos la arquitectura. Un gallinero no es solo una caja de madera. Es un sistema de ventilación, seguridad y confort. Le enseñaré a orientar su construcción para aprovechar el sol de invierno y protegerse del calor estival, evitando así enfermedades respiratorias comunes.
                </p>
              </div>
              <div className="relative group">
                <img src="https://picsum.photos/seed/coop-design/800/600" className="rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105" alt="Diseño de gallinero" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 border-2 border-oro/30 rounded-2xl -m-4 -z-10" />
              </div>
            </div>

            {/* Bloque 2: El Día a Día */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1 group">
                <img src="https://picsum.photos/seed/feeding/800/600" className="rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105" alt="Alimentación" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 border-2 border-naranja/30 rounded-2xl -m-4 -z-10" />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-naranja/20 text-naranja text-xs font-bold uppercase tracking-widest">
                  Parte II: La Gestión Diaria
                </div>
                <h3 className="text-4xl font-display">Capítulos 4 a 8: Nutrición, Salud y Producción</h3>
                <p className="texto-editorial opacity-80">
                  La alimentación es la base de la salud y la calidad del huevo. En el capítulo 4, desmitificamos los piensos comerciales y le enseñamos a crear mezclas naturales que aporten el calcio y la proteína necesaria. ¿Por qué mis gallinas comen sus propios huevos? ¿Por qué la cáscara es blanda? Aquí encontrará las respuestas técnicas.
                </p>
                <p className="texto-editorial opacity-80">
                  La salud preventiva es el capítulo más valioso de esta obra. Aprenderá a realizar una inspección física rápida: ojos claros, crestas vibrantes y plumaje denso. Le enseñaremos a identificar parásitos externos como el ácaro rojo y cómo combatirlos de forma ecológica sin recurrir a químicos agresivos que contaminen sus huevos.
                </p>
                <p className="texto-editorial opacity-80">
                  Y por supuesto, la puesta. Entenderá el ciclo de luz necesario para que sus gallinas no dejen de poner en invierno y cómo gestionar la "cluequera" o el deseo instintivo de incubar, para que su producción se mantenga estable y sus aves no sufran estrés innecesario.
                </p>
              </div>
            </div>

            {/* Bloque 3: Maestría */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-oro/20 text-oro text-xs font-bold uppercase tracking-widest">
                  Parte III: Hacia la Excelencia
                </div>
                <h3 className="text-4xl font-display">Capítulos 9 a 14: Entorno, Ley y Futuro</h3>
                <p className="texto-editorial opacity-80">
                  Cuando ya domina lo básico, es hora de escalar su proyecto. El capítulo sobre incubación es una oda a la vida. Le guiaré en el uso de incubadoras eléctricas y en el manejo de la gallina madre, asegurando una tasa de eclosión superior al ochenta por ciento.
                </p>
                <p className="texto-editorial opacity-80">
                  No ignoramos la realidad urbana. El capítulo 13 es una guía detallada para aquellos que viven en ciudades. Cómo gestionar el ruido, cómo evitar que el gallinero sea visible o molesto para los vecinos y cómo aprovechar cada centímetro cuadrado de un patio pequeño.
                </p>
                <p className="texto-editorial opacity-80">
                  Finalmente, la seguridad jurídica. Analizamos las normativas generales en diversos países de habla hispana para que usted críe con la tranquilidad de estar cumpliendo con la legislación local, evitando multas y conflictos innecesarios.
                </p>
              </div>
              <div className="relative group">
                <img src="https://picsum.photos/seed/future-farm/800/600" className="rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105" alt="Futuro de la granja" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 border-2 border-oro/30 rounded-2xl -m-4 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección: La Ciencia y el Alma del Huevo */}
      <section className="py-24 bg-crema">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <TituloSeccion centrado subtitulo="El premio a su dedicación">
            La Anatomía del Huevo Perfecto
          </TituloSeccion>
          <div className="texto-editorial space-y-8">
            <p>
              Un huevo de supermercado es un producto industrial, despojado de alma y de nutrientes esenciales. Un huevo de su propio patio es un milagro biológico. En esta sección del libro, profundizamos en por qué la yema de sus gallinas será de un naranja vibrante: es el resultado de una dieta rica en carotenos naturales, hierba fresca e insectos.
            </p>
            <p>
              Analizamos la estructura de la cáscara, la densidad de la clara y cómo el frescor absoluto influye en sus preparaciones culinarias. Aprenderá técnicas de conservación ancestrales que permiten mantener los huevos frescos durante semanas sin necesidad de refrigeración constante, respetando la cutícula protectora natural que la industria suele eliminar.
            </p>
            <p className="font-display text-3xl italic text-marron">
              "Una vez que pruebe el fruto de su propio esfuerzo, no habrá vuelta atrás. Su paladar reconocerá la diferencia entre la supervivencia industrial y la abundancia natural."
            </p>
          </div>
        </div>
      </section>

      {/* Nueva Sección: El Decálogo del Criador Consciente */}
      <section className="py-24 bg-marron text-crema">
        <div className="container px-6 mx-auto max-w-5xl">
          <TituloSeccion centrado subtitulo="Principios para una convivencia armónica">
            <span className="text-crema">El Decálogo del Criador</span>
          </TituloSeccion>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { t: "Observación Diaria", d: "Dedique al menos cinco minutos al día a observar el comportamiento de su bandada. La detección temprana de cambios en la postura, el brillo de los ojos o el apetito es la mejor medicina preventiva que existe. El criador que conoce a sus aves nota el problema antes de que se convierta en crisis." },
              { t: "Higiene Rigurosa", d: "Un gallinero limpio es un gallinero sano. La gestión adecuada del lecho, la eliminación de la humedad y la ventilación constante son innegociables para evitar enfermedades respiratorias y parásitos. La limpieza no es solo estética, es la base de la bioseguridad doméstica." },
              { t: "Nutrición Diversa", d: "Más allá del grano básico, sus gallinas necesitan un abanico de vegetales, minerales y proteínas. La variedad en la dieta se traduce directamente en la complejidad nutricional del huevo. Aprenda a suplementar con hierbas aromáticas y restos de huerto de forma equilibrada." },
              { t: "Seguridad Inquebrantable", d: "Nunca subestime la astucia y persistencia de un depredador. Su gallinero debe ser una fortaleza nocturna sin fisuras, con cierres a prueba de zorros y mallas enterradas. La tranquilidad nocturna de sus aves garantiza su longevidad y productividad." },
              { t: "Respeto al Ciclo Natural", d: "Entienda que las gallinas no son máquinas de producción industrial. Tienen periodos de muda de pluma y descanso invernal. Respete sus ritmos biológicos y no fuerce la puesta con luz artificial agresiva si busca una relación ética y duradera." },
              { t: "Espacio y Libertad", d: "El hacinamiento es la madre del estrés, el picoteo y las agresiones. Asegure metros cuadrados suficientes para que cada ave pueda expresar su comportamiento natural: escarbar, darse baños de tierra y estirar las alas sin interferencias." },
              { t: "Agua Siempre Fresca", d: "La hidratación es crítica; un huevo es mayoritariamente agua. El suministro debe estar siempre limpio, fresco y protegido de la luz solar directa para evitar la proliferación de algas y bacterias. Un bebedero sucio es una puerta abierta a la enfermedad." },
              { t: "Gestión de Residuos", d: "Convierta lo que otros llaman desperdicio en un recurso valioso. El compostaje de la gallinaza es la clave para cerrar el ciclo de nutrientes en su jardín, transformando el estiércol en el mejor abono orgánico que sus plantas hayan conocido jamás." },
              { t: "Educación Continua", d: "Siga aprendiendo y observando. La biología aviar es fascinante y siempre hay nuevas técnicas de manejo, razas por descubrir y métodos naturales para mejorar el bienestar de su bandada. El conocimiento es la herramienta más potente del criador." },
              { t: "Paciencia y Cariño", d: "Las gallinas son animales inteligentes que responden positivamente al trato humano calmado. Una relación basada en la confianza facilita enormemente el manejo diario, reduce el estrés del grupo y convierte la tarea en un placer compartido." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 border border-crema/10 rounded-xl bg-crema/5">
                <div className="text-2xl font-display text-oro">{(i + 1).toString().padStart(2, '0')}</div>
                <div>
                  <h4 className="font-bold mb-2 text-oro">{item.t}</h4>
                  <p className="text-sm opacity-70 leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nueva Sección: Un Año en el Gallinero */}
      <section className="py-24 bg-crema">
        <div className="container px-6 mx-auto max-w-7xl">
          <TituloSeccion centrado subtitulo="Guía estacional de cuidados profundos">
            El Ritmo de las Estaciones
          </TituloSeccion>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="p-8 border border-marron/5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-display text-oro mb-4">Primavera</h4>
              <p className="text-sm texto-editorial opacity-80">
                Es la época de la explosión de vida y el renacimiento. Con el aumento de las horas de luz, la puesta de huevos alcanza su pico máximo. Es el momento ideal para la incubación, ya sea natural o artificial, y para la crianza de polluelos. Debemos realizar una limpieza profunda de primavera, desinfectando cada rincón del gallinero tras el invierno y preparando los espacios exteriores para el rebrote de la hierba fresca, esencial para la dieta.
              </p>
            </div>
            <div className="p-8 border border-marron/5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-display text-naranja mb-4">Verano</h4>
              <p className="text-sm texto-editorial opacity-80">
                El gran desafío estival es el estrés por calor. Las gallinas sufren significativamente más con las altas temperaturas que con el frío intenso. Asegurar sombras profundas, ventilación cruzada efectiva y agua fresca renovada varias veces al día es vital para su supervivencia. Es también el momento de máxima vigilancia contra parásitos externos como el ácaro rojo, que prospera en el calor, y de asegurar que el polvo para sus baños esté seco y disponible.
              </p>
            </div>
            <div className="p-8 border border-marron/5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-display text-marron mb-4">Otoño</h4>
              <p className="text-sm texto-editorial opacity-80">
                Llega la muda de pluma, un proceso biológico exigente. La producción de huevos baja drásticamente mientras las aves invierten toda su energía y proteínas en renovar su plumaje para el invierno. Necesitan un refuerzo nutricional específico, rico en aminoácidos. Es el momento de realizar reparaciones estructurales en el gallinero, sellando grietas contra las corrientes de aire frío y asegurando que el tejado sea totalmente estanco ante las lluvias otoñales.
              </p>
            </div>
            <div className="p-8 border border-marron/5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-display text-oro mb-4">Invierno</h4>
              <p className="text-sm texto-editorial opacity-80">
                El enfoque es la protección contra la humedad y las corrientes de aire. Aunque las gallinas toleran sorprendentemente bien el frío seco gracias a su plumaje, la humedad es su enemiga mortal. Debemos asegurar que el agua de los bebederos no se congele y proporcionar una dieta más calórica, con cereales como el maíz al atardecer, para ayudarles a mantener su temperatura corporal durante las largas noches. La ventilación debe mantenerse, pero sin crear corrientes directas sobre las perchas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Valor y Pérdida */}
      <section className="py-24">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <TituloSeccion subtitulo="La inversión en conocimiento">
                Evite los costes ocultos de la inexperiencia
              </TituloSeccion>
              <p className="mb-8 texto-editorial">
                Muchos entusiastas comienzan este proyecto sin una hoja de ruta clara, lo que deriva en gastos imprevistos que superan con creces el valor de cualquier formación profesional.
              </p>
              <div className="space-y-4">
                {[
                  { item: "Gallinero mal diseñado que requiere reforma", coste: "$150 o más" },
                  { item: "Consulta veterinaria por falta de prevención", coste: "$50 por visita" },
                  { item: "Pérdida de ejemplares por depredación", coste: "Incalculable emocionalmente" },
                  { item: "Alimentación ineficiente sin resultados", coste: "Pérdidas mensuales" }
                ].map((i, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-lg border-marron/5 bg-beige/10">
                    <span className="font-medium">{i.item}</span>
                    <span className="font-bold text-naranja">{i.coste}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center p-12 text-white rounded-3xl gradiente-premium">
              <h3 className="mb-6 text-3xl font-display">Su solución integral</h3>
              <p className="mb-8 text-lg opacity-90">
                Por menos de lo que cuesta un saco de pienso de calidad, usted recibirá años de experiencia condensada, evitando errores costosos y garantizando el bienestar de sus aves desde el primer minuto.
              </p>
              <div className="mb-8 text-5xl font-bold">
                {precio} <span className="text-xl font-normal opacity-60">Dólares americanos</span>
              </div>
              <a 
                href="#comprar" 
                className="block w-full py-5 text-xl font-bold text-center text-marron transition-all bg-oro rounded-xl hover:bg-white hover:scale-105"
              >
                ADQUIRIR MI EJEMPLAR AHORA
              </a>
              <p className="mt-4 text-sm text-center opacity-60">Pago único. Acceso instantáneo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Reales */}
      <section className="py-24 bg-crema">
        <div className="container px-6 mx-auto max-w-7xl">
          <TituloSeccion centrado subtitulo="Voces de nuestra comunidad">
            Experiencias que inspiran
          </TituloSeccion>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                nombre: "Laura",
                ubicacion: "Madrid",
                texto: "Empecé con dos gallinas en un patio de veinte metros cuadrados. Estaba convencida de que fracasaría, que olería mal o que mis hijos se cansarían en dos días. El libro de Victoria me dio la confianza para hacerlo bien desde el principio. El diseño del gallinero fue clave: con sus indicaciones, lo construí yo misma en un fin de semana. Mis hijas recogen los huevos cada mañana como si fuera el día de Reyes. Llevamos ocho meses sin comprar un solo huevo y el sabor es incomparable."
              },
              {
                nombre: "Carlos",
                ubicacion: "Asturias",
                texto: "Perdí tres gallinas el primer año por culpa de un zorro. Estaba a punto de tirar la toalla. La sección sobre protección contra depredadores y el capítulo de problemas comunes me abrieron los ojos. Reforcé el gallinero como explicaba el libro, cambié la ubicación de las perchas y ahora, un año después, mi grupo está más sano que nunca y no he vuelto a tener sustos. Ha merecido cada céntimo."
              },
              {
                nombre: "Ana",
                ubicacion: "Valencia",
                texto: "Lo que más me ayudó fue la parte de alimentación y salud. Mis gallinas empezaron a poner huevos con la cáscara muy frágil y no sabía por qué. Siguiendo las pautas del libro, ajusté su dieta con calcio y cambié ligeramente el pienso. El problema desapareció en dos semanas. Además, ahora sé reconocer cuándo una está incubando de verdad o simplemente está perezosa. Un imprescindible en mi biblioteca."
              }
            ].map((t, i) => (
              <div key={i} className="p-10 border bg-white/50 border-marron/5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex mb-4 text-oro">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="mb-6 italic font-serif text-marron/80 leading-relaxed">"{t.texto}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-oro/20 flex items-center justify-center font-bold text-oro">
                    {t.nombre[0]}
                  </div>
                  <div>
                    <p className="font-bold text-marron">{t.nombre}</p>
                    <p className="text-xs uppercase tracking-widest opacity-50">{t.ubicacion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="py-24">
        <div className="container px-6 mx-auto max-w-5xl">
          <div className="relative p-12 overflow-hidden border text-center bg-beige/20 border-oro/30 rounded-3xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck className="w-64 h-64 text-oro" />
            </div>
            <div className="relative z-10">
              <SeccionInsignia>Compromiso de Calidad</SeccionInsignia>
              <h2 className="mb-6 text-4xl font-display">Garantía de Satisfacción de 30 Días</h2>
              <p className="max-w-2xl mx-auto mb-10 text-lg texto-editorial">
                Deseo que adquiera esta guía con absoluta tranquilidad. Tiene un mes completo para leer la obra, aplicar sus consejos y observar los resultados en su propio hogar. Si por cualquier motivo siente que el contenido no cumple con sus expectativas, le devolveremos el importe íntegro. Sin preguntas, sin condiciones. Mi prioridad es su éxito.
              </p>
              <div className="flex items-center justify-center gap-4">
                <ShieldCheck className="w-12 h-12 text-oro" />
                <span className="text-xl font-bold uppercase tracking-widest text-marron">Protección Total</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Soberanía Alimentaria y Resiliencia */}
      <section className="py-24 bg-beige/20">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <TituloSeccion centrado subtitulo="Un acto de libertad y consciencia">
            Soberanía en su Propio Hogar
          </TituloSeccion>
          <div className="texto-editorial space-y-8">
            <p>
              En un mundo caracterizado por cadenas de suministro globales cada vez más frágiles y una industria alimentaria que prioriza el volumen sobre la densidad nutricional, tener su propia fuente de proteína de alta calidad es un acto de resiliencia sin parangón. La soberanía alimentaria no es un concepto abstracto; comienza en el patio de su casa, en la decisión consciente de retomar el control sobre lo que ingiere su familia. Al criar sus propias gallinas, usted se convierte en el garante de la calidad: decide qué comen ellas y, por extensión directa, qué nutrientes llegan a su mesa.
            </p>
            <p>
              Este libro no es solo un manual técnico de avicultura doméstica; es una invitación a repensar nuestra relación con el consumo y la dependencia externa. Es una herramienta empoderadora para que usted se transforme de consumidor pasivo en productor activo. Imagine la profunda tranquilidad mental que otorga el saber que, independientemente de las fluctuaciones del mercado o las crisis logísticas, su familia tiene acceso garantizado a huevos frescos, biológicamente superiores y éticamente producidos cada mañana. Esa es la verdadera libertad que ofrece la vida sencilla y autosuficiente.
            </p>
            <p>
              Además, el impacto social y comunitario de este gesto es inmenso. Un vecindario salpicado de pequeños criadores conscientes es un vecindario más conectado, más resiliente y más humano. El intercambio de excedentes, el trueque de conocimientos y la colaboración en el cuidado de las aves fortalecen los lazos sociales que la vida moderna a menudo erosiona. Las gallinas son, con frecuencia, el primer paso hacia un ecosistema doméstico próspero, un huerto exuberante y una vida más integrada en los ciclos naturales que sostienen la vida en nuestro planeta.
            </p>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes Expandidas */}
      <section className="py-24 bg-marron text-crema">
        <div className="container px-6 mx-auto max-w-4xl">
          <TituloSeccion centrado subtitulo="Resolviendo sus dudas de forma exhaustiva">
            <span className="text-crema">Preguntas Frecuentes</span>
          </TituloSeccion>
          <div className="space-y-12">
            {[
              {
                q: "¿Es estrictamente necesario tener conocimientos previos o vivir en una zona rural?",
                a: "En absoluto. Esta obra ha sido redactada con un lenguaje claro, directo y libre de tecnicismos innecesarios, partiendo desde los conceptos más elementales hasta las técnicas de maestría. De hecho, el capítulo 13 está dedicado íntegramente a la crianza en espacios reducidos y entornos urbanos. No importa si dispone de una hectárea de terreno o de un pequeño patio de cemento; le enseñaré a adaptar el entorno para que sus gallinas prosperen con salud. He asesorado proyectos exitosos en balcones amplios y terrazas urbanas, siempre bajo las pautas de higiene y bienestar que detallo minuciosamente."
              },
              {
                q: "¿En qué formato recibiré el libro y qué compatibilidad tiene?",
                a: "Se trata de un libro digital (libro electrónico) en formato PDF de alta resolución y maquetación profesional, optimizado para una lectura cómoda en cualquier dispositivo: ordenadores de sobremesa, tabletas, teléfonos inteligentes y lectores de libros electrónicos. Tras completar el proceso de pago seguro, recibirá un enlace de descarga inmediata en su correo electrónico. Sin esperas, sin mensajería y sin gastos de envío; el conocimiento llega a sus manos al instante, permitiéndole comenzar la planificación de su proyecto hoy mismo."
              },
              {
                q: "¿Es el proceso de pago totalmente seguro y qué métodos se aceptan?",
                a: "La seguridad de su transacción es nuestra prioridad absoluta. Utilizamos pasarelas de pago cifradas con tecnología SSL de 256 bits, el estándar de seguridad más alto de la industria, equivalente al que utilizan las grandes entidades bancarias internacionales. Puede realizar su compra con total tranquilidad mediante tarjeta de crédito, débito o PayPal. Sus datos financieros son procesados de forma externa y segura, garantizando que la transacción sea cien por cien privada y protegida contra cualquier tipo de fraude."
              },
              {
                q: "¿Realmente se traduce la cría doméstica en un ahorro económico real?",
                a: "Sí, aunque el ahorro es multifactorial. Si bien la reducción en el gasto directo de la cesta de la compra es evidente a medio plazo, el verdadero valor reside en la calidad superior del producto y en la eliminación de intermediarios. Al integrar las gallinas en su hogar, usted crea un sistema de economía circular: los residuos vegetales de su cocina se transforman en huevos, y el estiércol se convierte en el abono más potente para su jardín o huerto, reduciendo drásticamente los gastos en fertilizantes químicos. El valor nutricional y la salud que aporta un huevo casero son, además, una inversión en el bienestar a largo plazo de su familia."
              },
              {
                q: "¿Qué ocurre si me enfrento a un problema de salud animal que no identifico?",
                a: "Aunque la guía es extremadamente exhaustiva y cubre el noventa y nueve por ciento de las situaciones cotidianas y problemas comunes, siempre es recomendable tener localizado a un veterinario especializado en aves en su región. El libro le proporcionará las herramientas críticas para realizar un triaje inicial: aprenderá a identificar cuándo se trata de una emergencia real que requiere intervención profesional y cuándo es un desajuste que puede solucionar usted mismo mediante ajustes en la dieta, higiene o manejo, lo que le ahorrará tiempo, dinero y preocupaciones innecesarias."
              },
              {
                q: "¿Cómo puedo hacer efectiva la garantía de devolución si no estoy satisfecho?",
                a: "Mi compromiso con su éxito es total. Si tras adquirir el libro, leerlo y aplicar sus consejos durante un periodo de treinta días siente que la información no ha aportado el valor esperado a su proyecto, simplemente envíenos un correo electrónico a la dirección de soporte que recibirá con su compra. Le devolveremos el importe íntegro de su inversión de forma rápida y sin preguntas incómodas. Confío plenamente en la calidad de este contenido porque es el resultado de años de experiencia real, y quiero que usted lo adquiera con la misma confianza."
              }
            ].map((f, i) => (
              <div key={i} className="pb-8 border-b border-crema/10">
                <h4 className="mb-4 text-2xl font-display text-oro">{f.q}</h4>
                <p className="opacity-70 leading-loose texto-editorial">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre y CTA Final */}
      <section id="comprar" className="py-32 text-center bg-crema">
        <div className="container px-6 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-5xl md:text-7xl font-display">Comience su transformación hoy mismo</h2>
            <p className="mb-12 text-xl font-serif italic text-marron/70">
              Imagina despertar mañana y saber exactamente qué hacer. Imagina mirar a tus gallinas y entender su lenguaje. Imagina abrir la nevera y ver siempre huevos frescos, sabrosos, de un color que no encuentras en ningún supermercado.
            </p>
            <div className="inline-block p-12 mb-12 border-2 border-oro rounded-3xl bg-white shadow-2xl">
              <p className="mb-4 text-sm font-bold tracking-widest uppercase text-naranja">Oferta de lanzamiento</p>
              <div className="mb-8 text-7xl font-bold text-marron">{precio}</div>
              <button className="px-12 py-6 text-2xl font-bold text-white transition-all rounded-full gradiente-premium hover:shadow-2xl hover:scale-105 active:scale-95">
                SÍ, QUIERO MI GUÍA AHORA
              </button>
              <div className="flex items-center justify-center gap-6 mt-8 opacity-60">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt="Paypal" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
              </div>
            </div>
            <p className="text-sm opacity-50">
              © 2026 Victoria Maciass · Todos los derechos reservados. <br />
              Este libro está protegido por las leyes de propiedad intelectual internacionales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Botón flotante de compra para móvil */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <a 
          href="#comprar" 
          className="flex items-center justify-center w-full py-4 text-lg font-bold text-white shadow-2xl gradiente-premium rounded-2xl"
        >
          Adquirir por {precio}
        </a>
      </div>
    </div>
  );
}
