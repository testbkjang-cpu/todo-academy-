import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import positioningMap from "../../imports/positioningMap.png";

export function TodoConnectionSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const tc = t.todoComparison;
  const conn = t.todoConnection;
  const lg = conn.levelGuide;

  const levels = [lg.levelCards.level1, lg.levelCards.level2, lg.levelCards.level3, lg.levelCards.level4, lg.levelCards.level5];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Positioning Map */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full mb-4">{tc.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 whitespace-pre-line">{tc.title}</h2>
          <img src={positioningMap} alt="포지셔닝 맵" className="mt-8 max-w-2xl mx-auto rounded-2xl w-full" />
          <p className="mt-6 text-gray-500" dangerouslySetInnerHTML={{ __html: tc.summaryCopy }} />
        </div>

        {/* Level Guide */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4 whitespace-pre-line">{lg.title}</h3>
          <p className="text-center text-gray-500 mb-12 whitespace-pre-line">{lg.subCopy}</p>

          {/* Diagnostic Flow */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            {[lg.diagnosticFlow.step1, lg.diagnosticFlow.step2, lg.diagnosticFlow.step3].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="bg-indigo-50 px-6 py-4 rounded-xl text-center min-w-[180px]">
                  <span className="text-xs font-bold text-indigo-600">0{i + 1}</span>
                  <h4 className="font-bold text-gray-900 mt-1">{step.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
                </div>
                {i < 2 && <span className="hidden md:block text-gray-300 text-2xl">→</span>}
              </div>
            ))}
          </div>

          {/* Level Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {levels.map((lv, i) => (
              <div key={i} className={`relative p-5 pt-8 rounded-2xl border ${'comingSoon' in lv && lv.comingSoon ? 'bg-gray-50 border-gray-200 opacity-60' : 'bg-white border-indigo-100 shadow-sm'}`}>
                {'comingSoon' in lv && lv.comingSoon && (
                  <span className="absolute top-2 right-2 text-[10px] leading-tight bg-gray-200 text-gray-500 px-2 py-1 rounded-full text-center">Coming<br/>Soon</span>
                )}
                <span className="text-xs text-indigo-600 font-medium">{lv.eikenBadge}</span>
                <p className="text-xs text-gray-400 mt-1">{lv.targetGrade}</p>
                <h4 className="mt-3 font-bold text-indigo-600 text-lg">{lv.levelLabel}</h4>
                <h5 className="mt-1 font-semibold text-gray-900 text-sm">{lv.title}</h5>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed whitespace-pre-line">{lv.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8 whitespace-pre-line">{lg.reassuranceText}</p>
          <div className="text-center mt-6">
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition">{lg.ctaButton}</button>
          </div>
        </div>

      </div>
    </section>
  );
}
