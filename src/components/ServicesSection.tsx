import { Home, Wrench, Building2, Layers, Droplets, Shield, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = { Home, Wrench, Building2, Layers, Droplets, Shield };

const services = [
  {
    icon: 'Home',
    title: 'Монтаж кровли',
    description: 'Установка кровли под ключ: металлочерепица, профнастил, мягкая кровля. Гарантия на все виды работ.',
    price: 'от 800 ₽/м²',
    features: ['Металлочерепица', 'Профнастил', 'Мягкая кровля', 'Ондулин'],
  },
  {
    icon: 'Wrench',
    title: 'Ремонт кровли',
    description: 'Устранение протечек, замена повреждённых элементов, восстановление гидроизоляции. Выезд в день обращения.',
    price: 'от 300 ₽/м²',
    features: ['Устранение протечек', 'Замена листов', 'Гидроизоляция', 'Конёк и водосток'],
  },
  {
    icon: 'Building2',
    title: 'Пристройка к дому',
    description: 'Строительство пристроек любого типа: веранды, террасы, гаражи, жилые комнаты. Проект и смета бесплатно.',
    price: 'от 15 000 ₽/м²',
    features: ['Веранда / терраса', 'Жилая комната', 'Гараж', 'Котельная'],
  },
  {
    icon: 'Layers',
    title: 'Утепление кровли',
    description: 'Монтаж утеплителя и паробарьера. Снизит теплопотери до 30% и защитит чердак от конденсата.',
    price: 'от 500 ₽/м²',
    features: ['Минвата', 'Пенополистирол', 'Паробарьер', 'Вентзазор'],
  },
  {
    icon: 'Droplets',
    title: 'Водосточные системы',
    description: 'Установка и замена водостоков. Пластик и металл, любые конфигурации крыш.',
    price: 'от 400 ₽/м.п.',
    features: ['Пластиковые', 'Металлические', 'Воронки и трубы', 'Снегозадержатели'],
  },
  {
    icon: 'Shield',
    title: 'Гарантийное обслуживание',
    description: 'Плановые осмотры и обслуживание кровли. Выявим проблемы до того, как они станут дорогостоящими.',
    price: 'от 2 000 ₽/год',
    features: ['Осмотр 2 раза в год', 'Чистка водостоков', 'Протяжка крепежа', 'Отчёт о состоянии'],
  },
];

export default function ServicesSection() {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const btn = document.querySelector<HTMLButtonElement>('button[data-cta]');
      btn?.click();
    }, 600);
  };

  return (
    <section className="bg-neutral-950 py-24 px-8 md:px-16">
      <div className="container mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="inline-block mb-4 text-sm font-medium uppercase tracking-widest text-amber-400 border border-amber-400/40 rounded-full px-4 py-1.5">
            Наши услуги
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Всё для вашей<br />
              <span className="text-amber-400">кровли и дома</span>
            </h2>
            <p className="text-white/60 max-w-sm text-base md:text-right">
              Работаем быстро и качественно. Выезд на замер бесплатно — в день обращения.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-neutral-950 p-8 flex flex-col gap-5 group hover:bg-neutral-900 transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center bg-amber-400/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                  {(() => { const I = iconMap[service.icon]; return I ? <I size={22} /> : null; })()}
                </div>
                <span className="text-amber-400 font-bold text-sm mt-1">{service.price}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{service.description}</p>
              </div>

              <ul className="flex flex-col gap-2 mt-auto">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="h-1 w-4 bg-amber-400/60 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10 p-8">
          <div>
            <p className="text-white font-semibold text-xl">Не нашли нужную услугу?</p>
            <p className="text-white/50 text-sm mt-1">Позвоните или оставьте заявку — обсудим любую задачу.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+79100919690"
              className="bg-amber-400 px-8 py-4 text-base font-semibold text-black transition-all hover:bg-amber-300 whitespace-nowrap"
            >
              +7 (910) 091-96-90
            </a>
            <button
              onClick={scrollToForm}
              className="border border-white/30 px-8 py-4 text-base font-light text-white transition-all hover:border-white hover:bg-white/10 whitespace-nowrap"
            >
              Оставить заявку
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}