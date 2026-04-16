import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import heroBg from "../../imports/heroBg.png";

export function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="relative pt-28 pb-24 md:pt-40 md:pb-36 overflow-hidden">
      {/* 배경 이미지 + 어두운 오버레이 */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-6 border border-white/20">
          {t.hero.badge}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          우리 아이만의<br />
          <span className="text-indigo-300">AI 영어 코치</span>가<br />
          매일 함께합니다
        </h1>
        <p className="mt-6 text-lg text-gray-200 leading-relaxed">
          목표 설정부터 실시간 피드백, 학습 관리까지 — 학습의 모든 과정을 함께합니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a href="#cta" className="px-8 py-3.5 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition shadow-lg">{t.hero.ctaPrimary}</a>
          <a href="#service" className="px-8 py-3.5 text-white font-semibold hover:text-indigo-200 transition border border-white/30 rounded-full">{t.hero.ctaSecondary}</a>
        </div>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {[
            { bold: "4가지 영역", label: "균형 학습" },
            { bold: "1:1", label: "AI 코치" },
            { bold: "EIKEN", label: "대응 커리큘럼" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-xl border border-white/15">
              <span className="text-indigo-300 font-bold text-lg">{s.bold}</span>
              <span className="text-gray-200 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="text-white/50 text-sm mt-14 animate-bounce">{t.hero.scroll}</p>
      </div>
    </section>
  );
}
