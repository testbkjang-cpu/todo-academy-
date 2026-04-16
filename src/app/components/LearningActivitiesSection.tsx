import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function LearningActivitiesSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const sw = t.learningActivities.speakingWriting;
  const ai = t.learningActivities.aiLearning;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-4">{t.learningActivities.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 whitespace-pre-line">{t.learningActivities.title}</h2>
          <p className="mt-4 text-gray-500 whitespace-pre-line">{t.learningActivities.subtitle}</p>
        </div>

        {/* Speaking & Writing */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{sw.sectionTitle}</h3>
          <p className="text-center text-gray-500 mb-12">{sw.sectionDesc}</p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Speaking */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{sw.speakingTitle}</h4>
              <p className="text-sm text-gray-500 mb-4">AI 캐릭터와의 실시간 영상 대화 및 정밀한 피드백을 통해 회화 실력이 향상됩니다.</p>
              <div className="w-full aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm mb-6">{sw.speakingPlaceholder}</div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-5 rounded-xl">
                  <h5 className="font-semibold text-gray-900 mb-1">{sw.pronunciationTitle}</h5>
                  <p className="text-sm text-gray-600">{sw.pronunciationDesc}</p>
                </div>
                <div className="bg-blue-50 p-5 rounded-xl">
                  <h5 className="font-semibold text-gray-900 mb-1">{sw.conversationTitle}</h5>
                  <p className="text-sm text-gray-600">{sw.conversationDesc}</p>
                </div>
              </div>
            </div>

            {/* Writing */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{sw.writingTitle}</h4>
              <p className="text-sm text-gray-500 mb-4">{sw.writingIntro}</p>
              <div className="w-full aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm mb-6">{sw.writingPlaceholder}</div>
              <div className="space-y-4">
                <div className="bg-purple-50 p-5 rounded-xl">
                  <h5 className="font-semibold text-gray-900 mb-1">{sw.sentenceTitle}</h5>
                  <p className="text-sm text-gray-600">{sw.sentenceDesc}</p>
                </div>
                <div className="bg-purple-50 p-5 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-semibold text-gray-900">{sw.essayTitle}</h5>
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">{sw.levelBadge}</span>
                  </div>
                  <p className="text-sm text-gray-600">{sw.essayDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Learning Recommendations */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{ai.sectionTitle}</h3>
          <p className="text-center text-gray-500 mb-12">{ai.sectionDesc}</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3">{ai.vocabTitle}</h4>
              <p className="text-sm text-gray-600 mb-4">{ai.vocabDesc}</p>
              <div className="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">{ai.vocabPlaceholder}</div>
            </div>
            <div className="bg-sky-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3">{ai.lessonTitle}</h4>
              <p className="text-sm text-gray-600 mb-4">{ai.lessonDesc}</p>
              <div className="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">{ai.lessonPlaceholder}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
