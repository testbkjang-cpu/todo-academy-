import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function FloatingCTAButton() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
      <a
        href="#cta"
        className="pointer-events-auto w-full md:w-1/3 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition text-sm text-center shadow-lg shadow-indigo-300/40"
      >
        🎁 {t.floatingCta}
      </a>
    </div>
  );
}
