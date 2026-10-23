import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';

export function Navbar() {
  const { lang, setLang, t, dir } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/digital-solutions', label: t('nav.digital') },
    { to: '/packages', label: t('nav.packages') },
    { to: '/methodology', label: t('nav.methodology') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-sm shadow-lg' : 'bg-navy'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-tight">
              Namow<span className="text-teal">KSA</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.to
                    ? 'text-teal bg-teal/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-white/80 hover:text-white border border-white/20 rounded-md transition-colors"
              aria-label="Switch language"
            >
              <Globe size={14} />
              <span>{lang === 'en' ? 'عربي' : 'EN'}</span>
            </button>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-white bg-teal hover:bg-teal/90 rounded-md transition-colors"
            >
              {t('nav.bookConsultation')}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2.5 text-sm font-medium rounded-md ${
                  location.pathname === link.to
                    ? 'text-teal bg-teal/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex items-center gap-3 border-t border-white/10 mt-3">
              <button
                onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-white/80 border border-white/20 rounded-md"
              >
                <Globe size={14} />
                <span>{lang === 'en' ? 'عربي' : 'EN'}</span>
              </button>
              <Link
                to="/contact"
                className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-teal rounded-md"
              >
                {t('nav.bookConsultation')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  const { t, dir } = useI18n();

  return (
    <footer className="bg-navy text-white/80" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              Namow<span className="text-teal">KSA</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">{t('footer.desc')}</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="tel:+966XXXXXXXXX" className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition-colors">
                <Phone size={16} />
              </a>
              <a href="mailto:info@namowksa.com" className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm hover:text-teal transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="text-sm hover:text-teal transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/packages" className="text-sm hover:text-teal transition-colors">{t('nav.packages')}</Link></li>
              <li><Link to="/methodology" className="text-sm hover:text-teal transition-colors">{t('nav.methodology')}</Link></li>
              <li><Link to="/case-studies" className="text-sm hover:text-teal transition-colors">{t('nav.caseStudies')}</Link></li>
              <li><Link to="/insights" className="text-sm hover:text-teal transition-colors">{t('nav.insights')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2.5">
              <li><Link to="/services/operations" className="text-sm hover:text-teal transition-colors">{t('svc.ops.title')}</Link></li>
              <li><Link to="/services/menu-engineering" className="text-sm hover:text-teal transition-colors">{t('svc.menu.title')}</Link></li>
              <li><Link to="/services/food-costing" className="text-sm hover:text-teal transition-colors">{t('svc.cost.title')}</Link></li>
              <li><Link to="/services/inventory" className="text-sm hover:text-teal transition-colors">{t('svc.inventory.title')}</Link></li>
              <li><Link to="/services/staffing" className="text-sm hover:text-teal transition-colors">{t('svc.staff.title')}</Link></li>
              <li><Link to="/services/food-safety" className="text-sm hover:text-teal transition-colors">{t('svc.safety.title')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t('footer.digital')}</h4>
            <ul className="space-y-2.5">
              <li><Link to="/digital/qr-menus" className="text-sm hover:text-teal transition-colors">{t('digital.1.title')}</Link></li>
              <li><Link to="/digital/websites" className="text-sm hover:text-teal transition-colors">{t('digital.2.title')}</Link></li>
              <li><Link to="/digital/dashboards" className="text-sm hover:text-teal transition-colors">{t('digital.3.title')}</Link></li>
              <li><Link to="/digital/automation" className="text-sm hover:text-teal transition-colors">{t('digital.4.title')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} NamowKSA. {t('footer.rights')}</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-sm hover:text-teal transition-colors">{t('footer.privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '';
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello NamowKSA, I would like to discuss a restaurant consultancy project.')}`
    : '#';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
      aria-label="Contact us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { dir } = useI18n();

  return (
    <div dir={dir} className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
