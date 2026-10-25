import { useI18n } from '../i18n';
import { Section, SectionTitle, CTASection } from '../components/Shared';
import { ScrollReveal } from '../components/ScrollReveal';
import { ArrowRight, Clock } from 'lucide-react';

export default function Insights() {
  const { t, dir } = useI18n();

  const articles = [
    {
      title: '5 Signs Your Restaurant Needs an Operational Audit',
      excerpt: 'If you\'re constantly firefighting, can\'t track true costs, or struggle with consistency — it might be time for a professional review.',
      category: 'Operations',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1466978913421-dad2c6551513?w=600&q=80',
    },
    {
      title: 'Understanding Food Cost Percentages in Saudi Restaurants',
      excerpt: 'What should your food cost percentage actually be? We break down the benchmarks and what drives variation across restaurant types.',
      category: 'Food Costing',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    },
    {
      title: 'Menu Engineering: Finding Your Stars and Dogs',
      excerpt: 'A practical guide to categorizing your menu items for profitability and making data-driven decisions about what to keep, change, or remove.',
      category: 'Menu Engineering',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    },
    {
      title: 'Reducing Food Waste Without Compromising Quality',
      excerpt: 'Practical strategies for reducing waste in Saudi restaurant operations while maintaining the quality your guests expect.',
      category: 'Inventory',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80',
    },
    {
      title: 'Digital Menus: Beyond the QR Code',
      excerpt: 'How modern digital menus are transforming the restaurant experience — and what to consider when implementing one.',
      category: 'Digital',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
    },
    {
      title: 'Building a Training Program That Actually Works',
      excerpt: 'Why most restaurant training fails and how to build a program that improves consistency, reduces turnover, and develops your team.',
      category: 'Staffing',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    },
  ];

  return (
    <div dir={dir}>
      {/* Hero with background */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Restaurant insights"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-navy/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="up">
            <h1 className="text-3xl md:text-5xl font-bold text-white">{t('nav.insights')}</h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Practical insights and guidance for restaurant operators in Saudi Arabia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <ScrollReveal key={i} animation="up" delay={(i % 3) + 1}>
              <article className="bg-white rounded-2xl border border-sage/20 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 bg-teal/10 text-teal text-xs font-medium rounded-full">{article.category}</span>
                    <span className="text-xs text-charcoal/40">{article.date}</span>
                  </div>
                  <h3 className="font-semibold text-navy mb-2 leading-snug group-hover:text-teal transition-colors">{article.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{article.excerpt}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal animation="up">
          <p className="mt-10 text-center text-sm text-charcoal/50">
            Articles are being prepared and will be published regularly. Subscribe to our newsletter for updates.
          </p>
        </ScrollReveal>
      </Section>

      <CTASection />
    </div>
  );
}
