import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/c87d64cd-c0b5-4df7-9e6e-0d077a6d8d39/files/b0944f7b-d6a4-4da1-9cec-3cd3c9278aa8.jpg',
  'https://cdn.poehali.dev/projects/c87d64cd-c0b5-4df7-9e6e-0d077a6d8d39/files/b1d3c30c-994a-476b-81a3-71c2763404cc.jpg',
  'https://cdn.poehali.dev/projects/c87d64cd-c0b5-4df7-9e6e-0d077a6d8d39/files/186a5ef0-2fde-4fba-a052-fc2583e86eaa.jpg',
  'https://cdn.poehali.dev/projects/c87d64cd-c0b5-4df7-9e6e-0d077a6d8d39/files/c66055ac-49b1-4bdf-bdc3-a5a59e52c014.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            {/* Badge */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <span className="inline-block rounded-full border border-amber-400/60 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-amber-400">
                Кровельные работы &amp; Пристройки
              </span>
            </div>

            {/* Main heading */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-200 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                Надёжная<br />
                <span className="text-amber-400">кровля</span> и<br />
                пристройки
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <p className="text-lg font-light text-white/75 md:text-xl max-w-lg">
                Монтаж, ремонт и замена кровли. Строительство пристроек к дому под ключ. Работаем по всей России.
              </p>
            </div>

            {/* Stats */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-400 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-amber-400">12+</p>
                  <p className="text-sm text-white/60">лет опыта</p>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <p className="text-3xl font-bold text-amber-400">500+</p>
                  <p className="text-sm text-white/60">объектов сдано</p>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <p className="text-3xl font-bold text-amber-400">5 лет</p>
                  <p className="text-sm text-white/60">гарантия</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex flex-wrap gap-4">
                <button className="rounded-none bg-amber-400 px-8 py-4 text-base font-semibold text-black transition-all hover:bg-amber-300">
                  Получить расчёт
                </button>
                <button className="rounded-none border border-white/40 px-8 py-4 text-base font-light text-white transition-all hover:border-white hover:bg-white/10">
                  Наши работы
                </button>
              </div>
            </div>

            {/* Contacts */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-600 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex items-center gap-6">
                <a
                  href="tel:+79000000000"
                  className="text-white/70 text-sm transition-colors hover:text-amber-400"
                >
                  +7 (900) 000-00-00
                </a>
                <span className="text-white/30">|</span>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-amber-400"
                  aria-label="Telegram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                <a
                  href="https://vk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-amber-400"
                  aria-label="VKontakte"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-amber-400' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
