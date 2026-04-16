import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

import boggleImg from "../../imports/boggle.png";
import bubbleImg from "../../imports/bubble.png";
import riddleImg from "../../imports/riddle.png";
import sentenceBlocksImg from "../../imports/SentenceBlocks.png";
import listeningImg from "../../imports/listening.png";
import readingFluencyImg from "../../imports/readingFluency.png";
import findOutImg from "../../imports/findOut.png";
import storyBuilderImg from "../../imports/storyBuilder.png";
import cardSortingImg from "../../imports/cardSorting.png";
import freeTalkImg from "../../imports/freeTalk.png";
import opinionWritingImg from "../../imports/opinionWriting.png";
import writingBuddiesImg from "../../imports/writingBuddies.png";

const activityImages: Record<string, string> = {
  "보글 Boggle": boggleImg,
  "버블 Bubble": bubbleImg,
  "리들 Riddle": riddleImg,
  "센텐스블록 Sentence Blocks": sentenceBlocksImg,
  "리스닝 Listening": listeningImg,
  "리딩 플루언시 Reading Fluency": readingFluencyImg,
  "파인드아웃 FindOut": findOutImg,
  "스토리빌더 Story Builder": storyBuilderImg,
  "카드소팅 Card Sorting": cardSortingImg,
  "자유대화 Free Talk": freeTalkImg,
  "오피니언 라이팅 Opinion Writing": opinionWritingImg,
  "라이팅 버디 Writing Buddies": writingBuddiesImg,
};

export function AIActivitySection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const af = t.aiFeedbackActivities;

  const groups = [
    {
      title: af.group1Title,
      desc: af.group1Desc,
      emoji: "🧩",
      color: "bg-blue-50",
      activities: [af.boggle, af.bubble, af.riddle, af.sentenceBlocks],
    },
    {
      title: af.group2Title,
      desc: af.group2Desc,
      emoji: "🎯",
      color: "bg-amber-50",
      activities: [af.listening, af.readingFluency, af.findOut, af.storyBuilder, af.cardSorting],
    },
    {
      title: af.group3Title,
      desc: af.group3Desc,
      emoji: "✍️",
      color: "bg-green-50",
      activities: [af.freeTalk, af.opinionWriting, af.writingBuddies],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full mb-4">{t.aiActivity.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 whitespace-pre-line">{af.subTitle}</h2>
          <p className="mt-4 text-gray-500 whitespace-pre-line">{af.subCopy}</p>
        </div>

        <div className="space-y-16">
          {groups.map((group, gi) => (
            <div key={gi}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.emoji}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{group.title}</h3>
                  <p className="text-sm text-gray-500">{group.desc}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.activities.map((act, ai2) => (
                  <div key={ai2} className={`${group.color} p-5 rounded-2xl border border-gray-100`}>
                    <img
                      src={activityImages[act.name]}
                      alt={act.name}
                      className="w-full aspect-[3/2] object-cover rounded-xl mb-4"
                    />
                    <h4 className="font-bold text-gray-900">{act.name}</h4>
                    <p className="text-sm text-indigo-600 font-medium mt-1">{act.hook}</p>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">{act.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="text-xs bg-white/70 text-gray-500 px-2 py-0.5 rounded-full">{act.tag1}</span>
                      <span className="text-xs bg-white/70 text-gray-500 px-2 py-0.5 rounded-full">{act.tag2}</span>
                      <span className="text-xs bg-white/70 text-gray-500 px-2 py-0.5 rounded-full">{act.tag3}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
