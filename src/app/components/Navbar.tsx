import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function Navbar() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold text-indigo-600">{t.brandName}</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#service" className="text-sm text-gray-600 hover:text-indigo-600 transition">{t.nav.service}</a>
            <a href="#target" className="text-sm text-gray-600 hover:text-indigo-600 transition">{t.nav.target}</a>
            <a href="#reviews" className="text-sm text-gray-600 hover:text-indigo-600 transition">{t.nav.reports}</a>
            <button className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition">{t.nav.start}</button>
          </div>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#service" className="block px-4 py-2 text-sm text-gray-600">{t.nav.service}</a>
            <a href="#target" className="block px-4 py-2 text-sm text-gray-600">{t.nav.target}</a>
            <a href="#reviews" className="block px-4 py-2 text-sm text-gray-600">{t.nav.reports}</a>
            <button className="w-full px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full">{t.nav.start}</button>
          </div>
        )}
      </div>
    </nav>
  );
}
