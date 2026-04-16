import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import imgPublicEduc from "../../imports/imgPublicEduc.png";
import imgAdvanced from "../../imports/imgAdvanced.png";
import imgEarlyStart from "../../imports/imgEarlyStart.png";
import imgSchoolSupport from "../../imports/imgSchoolSupport.png";

const cardImages = [imgPublicEduc, imgAdvanced, imgEarlyStart, imgSchoolSupport];

export function TargetAudienceSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="target" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-4">{t.target.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            {t.target.h2line1}<br />{t.target.h2line2}<br />{t.target.h2line3}
          </h2>
          <p className="mt-4 text-gray-500">{t.target.sub}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.target.cards.map((card, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={cardImages[i]} alt={card.title} className="w-full aspect-[4/3] object-cover" />
              <div className="p-5">
                <span className="text-xs text-indigo-600 font-medium">{card.badge}</span>
                <h3 className="mt-2 font-bold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
