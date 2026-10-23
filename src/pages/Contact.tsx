import { useState } from 'react';
import { useI18n } from '../i18n';
import { Section, CTASection } from '../components/Shared';
import { Send, Phone, Mail, MapPin, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const { t, dir } = useI18n();
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = t('contact.required');
    if (!formData.email.trim()) newErrors.email = t('contact.required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = t('contact.invalidEmail');
    if (!formData.message.trim()) newErrors.message = t('contact.required');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate submission - in production, this would call an API
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
    }
  };

  const services = [
    t('svc.ops.title'),
    t('svc.menu.title'),
    t('svc.cost.title'),
    t('svc.inventory.title'),
    t('svc.staff.title'),
    t('svc.safety.title'),
    t('svc.launch.title'),
    t('digital.1.title'),
    t('digital.2.title'),
    t('digital.3.title'),
    t('digital.4.title'),
  ];

  if (submitted) {
    return (
      <div dir={dir}>
        <div className="bg-navy py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">{t('contact.title')}</h1>
          </div>
        </div>
        <Section>
          <div className="max-w-md mx-auto text-center py-12">
            <div className="w-16 h-16 mx-auto bg-teal/10 rounded-full flex items-center justify-center mb-6">
              <Check size={32} className="text-teal" />
            </div>
            <h2 className="text-2xl font-bold text-navy mb-3">{t('contact.success')}</h2>
            <p className="text-charcoal/70">
              We'll review your message and get back to you within 1-2 business days.
            </p>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div dir={dir}>
      <div className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{t('contact.title')}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">{t('contact.name')} *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => handleChange('name', e.target.value)}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition-colors ${errors.name ? 'border-red-400' : 'border-sage/30'}`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">{t('contact.email')} *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => handleChange('email', e.target.value)}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition-colors ${errors.email ? 'border-red-400' : 'border-sage/30'}`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">{t('contact.phone')}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    className="w-full px-4 py-2.5 border border-sage/30 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">{t('contact.company')}</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => handleChange('company', e.target.value)}
                    className="w-full px-4 py-2.5 border border-sage/30 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">{t('contact.service')}</label>
                <select
                  value={formData.service}
                  onChange={e => handleChange('service', e.target.value)}
                  className="w-full px-4 py-2.5 border border-sage/30 rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition-colors bg-white"
                >
                  <option value="">--</option>
                  {services.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">{t('contact.message')} *</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={e => handleChange('message', e.target.value)}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-sage/30'}`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-8 py-3 bg-teal hover:bg-teal/90 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
              >
                {submitting ? '...' : <><Send size={16} /> {t('contact.submit')}</>}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-ivory rounded-xl border border-sage/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center bg-teal/10 text-teal rounded-lg">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">Phone</p>
                  <p className="text-sm text-charcoal/60">Available on request</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-ivory rounded-xl border border-sage/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center bg-teal/10 text-teal rounded-lg">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">Email</p>
                  <p className="text-sm text-charcoal/60">info@namowksa.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-ivory rounded-xl border border-sage/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center bg-teal/10 text-teal rounded-lg">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">Location</p>
                  <p className="text-sm text-charcoal/60">Saudi Arabia</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-navy rounded-xl text-white">
              <h4 className="font-semibold mb-2">Response Time</h4>
              <p className="text-sm text-white/70">We typically respond to enquiries within 1-2 business days. For urgent matters, please indicate in your message.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
