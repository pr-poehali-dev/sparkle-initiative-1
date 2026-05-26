import { Award, Clock, ShieldCheck, Ruler, ThumbsUp, Phone } from 'lucide-react';

const advantages = [
  {
    icon: Award,
    title: '15 лет опыта',
    desc: 'Работаем с 2009 года. За это время сдали более 800 объектов — от дачных домиков до коттеджей 500 м².',
  },
  {
    icon: ShieldCheck,
    title: 'Гарантия 5 лет',
    desc: 'Даём письменную гарантию на все виды работ. При любых проблемах — устраняем бесплатно.',
  },
  {
    icon: Clock,
    title: 'Сроки не срываем',
    desc: 'Фиксируем срок в договоре. За каждый день просрочки — штраф в пользу клиента.',
  },
  {
    icon: Ruler,
    title: 'Замер бесплатно',
    desc: 'Выезжаем на объект в день обращения. Составляем смету без скрытых платежей.',
  },
  {
    icon: ThumbsUp,
    title: 'Работаем официально',
    desc: 'Заключаем договор, выдаём чеки. Оплата поэтапно — только после приёмки каждого этапа.',
  },
  {
    icon: Phone,
    title: 'На связи 24/7',
    desc: 'Личный менеджер на весь период стройки. Фото отчёт каждый день — вы видите прогресс.',
  },
];

const stats = [
  { value: '800+', label: 'объектов сдано' },
  { value: '15', label: 'лет на рынке' },
  { value: '5', label: 'лет гарантии' },
  { value: '98%', label: 'клиентов довольны' },
];

export default function WhyUsSection() {
  return (
    <section className="bg-neutral-950 py-24 px-8 md:px-16">
      <div className="container mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="inline-block mb-4 text-sm font-medium uppercase tracking-widest text-amber-400 border border-amber-400/40 rounded-full px-4 py-1.5">
            Почему мы
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Почему выбирают<br />
              <span className="text-amber-400">именно нас</span>
            </h2>
            <p className="text-white/50 text-base max-w-xs md:text-right">
              Не слова, а конкретные обязательства — зафиксированные в договоре.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-neutral-950 p-8 text-center">
              <p className="text-5xl font-bold text-amber-400 mb-2">{s.value}</p>
              <p className="text-white/50 text-sm uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-5 group">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
