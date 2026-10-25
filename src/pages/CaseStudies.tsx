import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { Section, CTASection } from '../components/Shared';
import { ScrollReveal } from '../components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const { t, dir } = useI18n();

  return (
    <div dir={dir}>
      {/* Hero with background */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
            alt="Restaurant operations"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-navy/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="up">
            <h1 className="text-3xl md:text-5xl font-bold text-white">{t('nav.caseStudies')}</h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Real results from real restaurant operations. Case studies will be published as client engagements are completed and verified.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Section>
        <ScrollReveal animation="up">
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="w-24 h-24 mx-auto bg-ivory rounded-full flex items-center justify-center mb-8 animate-float">
              <ArrowRight size={36} className="text-teal" />
            </div>
            <h3 className="text-2xl font-semibold text-navy mb-4">Case Studies Coming Soon</h3>
            <p className="text-charcoal/70 mb-6 leading-relaxed">
              We are currently working with restaurant operators across Saudi Arabia. Detailed case studies with verified results will be published here as engagements are completed and clients approve publication.
            </p>
            <p className="text-sm text-charcoal/50 mb-8">
              We do not publish unverified results or fabricated testimonials. Every case study will include real data from real operations.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal hover:bg-teal/90 text-white font-medium rounded-lg transition-all shadow-lg shadow-teal/25 hover:shadow-xl hover:-translate-y-0.5 group"
            >
              Discuss your project with us 
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      <CTASection />
    </div>
  );
}
