import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">{t.brandName}</h3>
            <p className="text-sm leading-relaxed">{t.footer.desc1}</p>
            <p className="text-sm leading-relaxed mt-1">{t.footer.desc2}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">{t.footer.serviceTitle}</h4>
            <ul className="space-y-2">
              {t.footer.serviceLinks.map((link, i) => (
                <li key={i}><a href="#" className="text-sm hover:text-white transition">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">{t.footer.supportTitle}</h4>
            <ul className="space-y-2">
              {t.footer.supportLinks.map((link, i) => (
                <li key={i}><a href="#" className="text-sm hover:text-white transition">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-sm text-gray-500">
          <p>{t.footer.copyright}</p>
          <p className="mt-1">{t.footer.biz}</p>
        </div>
      </div>
    </footer>
  );
}
