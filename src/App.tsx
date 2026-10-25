import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { I18nContext, translations, type Lang } from './i18n';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import { ServicesOverview, OperationsPage, MenuEngineeringPage, FoodCostingPage, InventoryPage, StaffingPage, FoodSafetyPage, LaunchPage } from './pages/Services';
import { DigitalOverview, QRMenusPage, WebsitesPage, DashboardsPage, AutomationPage } from './pages/DigitalSolutions';
import Packages from './pages/Packages';
import Methodology from './pages/Methodology';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('namowksa-lang');
    return (saved === 'ar' ? 'ar' : 'en') as Lang;
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('namowksa-lang', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir }}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/operations" element={<OperationsPage />} />
          <Route path="/services/menu-engineering" element={<MenuEngineeringPage />} />
          <Route path="/services/food-costing" element={<FoodCostingPage />} />
          <Route path="/services/inventory" element={<InventoryPage />} />
          <Route path="/services/staffing" element={<StaffingPage />} />
          <Route path="/services/food-safety" element={<FoodSafetyPage />} />
          <Route path="/services/launch" element={<LaunchPage />} />
          <Route path="/digital-solutions" element={<DigitalOverview />} />
          <Route path="/digital/qr-menus" element={<QRMenusPage />} />
          <Route path="/digital/websites" element={<WebsitesPage />} />
          <Route path="/digital/dashboards" element={<DashboardsPage />} />
          <Route path="/digital/automation" element={<AutomationPage />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </I18nContext.Provider>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
