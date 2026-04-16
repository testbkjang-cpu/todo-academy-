import todaysLearningImg from "../../imports/today'sLearning.png";
import weeklyLeagueImg from "../../imports/weeklyLeague.png";
import evalReportImg from "../../imports/evalReport.png";

const cards = [
  { emoji: "📋", title: "오늘의 학습", desc: "매일 할 분량이 카드 형태로 제공됩니다. 무엇을 얼마나 해야 할지 고민 없이, 체계적인 하루 권장학습으로 꾸준한 학습 습관을 만들어갑니다.", img: todaysLearningImg },
  { emoji: "🏆", title: "주간 리그", desc: "EXP를 모으며 공부하는 재미. 리그에 참여하여 \"또 하고 싶은\" 동기가 생깁니다.", img: weeklyLeagueImg },
  { emoji: "📊", title: "학습 리포트", desc: "아이는 마이페이지에서, 부모님은 학습 리포트를 통해 학습 내용과 성과를 확인할 수 있습니다.", img: evalReportImg },
];

export function DailyStudySection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            매일 스스로 성장하는 습관이 만들어집니다.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            하루 한 레슨의 체계적인 학습 설계, 꾸준히 하고 싶어지는 동기부여 시스템, 그리고 성장을 확인할 수 있는 분석 리포트까지 — 아이가 스스로 학습하는 루틴이 자연스럽게 만들어집니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img src={card.img} alt={card.title} className="w-full aspect-[4/3] object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{card.emoji}</span>
                  <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
