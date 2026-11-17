// GSAP и ScrollTrigger подключены в index.html (cdnjs)

/** Лепестки на первом экране: чисто декоративные, убираются при reduced-motion. */
function spawnPetals(hero, count = 9) {
  const made = [];
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    const size = 10 + Math.random() * 16;
    p.className = 'petal';
    p.style.cssText = `left:${40 + Math.random() * 58}%;top:0;width:${size}px;height:${size}px;` +
      `animation-duration:${14 + Math.random() * 14}s;animation-delay:-${Math.random() * 20}s`;
    hero.appendChild(p);
    made.push(p);
  }
  return () => made.forEach((p) => p.remove());
}

function initMotion() {
  const { gsap, ScrollTrigger } = window;
  const hero = document.querySelector('.hero');
  if (!hero || !gsap) return; // сайт работает и без анимации
  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const clean = spawnPetals(hero);

    // Единственная «постановочная» анимация: появление первого экрана
    gsap.from('.hero .rv', { y: 34, opacity: 0, duration: 1, stagger: 0.14, ease: 'power3.out' });
    gsap.from('.hero-img img', { scale: 1.14, duration: 2.2, ease: 'power2.out' });

    // Лёгкий параллакс букета при прокрутке
    gsap.to('.hero-img img', {
      yPercent: -6,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });

    return clean;
  });
}
