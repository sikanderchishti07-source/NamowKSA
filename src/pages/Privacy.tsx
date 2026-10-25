import { useI18n } from '../i18n';
import { Section } from '../components/Shared';

export default function Privacy() {
  const { dir } = useI18n();

  return (
    <div dir={dir}>
      <div className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-3 text-white/60 text-sm">Last updated: January 2025</p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto prose prose-sm">
          <div className="space-y-8 text-charcoal/80">
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">1. Introduction</h2>
              <p className="leading-relaxed">
                NamowKSA ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or engage our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">2. Information We Collect</h2>
              <p className="leading-relaxed mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email, phone number) when you submit enquiry forms</li>
                <li>Business information (company name, restaurant details) provided during consultations</li>
                <li>Communication preferences and correspondence history</li>
                <li>Technical information (IP address, browser type, device information) through website analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your enquiries and provide requested services</li>
                <li>Communicate about our consultancy services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">4. Data Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information only when required by law, to protect our rights, or with your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">6. Data Retention</h2>
              <p className="leading-relaxed">
                We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">7. Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us through the details provided on our contact page.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">8. Cookies</h2>
              <p className="leading-relaxed">
                Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">9. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">10. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us through our website contact form.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
