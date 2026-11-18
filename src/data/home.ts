export const audiences = [
  'Para pymes en crecimiento',
  'Para empresas con varias sucursales',
  'Para e-commerce',
];

export const chatQuestions = [
  '¿Qué estudio contable me recomendás para una pyme en Córdoba?',
  '¿Qué proveedor de packaging para alimentos conviene en Rosario?',
  '¿Qué software de gestión usan las pymes argentinas?',
];

export const channels = [
  { name: 'Google', icon: 'search', status: 'Posición 7', tone: 'inf' },
  { name: 'AI Overviews', icon: 'spark', status: 'Te nombra', tone: 'ok' },
  { name: 'ChatGPT', icon: 'chat', status: 'No te nombra', tone: 'no' },
  { name: 'Gemini', icon: 'orbit', status: 'Datos viejos', tone: 'meh' },
  { name: 'Perplexity', icon: 'book', status: 'Te cita', tone: 'ok' },
] as const;

export const stats = [
  {
    figure: '45,5%',
    text: 'de los adultos en Argentina usa IA generativa para fines personales. Buscar información es uno de los usos más comunes.',
    sources: [
      {
        label: 'CEPE-UTDT y Fundar, encuesta nacional, ago-sep 2025',
        href: 'https://www.utdt.edu/nota_prensa.php?id_item_menu=25279&id_nota_prensa=23080',
      },
    ],
  },
  {
    figure: '1.200 millones',
    text: 'de personas usan ChatGPT cada semana en el mundo.',
    sources: [
      {
        label: 'OpenAI, 10/11/2026',
        href: 'https://openai.com/index/introducing-businesses-chatgpt/',
      },
      {
        label: 'OpenAI, 7/10/2026',
        href: 'https://openai.com/index/gpt-6-for-everyone/',
      },
    ],
  },
  {
    figure: '8% vs. 15%',
    text: 'clics en resultados de Google con resumen de IA y sin él. Datos de EE.UU.',
    sources: [
      {
        label: 'Pew Research Center, 22/7/2025',
        href: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/',
      },
    ],
  },
];

export const ranking = [
  { name: 'Estudio A', score: '7 de 10', width: 70 },
  { name: 'Estudio B', score: '5 de 10', width: 50 },
  { name: 'Estudio C', score: '3 de 10', width: 30 },
  { name: 'Tu empresa', score: '0 de 10', width: 0, you: true },
];

export const checks = [
  'Le preguntás a ChatGPT qué empresas de tu rubro hay en tu ciudad, y no aparecés.',
  'Preguntás por tu marca y la respuesta tiene datos viejos: servicios que ya no das, otra zona, otra dirección.',
  'Tu sitio no dice en una frase qué hacés, para quién y dónde.',
  'Fuera de tu web casi nadie habla de vos: directorios, notas, reseñas, comparativas.',
  'Tus competidores responden en su sitio las preguntas que te hacen tus clientes. Vos no.',
];

export const copyQuestions = [
  '¿Qué empresas de [tu rubro] me recomendás en [tu ciudad]?',
  '¿Qué sabés de [nombre de tu empresa]? ¿Qué hace y dónde trabaja?',
  '¿Quién es el mejor proveedor de [tu servicio] para una empresa como la mía?',
];

export const checkResults = [
  'Vas bien. Igual conviene medirlo cada tanto, porque las respuestas cambian.',
  'Vas bien. Igual conviene medirlo cada tanto, porque las respuestas cambian.',
  'Hay lugares donde hoy te gana otro. Vale la pena ver cuáles.',
  'Hay lugares donde hoy te gana otro. Vale la pena ver cuáles.',
  'Para la IA, tu empresa casi no existe. Es el mejor momento para empezar.',
  'Para la IA, tu empresa casi no existe. Es el mejor momento para empezar.',
];

export const searchTabs = [
  {
    id: 'google',
    label: 'Google',
    icon: 'search',
    happens: 'Una lista de resultados.',
    win: 'Aparecer en la primera pantalla.',
    kind: 'lista' as const,
  },
  {
    id: 'vision',
    label: 'Visión general creada por IA',
    icon: 'spark',
    happens: 'Arriba de la lista, un resumen responde la pregunta.',
    win: 'Que el resumen te nombre o cite tu sitio.',
    kind: 'resumen' as const,
  },
  {
    id: 'modo',
    label: 'Modo IA',
    icon: 'orbit',
    happens: 'Dentro de Google, la búsqueda se vuelve una conversación.',
    win: 'Entrar en la respuesta, y en la repregunta.',
    kind: 'chat' as const,
  },
  {
    id: 'chatgpt',
    label: 'ChatGPT',
    icon: 'chat',
    happens: 'La recomendación aparece en el chat, sin diez links.',
    win: 'Ser una de las pocas empresas nombradas.',
    kind: 'nombres' as const,
  },
  {
    id: 'perplexity',
    label: 'Perplexity',
    icon: 'book',
    happens: 'La respuesta cita sus fuentes.',
    win: 'Que tu sitio sea una de esas fuentes.',
    kind: 'fuentes' as const,
  },
];

export const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    note: 'gratis, en hasta 5 días hábiles',
    text: 'Pruebo 10 preguntas reales de tu rubro en Google, ChatGPT, Gemini y Perplexity, y reviso rápido tu sitio.',
    deliverable: 'un PDF de 10 minutos: si te nombran, cómo te describen, quién te gana, tu sitio y 3 prioridades.',
    icon: 'file',
  },
  {
    n: '02',
    title: 'Plan',
    note: '',
    text: 'Ordenamos qué cambiar, dónde y por qué, empezando por lo que más pesa.',
    deliverable: 'una lista priorizada de cambios.',
    icon: 'list',
  },
  {
    n: '03',
    title: 'Ejecución',
    note: '',
    text: 'Trabajamos tus páginas, las preguntas frecuentes, los datos de la empresa y lo que se dice de vos fuera de tu sitio.',
    deliverable: 'los cambios publicados, con el detalle de qué se hizo.',
    icon: 'check',
  },
  {
    n: '04',
    title: 'Medición',
    note: 'mensual',
    text: 'Volvemos a probar las mismas 10 preguntas y miramos tus apariciones en Google y las consultas que llegan.',
    deliverable: 'un reporte mensual. No es una posición prometida: es lo que pasó.',
    icon: 'chart',
  },
];

export const reportParts = [
  {
    title: '¿Te nombran?',
    text: 'Las 10 preguntas de tu rubro y en cuáles aparecés, herramienta por herramienta.',
  },
  {
    title: '¿Te describen bien?',
    text: 'Lo que dicen de tu empresa, marcado como correcto, incompleto o equivocado.',
    soft: true,
  },
  {
    title: '¿Quién aparece en tu lugar?',
    text: 'Las empresas que la IA nombra cuando vos no estás.',
    ranking: true,
  },
  {
    title: '¿Cómo te ve Google?',
    text: 'Si aparecés en las búsquedas que te importan.',
    soft: true,
  },
  {
    title: '¿Tu sitio está en condiciones?',
    text: 'Lectura e indexación, datos estructurados y páginas clave.',
  },
  {
    title: 'Las 3 cosas para cambiar primero.',
    text: 'Por dónde empezar, en orden.',
  },
];

export const principles = [
  {
    title: 'Trabajo directo conmigo.',
    text: 'No te paso a un equipo que no conocés.',
  },
  {
    title: 'Datos con fuente.',
    text: 'Si afirmo algo, te muestro de dónde sale.',
  },
  {
    title: 'Sin promesas de posición.',
    text: 'Te muestro lo que medimos, todos los meses.',
  },
];

export const homeGuides = [
  {
    href: '/guia/que-es-seo-geo-aeo/',
    title: 'SEO, GEO y AEO: qué es cada uno y cuál necesitás',
    take: 'la diferencia en una frase, y cómo saber por dónde empezar.',
    minutes: 6,
    icon: 'list',
  },
  {
    href: '/guia/evolucion-del-seo/',
    title: 'De diez links a una respuesta: cómo cambió la búsqueda',
    take: 'los hitos de 2012 a 2026, y qué te toca hacer hoy.',
    minutes: 7,
    icon: 'chart',
  },
  {
    href: '/guia/por-que-estar-en-los-llms/',
    title: 'Si la IA no te nombra, nombra a otro',
    take: 'cinco preguntas para probar hoy qué dice la IA de tu empresa.',
    minutes: 6,
    icon: 'chat',
  },
];

export type Faq = {
  question: string;
  answer: string;
  sources?: { label: string; href: string }[];
};

export const faqs: Faq[] = [
  {
    question: '¿Cuánto cuesta?',
    answer:
      'El diagnóstico es gratis y sin compromiso. Si después querés avanzar, el trabajo se arma a partir de lo que muestra el diagnóstico, y lo conversamos en ese momento.',
  },
  {
    question: '¿Qué recibo en el diagnóstico y cuándo?',
    answer:
      'Un PDF corto, que se lee en 10 minutos, en hasta 5 días hábiles. Ves cómo responden Google, ChatGPT, Gemini y Perplexity a 10 preguntas reales de tu rubro, quién aparece en tu lugar, una revisión rápida de tu sitio y las 3 prioridades para empezar.',
  },
  {
    question: '¿Cuánto tarda en verse un cambio?',
    answer:
      'Depende de cómo esté hoy tu sitio y de tu rubro, así que no te voy a dar una fecha inventada. Lo que sí tenés es un reporte mensual: volvemos a probar las mismas 10 preguntas y ves qué se movió.',
  },
  {
    question: '¿No es una moda pasajera?',
    answer:
      'Los números dicen otra cosa. En mayo de 2026, Google informó que sus resúmenes con IA superan los 2.500 millones de usuarios por mes y que el Modo IA pasó los 1.000 millones en un año. En Argentina, el 45,5% de los adultos ya usa IA generativa.',
    sources: [
      { label: 'Google, I/O 2026', href: 'https://blog.google/innovation-and-ai/sundar-pichai-io-2026/' },
      {
        label: 'CEPE-UTDT y Fundar',
        href: 'https://www.utdt.edu/nota_prensa.php?id_item_menu=25279&id_nota_prensa=23080',
      },
    ],
  },
  {
    question: 'Ya tengo a alguien que me hace SEO. ¿Esto lo reemplaza?',
    answer:
      'No. El SEO sigue siendo la base, y lo de la IA se apoya en él. El diagnóstico te sirve igual: te muestra dónde aparecés y dónde no, y te deja una lista concreta para revisar con quien ya trabaja con vos.',
  },
  {
    question: '¿Me garantizás que ChatGPT me va a recomendar?',
    answer:
      'No, y desconfiá de quien te lo garantice: ninguna empresa controla lo que responde una IA. Lo que sí hago es trabajar lo que esas herramientas usan para responder, y medir todos los meses si te nombran y cómo te describen.',
  },
  {
    question: '¿Necesito un equipo de marketing?',
    answer:
      'No. Trabajás directo conmigo, y te explico cada cambio sin siglas. Si tenés a alguien interno, mejor: trabajamos juntos.',
  },
  {
    question: '¿Qué es el GEO?',
    answer:
      'GEO (Generative Engine Optimization) es el trabajo para que una IA como ChatGPT, Gemini o Perplexity nombre a tu empresa y la describa bien. Viene de un estudio publicado en KDD 2024: algunas formas de presentar la información aumentaron hasta un 40% la visibilidad en las respuestas.',
    sources: [{ label: 'Aggarwal y otros, arXiv:2311.09735 / KDD 2024', href: 'https://arxiv.org/abs/2311.09735' }],
  },
];

export function faqPlainText(item: Faq) {
  return item.answer;
}
