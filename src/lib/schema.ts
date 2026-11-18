import { absoluteUrl, site } from '../config/site';

export interface Crumb {
  name: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

const personId = `${absoluteUrl(site.author.path)}#person`;
const serviceId = `${site.url}/#profesional`;
const websiteId = `${site.url}/#website`;

export function breadcrumb(items: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPage(canonical: string, items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${canonical}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function pageGraph(options: {
  title: string;
  description: string;
  canonical: string;
  extra?: Record<string, unknown>[];
}) {
  const { title, description, canonical, extra = [] } = options;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: site.author.name,
        jobTitle: site.author.jobTitle,
        url: absoluteUrl(site.author.path),
        sameAs: [site.author.linkedin],
      },
      {
        '@type': 'ProfessionalService',
        '@id': serviceId,
        name: site.name,
        url: absoluteUrl('/'),
        description: site.tagline,
        image: absoluteUrl('/og.png'),
        areaServed: {
          '@type': 'Country',
          name: 'Argentina',
        },
        provider: { '@id': personId },
        knowsAbout: ['SEO', 'Generative Engine Optimization', 'Answer Engine Optimization'],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: site.name,
        url: absoluteUrl('/'),
        description: site.tagline,
        inLanguage: site.locale,
        publisher: { '@id': personId },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        inLanguage: site.locale,
        isPartOf: { '@id': websiteId },
        about: { '@id': serviceId },
      },
      ...extra,
    ],
  };
}
