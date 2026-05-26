import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Александр Петров',
    location: 'Московская обл., Подольск',
    rating: 5,
    text: 'Заказывал монтаж металлочерепицы на дом 180 м². Бригада приехала в день звонка, замер сделали бесплатно. Работу выполнили за 4 дня, без единого нарекания. Качество отличное — сосед уже тоже позвонил им.',
    project: 'Монтаж кровли, 180 м²',
    date: 'Март 2024',
  },
  {
    name: 'Елена Соколова',
    location: 'Тульская обл., Щёкино',
    rating: 5,
    text: 'Строили пристройку-веранду. Боялась, что затянут сроки, но всё сдали точно по договору. Каждый день присылали фото прогресса. Менеджер отвечал даже в выходные. Очень довольна результатом!',
    project: 'Веранда 28 м², под ключ',
    date: 'Июнь 2024',
  },
  {
    name: 'Дмитрий Козлов',
    location: 'Калужская обл., Обнинск',
    rating: 5,
    text: 'Обращался по ремонту кровли — была течь после зимы. Приехали на следующий день, нашли проблему, объяснили что и почему. Устранили быстро и недорого. Через месяц прошёл сильный дождь — всё держит.',
    project: 'Ремонт кровли, устранение течи',
    date: 'Апрель 2024',
  },
  {
    name: 'Ирина Новикова',
    location: 'Московская обл., Серпухов',
    rating: 5,
    text: 'Строили гараж-пристройку. Цена оказалась ниже, чем у конкурентов, при этом качество материалов лучше. Договор заключили сразу, всё прозрачно. Теперь планируем заказать утепление чердака.',
    project: 'Гараж-пристройка, 36 м²',
    date: 'Август 2024',
  },
  {
    name: 'Сергей Морозов',
    location: 'Рязанская обл., Рязань',
    rating: 5,
    text: 'Мягкая кровля на коттедж 220 м². Работали профессионально, чисто убрали за собой. Гарантийный талон выдали на руки. Уже прошёл год — никаких вопросов к кровле нет.',
    project: 'Мягкая кровля (гибкая черепица), 220 м²',
    date: 'Май 2023',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'fill-amber-400 text-amber-400' : 'fill-white/10 text-white/10'}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent(i => (i + 1) % reviews.length);

  const visible = [
    reviews[current],
    reviews[(current + 1) % reviews.length],
    reviews[(current + 2) % reviews.length],
  ];

  return (
    <section className="bg-neutral-900 py-24 px-8 md:px-16 overflow-hidden">
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-block mb-4 text-sm font-medium uppercase tracking-widest text-amber-400 border border-amber-400/40 rounded-full px-4 py-1.5">
              Отзывы
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Что говорят<br />
              <span className="text-amber-400">наши клиенты</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center border border-white/20 text-white/60 hover:border-amber-400 hover:text-amber-400 transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center border border-white/20 text-white/60 hover:border-amber-400 hover:text-amber-400 transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((review, idx) => (
            <div
              key={review.name + idx}
              className="flex flex-col gap-5 bg-neutral-950 p-8 border border-white/5"
            >
              <Stars count={review.rating} />
              <p className="text-white/70 text-sm leading-relaxed flex-1">"{review.text}"</p>
              <div className="border-t border-white/10 pt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{review.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-amber-400/80 text-xs">{review.project}</p>
                  <p className="text-white/30 text-xs mt-0.5">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-8 justify-center">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 transition-all duration-300 ${i === current ? 'w-8 bg-amber-400' : 'w-4 bg-white/20'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
