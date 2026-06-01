import { type FC } from 'react';
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
}

export const SEO: FC<SEOProps> = ({
  title = 'Kirikae Labs | If It Doesn\'t Exist, Build It.',
  description = 'Independent software engineering collective building developer tools, autonomous systems, and experimental software. Inspired by classical programming values, focused on understanding systems, solving difficult problems, and creating what does not yet exist.',
  keywords = 'Kirikae Labs, software engineering, developer tools, autonomous systems, static analysis, telemetry engine, code intelligence, Rust, C development, TS, software architecture, open source software, programming, systems engineering',
  image = '/images/brand/KirikaeLabs.png',
  url = '/',
  type = 'website',
  twitterCard = 'summary_large_image'
}) => {
  const baseUrl = 'https://KirikaeLabs.vercel.app';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;


  useEffect(() => {
    // Primary Meta Tags
    document.title = title;
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Canonical URL
    updateLinkTag('canonical', fullUrl);

    // Open Graph
    updateMetaTag('og:type', type);
    updateMetaTag('og:url', fullUrl);
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', fullImage);
    updateMetaTag('og:site_name', 'Kirikae Labs');

    // Twitter
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:url', fullUrl);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImage);

    // Additional Tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('author', 'Kirikae Labs');
    updateMetaTag('geo.region', 'US');
    updateMetaTag('geo.placename', 'Global');

    updateMetaTag('og:image:width', '1200');
    updateMetaTag('og:image:height', '630');
    updateMetaTag('og:image:type', 'image/png');

    // Structured Data
    updateStructuredData();
  }, [title, description, keywords, image, url, type, twitterCard]);

  const updateMetaTag = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`) ||
                 document.querySelector(`meta[property="${name}"]`);

    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(name.includes('og:') ? 'property' : 'name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateLinkTag = (rel: string, href: string) => {
    let element = document.querySelector(`link[rel="${rel}"]`);

    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', rel);
      document.head.appendChild(element);
    }
    element.setAttribute('href', href);
  };

  const updateStructuredData = () => {
    const structuredDataOrg = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Kirikae Labs',
      description: 'Independent software engineering collective building developer tools and experimental software',
      url: baseUrl,
      logo: `${baseUrl}/images/brand/KirikaeLabs.png`,
      sameAs: [
        'https://github.com/KirikaeLabs'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'KirikaeLabs@proton.me'
      },
      foundingDate: '2025',
      industry: 'Software Development',
      keywords: 'software engineering, developer tools, autonomous systems, static analysis, open source software'
    };

    const structuredDataApp = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kirikae Labs Software Ecosystem',
      description:   'A collection of developer tools, telemetry systems, and software engineering projects focused on autonomy, simplicity, and technical rigor.',
      operatingSystem: 'Web-based',
      applicationCategory: 'DeveloperApplication',
      featureList: [
        'Developer Tooling',
        'Static Analysis',
        'Structural Telemetry',
        'Project Scaffolding',
        'Autonomous Refactoring Research',
        'Open Source Development'
      ]
    };

    let scriptOrg = document.querySelector('script[data-type="organization"]');
    let scriptApp = document.querySelector('script[data-type="application"]');

    if (!scriptOrg) {
      scriptOrg = document.createElement('script');
      scriptOrg.setAttribute('type', 'application/ld+json');
      scriptOrg.setAttribute('data-type', 'organization');
      document.head.appendChild(scriptOrg);
    }

    if (!scriptApp) {
      scriptApp = document.createElement('script');
      scriptApp.setAttribute('type', 'application/ld+json');
      scriptApp.setAttribute('data-type', 'application');
      document.head.appendChild(scriptApp);
    }

    scriptOrg.textContent = JSON.stringify(structuredDataOrg);
    scriptApp.textContent = JSON.stringify(structuredDataApp);
  };

  return null;
};
