import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function CurriculumFullSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const c = t.curriculum;
  const [activeTab, setActiveTab] = useState(0);

  const tabBlocks = activeTab === 0 ? c.tab1Blocks : activeTab === 1 ? c.tab2Blocks : c.tab3Blocks;

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Roadmap tabs */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">{c.roadmapH3}</h3>
          <div className="flex justify-center gap-2 mb-8">
            {c.tabs.map((tab, i) => (
              <button key={i} onClick={() => setActiveTab(i)} className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${activeTab === i ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{tab}</button>
            ))}
          </div>
          <div className="space-y-6">
            {tabBlocks.map((block: any, i: number) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{block.label}</span>
                <h4 className="mt-3 text-xl font-bold text-gray-900">{block.title}</h4>
                {block.body && <p className="mt-2 text-sm text-gray-500">{block.body}</p>}
                {block.levels && (
                  <div className="mt-4 space-y-3">
                    {block.levels.map((lv: any, j: number) => (
                      <div key={j} className="flex flex-col sm:flex-row sm:items-start gap-3 bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{lv.range}</span>
                          <span className="text-gray-400">=</span>
                          <span className="text-sm font-semibold text-gray-900 bg-gray-200 px-3 py-1 rounded-full">{lv.mapped}</span>
                        </div>
                        <p className="text-sm text-gray-600">{lv.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
                {block.steps.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {block.steps.map((step: string, j: number) => (
                      <span key={j} className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">{step}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Expert */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">{c.expertH3}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {c.expertCards.map((card, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{card.role}</span>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
