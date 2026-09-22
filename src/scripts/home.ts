/**
 * Home page interactions, recreated from the Claude Design logic class without the
 * runtime: the hero slide crossfade, the drawing/render wipe, mouse parallax, the
 * wireframe redraw, and the drawing register.
 *
 * Timings, easing and thresholds are the export's own values.
 */

import { prefersReducedMotion } from './page';

export interface HeroSlide {
  no: string;
  name: string;
  client: string;
  sector: string;
  /** Optimised srcset/src for the render plate. */
  plate: { src: string; srcset: string };
  /** Optimised srcset/src for the ink drawing overlay. */
  ink: { src: string; srcset: string };
}

export interface RegisterRow {
  no: string;
  name: string;
  client: string;
  sector: string;
  note: string;
  image: { src: string; srcset: string };
}

const SLIDE_MS = 6200;
const WIPE_START = 46;

/** Swap the back image of a crossfade pair in, fade the front one out. */
function crossFade(group: string, next: { src: string; srcset: string }, opacity: number): void {
  const els = Array.from(document.querySelectorAll<HTMLImageElement>(`[data-fade="${group}"]`));
  if (els.length < 2) return;

  const front = els.find((el) => Number.parseFloat(el.style.opacity || '0') > 0.05) ?? els[0];
  const back = front === els[0] ? els[1] : els[0];
  if (front.getAttribute('src') === next.src) return;

  back.setAttribute('src', next.src);
  if (next.srcset) back.setAttribute('srcset', next.srcset);
  back.style.opacity = String(opacity);
  front.style.opacity = '0';
}

function setText(id: string, value: string): void {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

export function initHero(slides: HeroSlide[]): void {
  if (slides.length === 0) return;

  const depth = document.getElementById('wva-depth');
  const plate = document.getElementById('wva-plate');
  const ink = document.getElementById('wva-ink');
  const handle = document.getElementById('wva-handle');
  const grip = document.getElementById('wva-grip');
  const annoA = document.getElementById('wva-anno-a');
  const ticks = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-slide]'));
  const reduced = prefersReducedMotion();

  let active = 0;

  const restartWire = () => {
    if (reduced) return;
    const svg = document.getElementById('wva-wire');
    svg?.querySelectorAll<SVGElement>('rect,line,circle,path').forEach((el) => {
      el.style.animation = 'none';
      void el.getBoundingClientRect();
      el.style.animation = '';
    });
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
      const on = el.getAttribute('data-count') === 'yes';
      el.style.animation = 'none';
      void el.getBoundingClientRect();
      el.style.animation = on ? 'wvaCount 6.2s linear forwards' : 'none';
    });
  };

  const render = () => {
    const slide = slides[active];

    crossFade('plate', slide.plate, 1);
    crossFade('ink', slide.ink, 1);
    crossFade('refl', slide.plate, 0.5);

    setText('wva-active-sector', slide.sector);
    setText('wva-active-client', slide.client);
    setText('wva-active-no', slide.no);
    setText('wva-active-name', slide.name);

    ticks.forEach((tick, i) => {
      const on = i === active;
      tick.style.opacity = on ? '1' : '0.4';
      tick.setAttribute('aria-current', on ? 'true' : 'false');
      const rule = tick.querySelector<HTMLElement>('[data-tickrule]');
      if (rule) {
        rule.style.width = on ? '54px' : '22px';
        rule.style.background = on ? '#e2231a' : 'rgba(13,13,13,.35)';
      }
      const fill = tick.querySelector<HTMLElement>('[data-count]');
      if (fill) fill.setAttribute('data-count', on ? 'yes' : 'no');
    });

    restartWire();
  };

  const go = (index: number) => {
    if (index === active) return;
    active = index;
    render();
  };

  ticks.forEach((tick, i) => tick.addEventListener('click', () => go(i)));

  render();

  // Auto-advance, paused once the visitor scrolls past the hero. The export used the
  // same 6.2s cadence and 0.8vh threshold.
  if (!reduced && slides.length > 1) {
    const timer = window.setInterval(() => {
      if (window.scrollY > window.innerHeight * 0.8) return;
      go((active + 1) % slides.length);
    }, SLIDE_MS);
    window.addEventListener('pagehide', () => window.clearInterval(timer), { once: true });
  }

  // ---- Drawing / render wipe ------------------------------------------------
  if (plate && !reduced) {
    let wipe = WIPE_START;
    let target = WIPE_START;
    let dragging = false;
    let raf: number | null = null;

    const apply = () => {
      const gap = target - wipe;
      if (Math.abs(gap) < 0.05 || window.scrollY > window.innerHeight * 1.2) {
        raf = null;
        return;
      }
      wipe += gap * 0.14;
      // The drawing occupies everything left of the handle; the render is what the
      // handle uncovers to its right. Hence the inset comes off the right edge.
      if (ink) ink.style.clipPath = `inset(0 ${(100 - wipe).toFixed(2)}% 0 0)`;
      if (handle) handle.style.left = `${wipe.toFixed(2)}%`;
      raf = requestAnimationFrame(apply);
    };

    const kick = () => {
      if (raf === null) raf = requestAnimationFrame(apply);
    };

    const setFrom = (clientX: number) => {
      const rect = plate.getBoundingClientRect();
      target = Math.max(6, Math.min(94, ((clientX - rect.left) / rect.width) * 100));
    };

    plate.addEventListener('pointerdown', (event) => {
      if (!grip || !(event.target === grip || grip.contains(event.target as Node))) return;
      dragging = true;
      grip.setPointerCapture?.(event.pointerId);
      setFrom(event.clientX);
      kick();
      event.preventDefault();
    });

    window.addEventListener('pointermove', (event) => {
      if (!dragging) return;
      setFrom(event.clientX);
      kick();
    });

    window.addEventListener('pointerup', () => {
      dragging = false;
    });

    // Keyboard parity for a mouse-only interaction. [ACCESSIBILITY]
    grip?.addEventListener('keydown', (event) => {
      const step = event.shiftKey ? 10 : 4;
      if (event.key === 'ArrowLeft') target = Math.max(6, target - step);
      else if (event.key === 'ArrowRight') target = Math.min(94, target + step);
      else if (event.key === 'Home') target = 6;
      else if (event.key === 'End') target = 94;
      else return;
      event.preventDefault();
      kick();
    });

    // Hover-follow: the wipe tracks the pointer across the plate.
    window.addEventListener('mousemove', (event) => {
      if (dragging || window.scrollY > window.innerHeight) return;
      const rect = plate.getBoundingClientRect();
      if (event.clientY > rect.top - 80 && event.clientY < rect.bottom + 80) {
        setFrom(event.clientX);
        kick();
      }
    });
  }

  // ---- Mouse parallax on the plate ------------------------------------------
  if (depth && !reduced) {
    window.addEventListener('mousemove', (event) => {
      if (window.scrollY > window.innerHeight) return;
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;
      depth.style.transform =
        `perspective(1500px) rotateY(${(nx * 4).toFixed(2)}deg) rotateX(${(-ny * 3).toFixed(2)}deg) ` +
        `translate3d(${(nx * -14).toFixed(1)}px,${(ny * -8).toFixed(1)}px,0)`;
      if (annoA) {
        annoA.style.transform = `translate3d(${(nx * 10).toFixed(1)}px,${(ny * 6).toFixed(1)}px,0)`;
      }
    });
  }
}

export function initRegister(rows: RegisterRow[]): void {
  const list = document.getElementById('wva-rows');
  const filterBar = document.getElementById('wva-filters');
  if (!list) return;

  const items = Array.from(list.querySelectorAll<HTMLElement>('[data-row]'));
  let filter = 'All';
  let active = 0;

  const visible = () => items.filter((el) => !el.hidden);

  const paint = () => {
    const shown = visible();

    items.forEach((el) => {
      const index = shown.indexOf(el);
      const on = index === active;
      el.style.padding = on ? '26px 4px 26px 22px' : '19px 4px 19px 22px';
      el.style.background = on ? 'rgba(13,13,13,.035)' : 'transparent';

      const rail = el.querySelector<HTMLElement>('[data-rowrail]');
      if (rail) rail.style.transform = `scaleY(${on ? 1 : 0})`;

      const num = el.querySelector<HTMLElement>('[data-rownum]');
      if (num) num.style.opacity = on ? '0.85' : '0.35';

      const name = el.querySelector<HTMLElement>('[data-rowname]');
      if (name) name.style.transform = `translateX(${on ? '6px' : '0px'})`;

      const title = el.querySelector<HTMLElement>('[data-rowtitle]');
      if (title) title.style.fontSize = on ? '24px' : '19px';
    });

    const current = shown[active] ?? shown[0];
    if (!current) return;

    const row = rows[Number(current.dataset.index)];
    if (!row) return;

    crossFade('reg', row.image, 1);
    setText('wva-row-name', row.name);
    setText('wva-row-client', row.client);
    setText('wva-row-sector', row.sector);
    setText('wva-row-no', row.no);
    setText('wva-row-note', row.note);
    setText('wva-row-count', String(shown.length));
  };

  items.forEach((el) => {
    const activate = () => {
      const index = visible().indexOf(el);
      if (index === -1 || index === active) return;
      active = index;
      paint();
    };
    el.addEventListener('mouseenter', activate);
    el.addEventListener('focusin', activate);
    el.addEventListener('click', activate);
  });

  filterBar?.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-filter]');
    if (!button?.dataset.filter) return;

    filter = button.dataset.filter;
    active = 0;

    items.forEach((el) => {
      el.hidden = filter !== 'All' && el.dataset.sector !== filter;
    });

    filterBar.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach((chip) => {
      const on = chip.dataset.filter === filter;
      chip.setAttribute('aria-pressed', String(on));
      chip.style.color = on ? '#0d0d0d' : 'rgba(13,13,13,.45)';
      chip.style.borderBottomColor = on ? '#e2231a' : 'rgba(13,13,13,0)';
    });

    paint();
  });

  paint();
}

/**
 * The home page's plate video loops silently on its own. Under reduced motion it is
 * paused and rewound instead, so the poster frame shows and nothing moves — matching
 * how the carousel, reveals and parallax already stand down.
 */
export function initPlateVideo(): void {
  const video = document.getElementById('wva-plate-video');
  if (!(video instanceof HTMLVideoElement)) return;
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  video.autoplay = false;
  video.removeAttribute('autoplay');
  video.pause();
  video.currentTime = 0;
}
