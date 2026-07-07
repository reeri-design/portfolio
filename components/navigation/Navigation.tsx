"use client";

/* ---------------------------------------------------------
   Primary navigation — the frame, not the artwork.

   Restrained on purpose: this is an editorial site, not a SaaS
   product, so the nav should read like a masthead (quiet,
   typographic) rather than an application header (buttons,
   pills, active backgrounds). Identity comes from the display
   typeface on the wordmark, not a logo mark or icon.

   Motion is intentionally minimal — opacity/transform only, no
   bounce — because the nav's job is to get out of the way, not
   to perform. It hides on scroll-down to give reading space back
   to the page, and reappears on scroll-up, at the very top of the
   page, or when the cursor moves toward the top edge of the
   viewport — so it's never more than one gesture away, even if
   the reader hasn't scrolled yet.
--------------------------------------------------------- */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";

/* V1 scope (2026-07-07): Playground removed until the page exists;
   About and Contact live as homepage sections rather than standalone
   pages. Revisit both when v2 (desk homepage) lands. */
const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

const linkFocusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

// Distance (px) from the top of the viewport within which cursor movement
// reveals the hidden nav — a hover-adjacent "edge" band, not the whole page.
const CURSOR_REVEAL_ZONE = 48;

export function Navigation() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function onScroll() {
      const currentScrollY = window.scrollY;
      const atTop = currentScrollY <= 4;
      const scrollingDown = currentScrollY > lastScrollY.current;

      setScrolled(!atTop);
      setHidden(!atTop && scrollingDown);

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal on cursor-toward-top, independent of scroll direction. Doesn't
  // read `hidden` — it only ever sets it to false, so no stale-closure risk,
  // and React bails out of the re-render when the nav is already visible.
  useEffect(() => {
    function onMouseMove(event: MouseEvent) {
      if (event.clientY <= CURSOR_REVEAL_ZONE) setHidden(false);
    }

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // Close the mobile panel on Escape. (Closing on navigation is handled
  // by onClick on each mobile link — doing it via a pathname effect
  // triggers the react-hooks/set-state-in-effect lint error and an
  // unnecessary cascading render.)
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav
      aria-label="Primary"
      className={`sticky top-0 z-50 transition-transform duration-200 ease-out ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled || open ? "bg-[#fafafa]" : "bg-transparent"
      }`}
    >
      <Container width="reading">
        <div className="flex items-center justify-between py-m">
          <Link
            href="/"
            className={`font-display text-lg font-medium tracking-tight text-text-primary ${linkFocusRing}`}
          >
            reeri
          </Link>

          <ul className="hidden items-center gap-l md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-sm transition-colors duration-200 ${linkFocusRing} ${
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className={`flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden ${linkFocusRing}`}
          >
            <span
              className={`h-px w-5 bg-text-primary transition-transform duration-200 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-text-primary transition-transform duration-200 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-nav-panel"
          className="border-t border-border-subtle md:hidden"
        >
          <Container width="reading">
            <ul className="flex flex-col space-y-l py-l">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={`text-lg transition-colors duration-200 ${linkFocusRing} ${
                        isActive ? "text-text-primary" : "text-text-secondary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </div>
      )}
    </nav>
  );
}
