import {
  Display,
  H1,
  H4,
  BodyLarge,
  Body,
  Small,
  Caption,
  Label,
} from "@/components/typography/Typography";
import { Sample } from "@/components/specimen/Sample";
import { Container } from "@/components/layout/Container";

const artworkSwatches = [
  { label: "Cutting Mat", className: "bg-illustration-cutting-mat" },
  { label: "Flower", className: "bg-illustration-lily rounded-full" },
  { label: "Notebook", className: "bg-illustration-notebook" },
  { label: "Washi Tape", className: "bg-illustration-washi-tape" },
  { label: "Ceramic Mug", className: "bg-illustration-mug rounded-full" },
];

const tokenRows = [
  {
    token: "background",
    purpose: "Page background",
    value: "#f4f6f8",
    notes: "Paper — the environment (cooler variant, provisional)",
    swatch: "bg-background border border-border-subtle",
  },
  {
    token: "background-subtle",
    purpose: "Elevated surface",
    value: "Graphite 4% / Paper 96%",
    notes: "Derived via color-mix, not a fixed hex",
    swatch: "bg-background-subtle",
  },
  {
    token: "text-primary",
    purpose: "Default ink",
    value: "#2f2c28",
    notes: "Graphite — the voice",
    swatch: "bg-text-primary",
  },
  {
    token: "text-secondary",
    purpose: "De-emphasized text",
    value: "Graphite 75% / Paper 25%",
    notes: "~5.6:1 contrast on Paper",
    swatch: "bg-text-secondary",
  },
  {
    token: "text-muted",
    purpose: "Metadata, captions",
    value: "Graphite 68% / Paper 32%",
    notes: "~4.8:1 contrast on Paper — tuned to clear WCAG AA",
    swatch: "bg-text-muted",
  },
  {
    token: "border",
    purpose: "Visible dividers",
    value: "Graphite 25% / Paper 75%",
    notes: "Table rules, active states",
    swatch: "bg-border",
  },
  {
    token: "border-subtle",
    purpose: "Quiet dividers",
    value: "Graphite 10% / Paper 90%",
    notes: "Section rules, row lines",
    swatch: "bg-border-subtle",
  },
  {
    token: "accent-primary",
    purpose: "Primary interface accent",
    value: "#3f6b46",
    notes: "Forest Green — chosen after comparing against a darker option for legibility",
    swatch: "bg-accent-primary",
  },
  {
    token: "accent-secondary",
    purpose: "Secondary interface accent",
    value: "#ee7fa9",
    notes: "Pink — decorative/illustrative only, fails text contrast",
    swatch: "bg-accent-secondary",
  },
  {
    token: "media-surface",
    purpose: "Utility surface for photos/screenshots",
    value: "#ffffff",
    notes: "Not a general interface surface",
    swatch: "bg-media-surface border border-border-subtle",
  },
  {
    token: "illustration-cutting-mat",
    purpose: "Desk artwork",
    value: "#6f8f66",
    notes: "Separate from accent-primary",
    swatch: "bg-illustration-cutting-mat",
  },
  {
    token: "illustration-lily",
    purpose: "Desk artwork",
    value: "#e8b9c2",
    notes: "Separate from accent-secondary",
    swatch: "bg-illustration-lily",
  },
  {
    token: "illustration-notebook",
    purpose: "Desk artwork",
    value: "#b08b5f",
    notes: "Added for this specimen",
    swatch: "bg-illustration-notebook",
  },
  {
    token: "illustration-washi-tape",
    purpose: "Desk artwork",
    value: "#c9a24b",
    notes: "Added for this specimen",
    swatch: "bg-illustration-washi-tape",
  },
  {
    token: "illustration-mug",
    purpose: "Desk artwork",
    value: "#8a3b42",
    notes: "Added for this specimen",
    swatch: "bg-illustration-mug",
  },
  {
    token: "interaction-hover",
    purpose: "Hover state",
    value: "= accent-primary",
    notes: "Aliases Accent, not a new color",
    swatch: "bg-interaction-hover",
  },
  {
    token: "interaction-focus",
    purpose: "Focus state",
    value: "= accent-primary",
    notes: "Aliases Accent, not a new color",
    swatch: "bg-interaction-focus",
  },
  {
    token: "interaction-revealed",
    purpose: "Revealed state",
    value: "= accent-secondary",
    notes: "Aliases Accent, not a new color",
    swatch: "bg-interaction-revealed",
  },
];

export default function ColorSpecimen() {
  return (
    <Container as="main" width="default" className="py-3xl">
      {/* 1. Introduction */}
      <section className="space-y-m">
        <Display as="h1">Color</Display>
        <div className="max-w-sm space-y-xs">
          <BodyLarge>The interface stays quiet.</BodyLarge>
          <BodyLarge>The objects carry personality.</BodyLarge>
        </div>
      </section>

      <hr className="my-2xl border-border-subtle" />

      {/* 2. Foundation */}
      <section className="space-y-xl">
        <Label as="h2" className="text-text-muted">Foundation</Label>

        <Sample label="Article Preview">
          <div className="space-y-s border border-border-subtle bg-background-subtle p-l">
            <Label className="text-text-muted">Case Study</Label>
            <H4 as="p">Redesigning the Estimator Workflow</H4>
            <Body className="text-text-secondary">
              A six-week deep dive into why small business owners were
              abandoning our estimator halfway through.
            </Body>
            <Small className="text-text-muted">
              5 min read — Product Design
            </Small>
          </div>
        </Sample>

        <Sample label="Navigation Row">
          <nav className="flex gap-l border-b border-border pb-m">
            <Small as="span" className="text-text-primary">
              Home
            </Small>
            <Small as="span" className="text-text-secondary">
              About
            </Small>
            <Small as="span" className="text-text-secondary">
              Projects
            </Small>
            <Small as="span" className="text-text-secondary">
              Playground
            </Small>
            <Small as="span" className="text-text-secondary">
              Contact
            </Small>
          </nav>
        </Sample>

        <Sample label="Paragraph">
          <Body className="max-w-lg">
            Every case study starts the same way: a small, specific question that turned out to matter more than anyone expected.
          </Body>
        </Sample>

        <Sample label="Metadata">
          <Small className="text-text-muted">
            Updated January 2026 — 5 min read
          </Small>
        </Sample>

        <Sample label="Divider">
          <hr className="border-border-subtle" />
        </Sample>

        <Sample label="Media Surface">
          <div
            className="h-32 w-48 border border-border-subtle bg-media-surface"
            aria-hidden="true"
          />
        </Sample>
      </section>

      <hr className="my-2xl border-border-subtle" />

      {/* 3. Accent Colors */}
      <section className="space-y-xl">
        <Label as="h2" className="text-text-muted">Accent Colors</Label>

        <Sample label="Link">
          <Body className="max-w-md">
            Read more about{" "}
            <a
              href="#"
              className="text-accent-primary underline underline-offset-4 hover:text-text-primary"
            >
              the estimator redesign
            </a>{" "}
            and what we learned along the way.
          </Body>
        </Sample>

        <Sample label="Underline">
          <Body className="max-w-md">
            This is the part I&apos;m{" "}
            <span className="underline decoration-accent-secondary decoration-2 underline-offset-4">
              most proud of
            </span>
            .
          </Body>
        </Sample>

        <Sample label="Active Navigation">
          <nav className="flex gap-l border-b border-border pb-m">
            <Small as="span" className="text-text-secondary">
              Home
            </Small>
            <Small as="span" className="text-text-secondary">
              About
            </Small>
            <Small
              as="span"
              className="text-text-primary underline decoration-accent-primary decoration-2 underline-offset-8"
            >
              Projects
            </Small>
            <Small as="span" className="text-text-secondary">
              Playground
            </Small>
            <Small as="span" className="text-text-secondary">
              Contact
            </Small>
          </nav>
        </Sample>

        <Sample label="Tiny Indicator">
          <div className="flex items-center gap-s">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent-secondary"
              aria-hidden="true"
            />
            <Small className="text-text-secondary">
              New case study added
            </Small>
          </div>
        </Sample>

        <Sample label="Focus Ring">
          <button
            type="button"
            className="border border-border px-m py-s text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Small as="span">Tab to me</Small>
          </button>
        </Sample>
      </section>

      <hr className="my-2xl border-border-subtle" />

      {/* 4. Artwork Colors */}
      <section className="space-y-xl">
        <Label as="h2" className="text-text-muted">Artwork Colors</Label>
        <Caption className="text-text-muted">
          Compared side by side, away from any interface chrome.
        </Caption>
        <div className="flex flex-wrap items-end gap-xl">
          {artworkSwatches.map((swatch) => (
            <div key={swatch.label} className="space-y-s">
              <div className={`h-24 w-24 ${swatch.className}`} />
              <Caption className="text-text-muted">{swatch.label}</Caption>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-2xl border-border-subtle" />

      {/* 5. Interaction */}
      <section className="space-y-xl">
        <Label as="h2" className="text-text-muted">Interaction</Label>
        <div className="flex flex-col items-start gap-s">
          <div className="flex items-center gap-m">
            <div className="h-12 w-12 rounded-full border border-border bg-background-subtle" />
            <Small className="text-text-secondary">Default</Small>
          </div>
          <Caption className="text-text-muted" aria-hidden="true">
            ↓
          </Caption>
          <div className="flex items-center gap-m">
            <div className="h-12 w-12 rounded-full border border-accent-primary bg-background-subtle" />
            <Small className="text-text-secondary">Hovered</Small>
          </div>
          <Caption className="text-text-muted" aria-hidden="true">
            ↓
          </Caption>
          <div className="flex items-center gap-m">
            <div className="h-12 w-12 rounded-full border border-accent-primary bg-background-subtle ring-2 ring-accent-primary ring-offset-2 ring-offset-background" />
            <Small className="text-text-secondary">Focused</Small>
          </div>
          <Caption className="text-text-muted" aria-hidden="true">
            ↓
          </Caption>
          <div className="flex items-center gap-m">
            <div className="h-12 w-12 rounded-full bg-illustration-cutting-mat" />
            <Small className="text-text-secondary">Revealed</Small>
          </div>
        </div>
      </section>

      <hr className="my-2xl border-border-subtle" />

      {/* 6. Combined Example */}
      <section className="space-y-xl">
        <Label as="h2" className="text-text-muted">Combined Example</Label>
        <div className=" space-y-xl">
          <nav className="flex gap-l border-b border-border pb-m">
            <Small
              as="span"
              className="text-text-primary underline decoration-accent-primary decoration-2 underline-offset-8"
            >
              Home
            </Small>
            <Small as="span" className="text-text-secondary">
              About
            </Small>
            <Small as="span" className="text-text-secondary">
              Projects
            </Small>
            <Small as="span" className="text-text-secondary">
              Playground
            </Small>
            <Small as="span" className="text-text-secondary">
              Contact
            </Small>
          </nav>
          <div className="flex flex-col gap-l sm:flex-row sm:items-start">
            <div
              className="h-20 w-20 shrink-0 rounded-full bg-illustration-lily"
              aria-hidden="true"
            />
            <div className="space-y-m">
              <H1 as="p">Hi, I&apos;m Srishti.</H1>
              <Body className="text-text-secondary">
                I&apos;m a product designer who thinks in objects, not
                sections — this desk is where that starts.
              </Body>
              <a
                href="#"
                className="text-accent-primary underline underline-offset-4 hover:text-text-primary"
              >
                <Small as="span">See what I&apos;m making →</Small>
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-2xl border-border-subtle" />

      {/* 7. Token Reference */}
      <section className="space-y-xl pb-3xl">
        <Label as="h2" className="text-text-muted">Token Reference</Label>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-s pr-m">
                  <Label className="text-text-muted">Token</Label>
                </th>
                <th scope="col" className="py-s pr-m">
                  <Label className="text-text-muted">Purpose</Label>
                </th>
                <th scope="col" className="py-s pr-m">
                  <Label className="text-text-muted">Current Value</Label>
                </th>
                <th scope="col" className="py-s">
                  <Label className="text-text-muted">Notes</Label>
                </th>
              </tr>
            </thead>
            <tbody>
              {tokenRows.map((row) => (
                <tr key={row.token} className="border-b border-border-subtle">
                  <td className="py-s pr-m">
                    <div className="flex items-center gap-s">
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full ${row.swatch}`}
                        aria-hidden="true"
                      />
                      <Small as="span">{row.token}</Small>
                    </div>
                  </td>
                  <td className="py-s pr-m">
                    <Small as="span" className="text-text-secondary">
                      {row.purpose}
                    </Small>
                  </td>
                  <td className="py-s pr-m">
                    <Small as="span" className="text-text-secondary">
                      {row.value}
                    </Small>
                  </td>
                  <td className="py-s">
                    <Small as="span" className="text-text-muted">
                      {row.notes}
                    </Small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Container>
  );
}
