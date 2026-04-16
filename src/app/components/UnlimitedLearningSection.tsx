import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

function GrowthChart() {
  // 일별 학습(기본) + 추가 학습으로 쌓이는 실력 성장 그래프
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const baseValues = [30, 32, 35, 34, 38, 36, 40];
  const extraValues = [8, 12, 10, 15, 12, 18, 16];
  const maxVal = 70;
  const barWidth = 36;
  const gap = 16;
  const chartH = 160;
  const chartW = days.length * (barWidth + gap) - gap;
  const padL = 40;
  const padB = 28;
  const padT = 16;

  return (
    <svg viewBox={`0 0 ${chartW + padL + 20} ${chartH + padB + padT}`} className="w-full h-auto">
      {/* Y-axis gridlines */}
      {[0, 0.25, 0.5, 0.75, 1].map((r, i) => {
        const y = padT + chartH * (1 - r);
        return (
          <g key={i}>
            <line x1={padL} y1={y} x2={chartW + padL} y2={y} stroke="#e5e7eb" strokeWidth={1} strokeDasharray={i > 0 ? "4 4" : "0"} />
          </g>
        );
      })}

      {/* Bars */}
      {days.map((day, i) => {
        const x = padL + i * (barWidth + gap);
        const baseH = (baseValues[i] / maxVal) * chartH;
        const extraH = (extraValues[i] / maxVal) * chartH;
        const baseY = padT + chartH - baseH;
        const extraY = baseY - extraH;

        return (
          <g key={i}>
            {/* Extra learning (top, lighter) */}
            <rect x={x} y={extraY} width={barWidth} height={extraH} rx={6} ry={6} fill="url(#extraGrad)" />
            {/* Base learning (bottom, solid) */}
            <rect x={x} y={baseY} width={barWidth} height={baseH} rx={6} ry={6} fill="url(#baseGrad)" />
            {/* Overlap fix: cover top corners of base bar */}
            <rect x={x} y={baseY - 2} width={barWidth} height={8} fill="url(#extraGrad)" />
            {/* Day label */}
            <text x={x + barWidth / 2} y={padT + chartH + 18} textAnchor="middle" fill="#9ca3af" fontSize={11} fontWeight={500}>{day}</text>
          </g>
        );
      })}

      {/* Trend line connecting tops */}
      <polyline
        points={days.map((_, i) => {
          const x = padL + i * (barWidth + gap) + barWidth / 2;
          const totalH = ((baseValues[i] + extraValues[i]) / maxVal) * chartH;
          const y = padT + chartH - totalH;
          return `${x},${y}`;
        }).join(" ")}
        fill="none"
        stroke="#6366f1"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0"
      />

      {/* Dots on trend line */}
      {days.map((_, i) => {
        const x = padL + i * (barWidth + gap) + barWidth / 2;
        const totalH = ((baseValues[i] + extraValues[i]) / maxVal) * chartH;
        const y = padT + chartH - totalH;
        return <circle key={i} cx={x} cy={y} r={4} fill="#6366f1" stroke="#fff" strokeWidth={2} />;
      })}

      {/* Gradients */}
      <defs>
        <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="extraGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function UnlimitedLearningSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.unlimited.h2}</h2>
        <p className="text-gray-500 mb-8">{t.unlimited.sub}</p>

        <div className="bg-white p-8 rounded-2xl shadow-sm max-w-2xl mx-auto mb-8 text-left">
          <ul className="space-y-3">
            {t.unlimited.bullets.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600 leading-relaxed">
                <span className="text-indigo-500 font-bold mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-lg mx-auto bg-white p-6 pb-4 rounded-2xl shadow-sm">
          <p className="text-sm font-semibold text-gray-700 mb-4">{t.unlimited.chartLabel}</p>
          <GrowthChart />
          <div className="flex justify-center gap-6 mt-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-indigo-500 inline-block" />
              <span className="text-xs text-gray-500">일별 학습</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-indigo-300 inline-block" />
              <span className="text-xs text-gray-500">추가 학습</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
