import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const sampleReviews = [
  { name: "김민지 어머니", child: "초등 6학년", rating: 5, text: "아이가 매일 스스로 학습하는 습관이 생겼어요. AI 코치가 아이의 감정까지 살펴주니 안심이 됩니다." },
  { name: "박서연 어머니", child: "중학교 1학년", rating: 5, text: "영어 말하기에 자신감이 없던 아이가 이제는 AI와 자연스럽게 대화해요. 발음도 많이 좋아졌습니다." },
  { name: "이준호 아버지", child: "초등 5학년", rating: 5, text: "체계적인 커리큘럼과 맞춤 리포트 덕분에 아이의 영어 성장 과정을 한눈에 확인할 수 있어 좋습니다." },
];

export function ReviewsSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full mb-4">{t.reviews.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.reviews.h2}</h2>
          <p className="mt-4 text-gray-500">{t.reviews.sub}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {sampleReviews.slice(0, showAll ? sampleReviews.length : 3).map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">img</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.child}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400">&#9733;</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button onClick={() => setShowAll(!showAll)} className="text-indigo-600 font-medium text-sm hover:underline">
            {showAll ? t.reviews.collapse : t.reviews.showMore}
          </button>
        </div>
      </div>
    </section>
  );
}
