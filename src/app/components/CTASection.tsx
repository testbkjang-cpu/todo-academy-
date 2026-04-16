import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const plans = [
  {
    name: "월간 플랜",
    period: "1개월",
    price: "¥3,100",
    priceUnit: "/월",
    discountPrice: null,
    discountRate: null,
    couponPrice: null,
    couponRate: null,
    recommended: false,
  },
  {
    name: "6개월 플랜",
    period: "6개월",
    price: "¥18,600",
    priceUnit: "",
    monthlyPrice: "¥3,100/월",
    discountPrice: "¥17,670",
    discountMonthly: "¥2,945/월",
    discountRate: "5%",
    couponPrice: "¥16,740",
    couponMonthly: "¥2,790/월",
    couponRate: "10%",
    recommended: false,
  },
  {
    name: "12개월 플랜",
    period: "12개월",
    price: "¥37,200",
    priceUnit: "",
    monthlyPrice: "¥3,100/월",
    discountPrice: "¥33,480",
    discountMonthly: "¥2,790/월",
    discountRate: "10%",
    couponPrice: "¥29,760",
    couponMonthly: "¥2,480/월",
    couponRate: "20%",
    recommended: true,
  },
];

export function CTASection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="cta" className="py-20 md:py-28 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* 제목 */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            {t.cta.h2line1}<br />{t.cta.h2line2}
          </h2>
        </div>

        {/* 요금제 카드 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white text-gray-900 rounded-2xl p-6 flex flex-col ${
                plan.recommended
                  ? "border-3 border-[#FFD541] shadow-xl scale-[1.03]"
                  : "border border-gray-200"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFD541] text-gray-900 text-xs font-bold px-4 py-1 rounded-full shadow">
                  {t.cta.recommended}
                </span>
              )}

              <h3 className="text-lg font-bold text-gray-900 mt-1">{plan.name}</h3>
              <p className="text-xs text-gray-400 mb-4">{plan.period} · 1인</p>

              {/* 정가 */}
              <div className="mb-3">
                <p className="text-xs text-gray-400">{t.cta.regularLabel}</p>
                <p className={`text-lg font-semibold ${plan.discountPrice ? "line-through text-gray-300" : "text-gray-900"}`}>
                  {plan.price}
                  {plan.priceUnit && <span className="text-sm font-normal">{plan.priceUnit}</span>}
                </p>
                {plan.monthlyPrice && !plan.discountPrice && (
                  <p className="text-xs text-gray-400">월환산 {plan.monthlyPrice}</p>
                )}
              </div>

              {/* 할인가 */}
              {plan.discountPrice && (
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-400">{t.cta.discountedLabel}</p>
                    <span className="text-xs font-semibold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">-{plan.discountRate}</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{plan.discountPrice}</p>
                  {plan.discountMonthly && (
                    <p className="text-xs text-gray-400">월환산 {plan.discountMonthly}</p>
                  )}
                </div>
              )}

              {/* 웰컴쿠폰가 */}
              {plan.couponPrice && (
                <div className="mb-4 bg-indigo-50 -mx-2 px-4 py-3 rounded-xl">
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-indigo-600 font-medium">{t.cta.couponLabel}</p>
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-1.5 py-0.5 rounded">-{plan.couponRate}</span>
                  </div>
                  <p className="text-xl font-bold text-indigo-600">{plan.couponPrice}</p>
                  {plan.couponMonthly && (
                    <p className="text-xs text-indigo-500">월환산 {plan.couponMonthly}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 설명 문구 */}
        <p className="text-center text-indigo-100 leading-relaxed mb-8">{t.cta.p}</p>

        {/* CTA 버튼 */}
        <div className="text-center mb-10">
          <button className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-full text-lg hover:bg-indigo-50 transition shadow-lg">
            {t.cta.primaryBtn}
          </button>
        </div>

        {/* 신뢰 배지 */}
        <div className="flex flex-wrap justify-center gap-6">
          {t.cta.trust.map((item, i) => (
            <span key={i} className="text-sm text-indigo-200">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
