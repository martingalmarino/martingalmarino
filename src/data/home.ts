export const audiences = [
  'Para pymes en crecimiento',
  'Para empresas con varias sucursales',
  'Para e-commerce',
];

export const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    text: 'Revisamos cómo aparece tu empresa en Google y qué responden ChatGPT, Gemini y Perplexity sobre tu rubro. Es gratuito y te devuelvo un informe corto.',
  },
  {
    n: '02',
    title: 'Plan',
    text: 'Ordenamos qué conviene cambiar primero en el sitio y en la forma de contar el servicio.',
  },
  {
    n: '03',
    title: 'Ejecución',
    text: 'Trabajamos juntos sobre las páginas y la información que describe a tu empresa.',
  },
  {
    n: '04',
    title: 'Medición',
    text: 'Miramos si aparecés en las búsquedas que te importan, si la IA te describe bien y si eso se traduce en consultas. Sin prometer una posición.',
  },
];

export const canales = [
  {
    id: 'google',
    label: 'Google',
    text: 'Tu empresa aparece como un resultado más en la lista de links.',
    kind: 'lista' as const,
  },
  {
    id: 'overviews',
    label: 'AI Overviews',
    text: 'Arriba de la lista, un resumen de inteligencia artificial responde la pregunta. Tu empresa entra si ese resumen la nombra.',
    kind: 'resumen' as const,
  },
  {
    id: 'modo-ia',
    label: 'Modo IA',
    text: 'Dentro de Google, la búsqueda se vuelve una conversación y la respuesta es más larga.',
    kind: 'chat' as const,
  },
  {
    id: 'chatgpt',
    label: 'ChatGPT',
    text: 'La recomendación aparece en el chat, sin una lista de diez links.',
    kind: 'chat' as const,
  },
  {
    id: 'perplexity',
    label: 'Perplexity',
    text: 'La respuesta cita fuentes. Tu sitio puede ser una de ellas.',
    kind: 'fuentes' as const,
  },
];

export interface HomeFaq {
  question: string;
  answer: string;
  sourceLabel?: string;
  sourceUrl?: string;
}

export const faqs: HomeFaq[] = [
  {
    question: '¿Qué es el GEO?',
    answer:
      'El GEO, o Generative Engine Optimization, es el trabajo para que tu empresa aparezca cuando alguien le pregunta a una inteligencia artificial —como ChatGPT, Gemini o Perplexity— y para que la descripción sea correcta. El término lo plantearon Aggarwal y otros, de Princeton, en 2023, y el estudio se publicó en KDD 2024. En esa investigación, algunas formas de presentar la información aumentaron la visibilidad en las respuestas hasta un 40%.',
    sourceLabel: 'Aggarwal y otros, arXiv',
    sourceUrl: 'https://arxiv.org/abs/2311.09735',
  },
  {
    question: '¿El GEO reemplaza al SEO?',
    answer:
      'No. El SEO es el trabajo para aparecer en los resultados de buscadores como Google. Sigue siendo la base: si Google no entiende tu sitio, la IA tampoco tiene una fuente clara para hablar de tu empresa.',
  },
  {
    question: '¿Cuánto tarda en verse?',
    answer:
      'No hay un plazo único: depende de cómo está el sitio y del rubro. En el diagnóstico te digo por dónde empezar. No prometo una posición ni una fecha.',
  },
  {
    question: '¿Cómo se mide?',
    answer:
      'Miro si aparecés en las búsquedas que te importan, si la IA te nombra y te describe bien, y si eso se traduce en consultas. No uso una sola cifra como promesa.',
  },
  {
    question: '¿El diagnóstico tiene costo? ¿Qué incluye?',
    answer:
      'No, es gratis. Reviso cómo aparece tu empresa en Google y qué responden ChatGPT, Gemini y Perplexity sobre tu rubro, y te devuelvo un informe corto.',
  },
];

export function faqPlainText(item: HomeFaq): string {
  if (!item.sourceLabel) return item.answer;
  return `${item.answer} Fuente: ${item.sourceLabel}.`;
}
