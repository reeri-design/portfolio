import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  Display,
  H2,
  BodyLarge,
  Body,
  Hand,
  Label,
} from "@/components/typography/Typography";

/* ---------------------------------------------------------
   V1 homepage — editorial intro. The interactive desk (see
   PROJECT.md · Homepage Vision) is deferred to v2; this page
   optimizes for a hiring manager reaching the work in one
   click. Personality carries through type, tokens, and small
   handwritten annotations instead of illustration.
--------------------------------------------------------- */

export default function Home() {
  return (
    <main className="flex-1">
      {/* INTRO */}
      <section>
        <Container width="reading" className="pb-2xl pt-3xl">
          <Label as="p" className="mb-l text-text-muted">
            Product Designer
          </Label>
          <Display className="mb-l text-text-primary">
            hi, i'm srishti!
          </Display>
          <BodyLarge className="max-w-[36rem] text-text-secondary">
          Making complex products feel simple, clear, and human.
          </BodyLarge>
          <Hand className="mt-xl inline-block -rotate-1 text-text-muted">
            the full desk experience is on its way — this is v1, shipped fast
            on purpose
          </Hand>
        </Container>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="scroll-mt-2xl">
        <Container width="reading" className="pb-2xl">
          <Label as="p" className="mb-xl text-text-muted">Featured case study</Label>
          <Link
            href="/work/beam"
            className="group block border border-border transition-colors duration-200 hover:border-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="p-l md:p-xl">
              <Label as="p" className="mb-m text-text-muted">BEAM</Label>
              <H2 className="mb-m text-text-primary">
                Unified Estimator Workflow
              </H2>
              <Body className="max-w-[34rem] text-text-secondary">
                A flexible, role-based workflow system for a construction
                takeoff platform — with human-in-the-loop AI training designed
                in from the start.
              </Body>
            </div>
            <div className="grid grid-cols-3 border-t border-border">
              {[
                ["30%", "faster turnaround"],
                ["800+", "users, ~5× growth"],
                ["0", "external tools needed"],
              ].map(([num, desc], index, items) => (
                <div
                  key={desc}
                  className={`p-m md:p-l ${
                    index < items.length - 1 ? "border-r border-border" : ""
                  }`}
                >
                  <p className="font-display text-[1.5rem] leading-none text-text-primary md:text-[2rem]">
                    {num}
                  </p>
                  <p className="mt-xs font-body text-[0.75rem] leading-[1.4] text-text-secondary md:text-[0.8125rem]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-border px-l py-m md:px-xl">
              <Label
                as="span"
                className="text-text-muted transition-colors duration-200 group-hover:text-accent-primary"
              >
                Read the case study →
              </Label>
            </div>
          </Link>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-2xl border-t border-border-subtle">
        <Container width="reading" className="py-2xl">
          <Label as="p" className="mb-xl text-text-muted">About</Label>
          <Body className="max-w-[36rem] text-text-secondary">
            I&rsquo;m a product designer who cares about how work actually
            flows between people — research-led, systems-minded, and happiest
            when a design decision can be traced back to something a real user
            said. Away from the screen: crochet, sketching, and a slowly
            growing stack of books.
          </Body>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-2xl border-t border-border-subtle">
        <Container width="reading" className="py-2xl">
          <Label as="p" className="mb-xl text-text-muted">Contact</Label>
          <Body className="text-text-secondary">
            The fastest way to reach me:{" "}
            <a
              href="mailto:srishtimittal726@gmail.com"
              className="font-medium text-text-primary underline decoration-border underline-offset-4 transition-colors duration-200 hover:decoration-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              srishtimittal726@gmail.com
            </a>
          </Body>
        </Container>
      </section>
    </main>
  );
}
