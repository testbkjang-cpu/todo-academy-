import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import miaImg from "../../imports/mia.png";
import leoImg from "../../imports/leo.png";
import paulImg from "../../imports/paul.png";
import emmaImg from "../../imports/emma.png";

const coachImages: Record<string, string> = {
  Mia: miaImg,
  Leo: leoImg,
  Paul: paulImg,
  Emma: emmaImg,
};

export function PersonalizedLearningSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const steps = [
    { label: t.aiCoachIntro.step1Label, title: t.aiCoachIntro.step1Title, desc: t.aiCoachIntro.step1Desc, quote: t.aiCoachIntro.step1Quote },
    { label: t.aiCoachIntro.step2Label, title: t.aiCoachIntro.step2Title, desc: t.aiCoachIntro.step2Desc, quote: t.aiCoachIntro.step2Quote },
    { label: t.aiCoachIntro.step3Label, title: t.aiCoachIntro.step3Title, desc: t.aiCoachIntro.step3Desc, quote: t.aiCoachIntro.step3Quote },
    { label: t.aiCoachIntro.step4Label, title: t.aiCoachIntro.step4Title, desc: t.aiCoachIntro.step4Desc, quote: t.aiCoachIntro.step4Quote },
  ];

  return (
    <section id="service" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 3 intro */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-4">{t.section3.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            {t.section3.h2line1}<br />{t.section3.h2line2}
          </h2>
          <p className="mt-4 text-gray-500">{t.section3.p1}</p>
          <p className="text-gray-500">{t.section3.p2}</p>
        </div>

        {/* AI Coach Timeline — 이미지 없이 텍스트만 */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4 whitespace-pre-line">{t.aiCoachIntro.sectionTitle}</h3>
          <p className="text-center text-gray-500 mb-12 whitespace-pre-line">{t.aiCoachIntro.sectionSubCopy}</p>
          <div className="relative max-w-3xl mx-auto">
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-200" />
            <div className="space-y-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="hidden md:flex w-12 h-12 bg-indigo-600 text-white rounded-full items-center justify-center font-bold text-sm shrink-0 z-10">{i + 1}</div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{step.label}</span>
                    <h4 className="mt-3 text-xl font-bold text-gray-900">{step.title}</h4>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    <div className="mt-3 bg-indigo-50 border border-indigo-100 rounded-xl p-4 inline-block">
                      <p className="text-sm text-indigo-700 italic">&ldquo;{step.quote}&rdquo;</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Tutors */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">{t.personalized.tutorsH3}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.personalized.tutors.map((tutor, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <img src={coachImages[tutor.name]} alt={tutor.name} className="w-20 h-20 rounded-full object-cover mb-4" />
                <h4 className="font-bold text-gray-900 text-lg">{tutor.name}</h4>
                <p className="mt-1 text-sm text-gray-500">{tutor.role}</p>
                <p className="mt-3 text-sm text-gray-600">{tutor.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {tutor.tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Modes */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">{t.personalized.modesH3}</h3>
          <p className="text-center text-gray-500 mb-2">{t.personalized.modesSub1}</p>
          <p className="text-center text-gray-500 mb-12">{t.personalized.modesSub2}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {t.personalized.modes.map((mode, i) => (
              <div key={i} className={`relative p-8 rounded-2xl border ${i === 0 ? "bg-blue-50 border-blue-200" : "bg-orange-50 border-orange-200"}`}>
                {/* 코치 프로필 이미지 — 우측 상단 */}
                <div className="absolute top-4 right-4 flex -space-x-2">
                  {i === 0 ? (
                    <>
                      <img src={miaImg} alt="Mia" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                      <img src={leoImg} alt="Leo" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    </>
                  ) : (
                    <>
                      <img src={paulImg} alt="Paul" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                      <img src={emmaImg} alt="Emma" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    </>
                  )}
                </div>
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${i === 0 ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"}`}>{mode.badge}</span>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{mode.title}</h4>
                <p className="text-sm text-gray-500 mb-4">{mode.subtitle}</p>
                <ul className="space-y-2">
                  {mode.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
