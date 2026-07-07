"use client";

/* ---------------------------------------------------------
   Secondary navigation — the reading companion, not a menu.

   This is deliberately NOT a traditional nav component. It is an
   orientation aid: a quiet editorial margin note that answers a
   single question while someone reads — "where am I in this
   story?" — and otherwise stays out of the way.

   Design decisions encoded here, and WHY, for future contributors:

   • Appears once the hero is mostly (not fully) scrolled past.
     During the hero the reader is still being introduced to the
     piece; a position indicator has nothing useful to say yet, and
     showing one before the reader has reached a real section would
     just be an empty/unlit nav. But waiting for 100% of the hero to
     leave the viewport (`isIntersecting` alone) is too late on a
     tall hero — a real dead zone where the reader has clearly moved
     on but gets zero orientation feedback. HERO_REVEAL_THRESHOLD
     splits the difference: reveal once only that fraction of the
     hero remains visible. Fades back out on scrolling back up past
     that point.

   • Labels stay hidden until interaction. The resting state is
     just markers, because the goal is orientation, not clicking.
     `group` lives on the outer <nav>, deliberately, not per-row —
     hovering anywhere near the column reveals ALL section names
     together, like a mini table of contents, rather than one at a
     time. Don't move `group` onto individual rows; that scopes the
     reveal per-item instead, which was tried and reverted. Recedes
     on mouse-out or blur. Accessible names are always on the
     anchors, so assistive tech never depends on the visual reveal.

   • Restrained visual language — bare markers, no card, panel,
     shadow, or background. It should read as if it lives in the
     page margin, like a chapter tick in a book, rather than
     floating above the content as an application sidebar.

   • Orientation over navigation. Clicking works (smooth scroll to
     the section), but that's a convenience, not the point. The
     component earns its place by passively showing progress, so
     the active marker matters more than the click target.

   • Desktop only. A margin note needs a margin; narrow viewports
     don't have one to spare without overlapping the reading
     column, and the primary nav already covers real navigation.

   Motion is opacity + slight scale on gentle easing only — no
   bounce, no spring — and is suppressed under reduced-motion.
--------------------------------------------------------- */

import { useEffect, useState } from "react";

export type SectionNavItem = {
  id: string;
  label: string;
};

type SectionNavProps = {
  /* Sections to track, in document order. `id` must match the
     corresponding element's id on the page. */
  sections: readonly SectionNavItem[];
  /* Id of the hero element. The navigator stays hidden until the
     hero is mostly scrolled past — see HERO_REVEAL_THRESHOLD. */
  heroId: string;
  className?: string;
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

// Reveal once only this fraction of the hero is still visible — i.e. once
// the reader is mostly (not fully) past it. Note: IntersectionObserver's
// `entry.isIntersecting` is true for ANY overlap greater than 0, regardless
// of `threshold` — it does not mean "past the threshold." To act on a
// specific ratio we have to read `entry.intersectionRatio` directly.
const HERO_REVEAL_THRESHOLD = 0.2;

export function SectionNav({ sections, heroId, className }: SectionNavProps) {
  // Whether the navigator is revealed (hero is mostly scrolled past).
  const [visible, setVisible] = useState(false);
  // The section the reader is currently within.
  const [activeId, setActiveId] = useState<string | null>(null);

  // Visibility: watch the hero. Stays hidden until the reader has scrolled
  // through most of it — see HERO_REVEAL_THRESHOLD above.
  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.intersectionRatio <= HERO_REVEAL_THRESHOLD),
      { threshold: HERO_REVEAL_THRESHOLD },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroId]);

  // Active section: a single activation band near the top third of the
  // viewport. rootMargin shrinks the observer's viewport to a thin line,
  // so at most one section is "crossing" it at a time — the one the
  // reader is actually looking at, not merely one that's visible.
  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  function handleClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    const target = document.getElementById(id);
    if (!target) return; // fall back to native anchor jump
    event.preventDefault();

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // scrollIntoView honors each section's `scroll-mt-*`, so the heading
    // clears the sticky masthead and keeps comfortable space above it.
    target.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
    // Move focus to the destination for keyboard users, without a second
    // scroll jump.
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }

  return (
    <nav
      aria-label="On this page"
      className={`group fixed right-l top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:right-xl ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      } transition-opacity duration-500 ease-out motion-reduce:transition-none ${
        className ?? ""
      }`}
    >
      {/* Single-column grid, not flex: a grid track's width is set by its
          widest cell, and grid items stretch to fill it by default. That
          gives every row the same width — the longest label's — and lets
          each row's <a> below stretch full-width, so the whole row is
          clickable/hoverable, not just wherever the shorter labels' text
          happens to reach. No `gap` — vertical spacing lives in each
          link's own py-s instead, so the hit area is a contiguous band
          rather than a thin strip with dead space between markers. */}
      <ul className="grid">
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-label={section.label}
                aria-current={isActive ? "location" : undefined}
                data-active={isActive || undefined}
                onClick={(event) => handleClick(event, section.id)}
                className={`flex w-full items-center justify-end gap-s py-s ${focusRing} rounded-full`}
              >
                {/* Label — hidden until the nav is hovered or focused. */}
                <span
                  aria-hidden="true"
                  className="whitespace-nowrap text-right font-body text-[0.6875rem] font-medium uppercase tracking-[0.12em] [word-spacing:0.2em] text-text-muted opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
                >
                  {section.label}
                </span>

                {/* Marker.
                    NOTE: the ACTIVE visual treatment is intentionally
                    provisional — see spec. The active marker is already
                    distinguishable in code (aria-current + data-active +
                    the classes below), but the exact styling is expected
                    to be iterated. Treat the filled/scaled look as a
                    placeholder, not a final decision. */}
                <span
                  aria-hidden="true"
                  className={`h-[0.5rem] w-[0.5rem] shrink-0 rounded-full border border-border transition-[transform,background-color,border-color] duration-200 ease-out group-hover:scale-110 motion-reduce:transition-none ${
                    isActive
                      ? "scale-110 border-text-primary bg-text-primary" /* provisional */
                      : "bg-transparent"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
