import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { Section, SectionTitle, CTASection } from '../components/Shared';
import { ArrowRight, Clock } from 'lucide-react';

export default function Insights() {
  const { t, dir } = useI18n();

  const articles = [
    {
      title: '5 Signs Your Restaurant Needs an Operational Audit',
      excerpt: 'If you\'re constantly firefighting, can\'t track true costs, or struggle with consistency — it might be time for a professional review.',
      category: 'Operations',
      date: 'Coming Soon',
    },
    {
      title: 'Understanding Food Cost Percentages in Saudi Restaurants',
      excerpt: 'What should your food cost percentage actually be? We break down the benchmarks and what drives variation across restaurant types.',
      category: 'Food Costing',
      date: 'Coming Soon',
    },
    {
      title: 'Menu Engineering: Finding Your Stars and Dogs',
      excerpt: 'A practical guide to categorizing your menu items for profitability and making data-driven decisions about what to keep, change, or remove.',
      category: 'Menu Engineering',
      date: 'Coming Soon',
    },
    {
      title: 'Reducing Food Waste Without Compromising Quality',
      excerpt: 'Practical strategies for reducing waste in Saudi restaurant operations while maintaining the quality your guests expect.',
      category: 'Inventory',
      date: 'Coming Soon',
    },
    {
      title: 'Digital Menus: Beyond the QR Code',
      excerpt: 'How modern digital menus are transforming the restaurant experience — and what to consider when implementing one.',
      category: 'Digital',
      date: 'Coming Soon',
    },
    {
      title: 'Building a Training Program That Actually Works',
      excerpt: 'Why most restaurant training fails and how to build a program that improves consistency, reduces turnover, and develops your team.',
      category: 'Staffing',
      date: 'Coming Soon',
    },
  ];

  return (
    <div dir={dir}>
      <div className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{t('nav.insights')}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Practical insights and guidance for restaurant operators in Saudi Arabia.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article key={i} className="bg-ivory rounded-xl border border-sage/20 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-br from-navy/5 to-teal/5 flex items-center justify-center">
                <Clock size={32} className="text-sage/40" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-teal/10 text-teal text-xs font-medium rounded">{article.category}</span>
                  <span className="text-xs text-charcoal/40">{article.date}</span>
                </div>
                <h3 className="font-semibold text-navy mb-2 leading-snug">{article.title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-charcoal/50">
          Articles are being prepared and will be published regularly. Subscribe to our newsletter for updates.
        </p>
      </Section>

      <CTASection />
    </div>
  );
}
