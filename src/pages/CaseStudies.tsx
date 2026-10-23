import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { Section, SectionTitle, CTASection } from '../components/Shared';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const { t, dir } = useI18n();

  return (
    <div dir={dir}>
      <div className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{t('nav.caseStudies')}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Real results from real restaurant operations. Case studies will be published as client engagements are completed and verified.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className="w-20 h-20 mx-auto bg-ivory rounded-full flex items-center justify-center mb-6">
            <ArrowRight size={32} className="text-sage" />
          </div>
          <h3 className="text-xl font-semibold text-navy mb-3">Case Studies Coming Soon</h3>
          <p className="text-charcoal/70 mb-6">
            We are currently working with restaurant operators across Saudi Arabia. Detailed case studies with verified results will be published here as engagements are completed and clients approve publication.
          </p>
          <p className="text-sm text-charcoal/50">
            We do not publish unverified results or fabricated testimonials. Every case study will include real data from real operations.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-teal font-medium hover:underline">
            Discuss your project with us <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
