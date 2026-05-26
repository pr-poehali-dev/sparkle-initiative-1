import { useState } from 'react';
import { cn } from '@/lib/utils';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const works = [
  {
    img: 'https://cdn.poehali.dev/projects/c87d64cd-c0b5-4df7-9e6e-0d077a6d8d39/files/cb3af44c-d6bb-4d99-a23e-818540c8ad15.jpg',
    title: 'Монтаж металлочерепицы',
    desc: 'Загородный дом, 180 м²',
    tag: 'Кровля',
  },
  {
    img: 'https://cdn.poehali.dev/projects/c87d64cd-c0b5-4df7-9e6e-0d077a6d8d39/files/3938c83a-3244-4334-9c65-950ea660d748.jpg',
    title: 'Кирпичная пристройка',
    desc: 'Жилая комната 24 м², под ключ',
    tag: 'Пристройка',
  },
  {
    img: 'https://cdn.poehali.dev/projects/c87d64cd-c0b5-4df7-9e6e-0d077a6d8d39/files/b87bda61-186d-4f91-af13-d89f54d5074d.jpg',
    title: 'Мягкая кровля (гибкая черепица)',
    desc: 'Коттедж, 220 м²',
    tag: 'Кровля',
  },
  {
    img: 'https://cdn.poehali.dev/projects/c87d64cd-c0b5-4df7-9e6e-0d077a6d8d39/files/7e8e3500-c693-45a7-9a91-95a19377af9a.jpg',
    title: 'Деревянная терраса',
    desc: 'Открытая веранда 32 м²',
    tag: 'Пристройка',
  },
  {
    img: 'https://cdn.poehali.dev/projects/c87d64cd-c0b5-4df7-9e6e-0d077a6d8d39/files/dfa98250-773c-4e95-9734-097678513291.jpg',
    title: 'Ремонт и снегозадержатели',
    desc: 'Замена кровли + монтаж защиты',
    tag: 'Ремонт',
  },
  {
    img: 'https://cdn.poehali.dev/projects/c87d64cd-c0b5-4df7-9e6e-0d077a6d8d39/files/912a6a23-031c-40b3-bc07-c837e4197cc2.jpg',
    title: 'Гараж-пристройка',
    desc: 'Гараж на 1 авто, 36 м²',
    tag: 'Пристройка',
  },
];

const tags = ['Все', 'Кровля', 'Пристройка', 'Ремонт'];

export default function WorksSection() {
  const [activeTag, setActiveTag] = useState('Все');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeTag === 'Все' ? works : works.filter(w => w.tag === activeTag);

  const prev = () => setLightbox(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null);
  const next = () => setLightbox(i => i !== null ? (i + 1) % filtered.length : null);

  return (
    <section className="bg-neutral-900 py-24 px-8 md:px-16">
      <div className="container mx-auto">

        {/* Header */}
        <div className="mb-12">
          <span className="inline-block mb-4 text-sm font-medium uppercase tracking-widest text-amber-400 border border-amber-400/40 rounded-full px-4 py-1.5">
            Портфолио
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Наши <span className="text-amber-400">работы</span>
            </h2>
            <p className="text-white/50 text-base max-w-xs md:text-right">
              Реальные объекты — до и после. Каждый проект сдан в срок.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={cn(
                'px-5 py-2 text-sm font-medium transition-all duration-200',
                activeTag === tag
                  ? 'bg-amber-400 text-black'
                  : 'border border-white/20 text-white/60 hover:border-white/50 hover:text-white'
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((work, idx) => (
            <div
              key={work.img}
              className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
              onClick={() => setLightbox(idx)}
            >
              <img
                src={work.img}
                alt={work.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block mb-1 text-xs font-medium uppercase tracking-wider text-amber-400">
                  {work.tag}
                </span>
                <p className="text-white font-semibold text-base">{work.title}</p>
                <p className="text-white/60 text-sm">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 text-white/60 hover:text-white transition-colors p-2"
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={36} />
          </button>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[lightbox].img}
              alt={filtered[lightbox].title}
              className="w-full max-h-[75vh] object-contain"
            />
            <div className="mt-4 text-center">
              <span className="text-amber-400 text-sm uppercase tracking-wider">{filtered[lightbox].tag}</span>
              <p className="text-white font-semibold text-lg mt-1">{filtered[lightbox].title}</p>
              <p className="text-white/50 text-sm">{filtered[lightbox].desc}</p>
            </div>
          </div>
          <button
            className="absolute right-4 text-white/60 hover:text-white transition-colors p-2"
            onClick={e => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
