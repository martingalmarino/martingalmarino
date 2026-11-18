export const audiences = [
  'Para pymes en crecimiento',
  'Para empresas con varias sucursales',
  'Para e-commerce',
];

export const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    text: 'Revisamos cómo aparece la empresa en Google y qué responden ChatGPT, Gemini y Perplexity sobre el rubro.',
  },
  {
    n: '02',
    title: 'Plan',
    text: 'Ordenamos qué conviene cambiar primero en el sitio y en la forma de contar el servicio.',
  },
  {
    n: '03',
    title: 'Ejecución',
    text: 'Trabajamos con tu equipo sobre las páginas y la información que te describe.',
  },
  {
    n: '04',
    title: 'Medición',
    text: 'Miramos búsquedas, respuestas de la IA y consultas. Sin prometer una posición.',
  },
];

export const canales = [
  {
    id: 'google',
    label: 'Google',
    text: 'Tu empresa aparece como un resultado más en la lista.',
    kind: 'lista' as const,
  },
  {
    id: 'overviews',
    label: 'AI Overviews',
    text: 'Un resumen responde arriba. Tu empresa entra si ese resumen la nombra.',
    kind: 'resumen' as const,
  },
  {
    id: 'modo-ia',
    label: 'Modo IA',
    text: 'La pregunta es más larga y la respuesta es una conversación.',
    kind: 'chat' as const,
  },
  {
    id: 'chatgpt',
    label: 'ChatGPT',
    text: 'Te recomiendan en el chat, sin una lista de diez links.',
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
      'El GEO (Generative Engine Optimization) es el trabajo para que la IA nombre a tu empresa y la describa bien. El término lo plantearon Aggarwal y otros, de Princeton, en 2023 y se publicó en KDD 2024. En ese estudio, algunas formas de presentar la información aumentaron la visibilidad hasta un 40%.',
    sourceLabel: 'Aggarwal y otros, arXiv',
    sourceUrl: 'https://arxiv.org/abs/2311.09735',
  },
  {
    question: '¿El GEO reemplaza al SEO?',
    answer:
      'No. El SEO sigue siendo la base. Si Google no entiende tu sitio, la IA tampoco tiene una fuente clara.',
  },
  {
    question: '¿Cuánto tarda en verse?',
    answer:
      'No hay un plazo único: depende de cómo está el sitio y del rubro. En el diagnóstico te digo por dónde empezar. No prometo una posición ni una fecha.',
  },
  {
    question: '¿Cómo se mide?',
    answer:
      'Miro si aparecés en las búsquedas que te importan, si la IA te describe bien y si eso se vuelve consultas. No uso una sola cifra como promesa.',
  },
];

export function faqPlainText(item: HomeFaq): string {
  if (!item.sourceLabel) return item.answer;
  return `${item.answer} Fuente: ${item.sourceLabel}.`;
}
