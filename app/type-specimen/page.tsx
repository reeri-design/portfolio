import {
  Display,
  H1,
  H2,
  H3,
  H4,
  BodyLarge,
  Body,
  Small,
  Caption,
  Label,
  Hand,
} from "@/components/typography/Typography";
import { Sample } from "@/components/specimen/Sample";
import { Container } from "@/components/layout/Container";

const referenceRows = [
  {
    style: "Display",
    font: "Kalnia",
    size: "60 / 96px",
    lineHeight: "1.05",
    weight: "Medium",
    usage: "Hero moments, one per page",
  },
  {
    style: "H1",
    font: "Kalnia",
    size: "36 / 48px",
    lineHeight: "1.1",
    weight: "Medium",
    usage: "Page title",
  },
  {
    style: "H2",
    font: "Kalnia",
    size: "30 / 36px",
    lineHeight: "1.15",
    weight: "Medium",
    usage: "Section heading",
  },
  {
    style: "H3",
    font: "DM Sans",
    size: "24 / 30px",
    lineHeight: "1.3",
    weight: "Medium",
    usage: "Sub-section heading",
  },
  {
    style: "H4",
    font: "DM Sans",
    size: "20 / 24px",
    lineHeight: "1.35",
    weight: "Medium",
    usage: "Minor heading, list titles",
  },
  {
    style: "Body Large",
    font: "DM Sans",
    size: "18 / 20px",
    lineHeight: "1.6",
    weight: "Regular",
    usage: "Intro paragraphs, pull quotes",
  },
  {
    style: "Body",
    font: "DM Sans",
    size: "16px",
    lineHeight: "1.6",
    weight: "Regular",
    usage: "Default reading text",
  },
  {
    style: "Small",
    font: "DM Sans",
    size: "14px",
    lineHeight: "1.5",
    weight: "Regular",
    usage: "Secondary text, metadata",
  },
  {
    style: "Caption",
    font: "DM Sans",
    size: "12px",
    lineHeight: "1.4",
    weight: "Regular",
    usage: "Image captions, footnotes",
  },
  {
    style: "Label",
    font: "DM Sans",
    size: "12px",
    lineHeight: "1",
    weight: "Medium",
    usage: "Eyebrows, tags, kickers",
  },
  {
    style: "Hand",
    font: "Lamore",
    size: "20 / 24px",
    lineHeight: "1.3",
    weight: "Regular",
    usage: "Handwritten annotations",
  },
];

export default function TypeSpecimen() {
  return (
    <Container as="main" width="default" className="py-3xl">
      {/* 1. Introduction */}
      <section className="space-y-m">
        <Display as="h1">Typography</Display>
        <Body className="text-text-secondary">
          This page is the living source of truth for how type behaves across
          the portfolio — not a gallery to admire, but a working reference for
          keeping the voice consistent as new pages get built.
        </Body>
      </section>

      <hr className="my-2xl border-border-subtle" />

      {/* 2. Kalnia */}
      <section className="space-y-xl">
        <Label as="h2">Kalnia</Label>
        <Sample label="Display">
          <Display as="p">Hello.</Display>
        </Sample>
        <Sample label="H1">
          <H1 as="p">Unified Estimator Workflow</H1>
        </Sample>
        <Sample label="H2">
          <H2 as="p">Things I Make</H2>
        </Sample>
      </section>

      <hr className="my-2xl border-border-subtle" />

      {/* 3. DM Sans */}
      <section className="space-y-xl">
        <Label as="h2">DM Sans</Label>
        <Sample label="H3">
          <H3 as="p">Selected Case Studies</H3>
        </Sample>
        <Sample label="H4">
          <H4 as="p">Process & Approach</H4>
        </Sample>
        <Sample label="Body Large">
          <BodyLarge className="max-w-md">
            I spend most of my time thinking about how small interactions
            shape whether someone trusts a product enough to keep using it.
          </BodyLarge>
        </Sample>
        <Sample label="Body">
          <Body className="max-w-md">
            This project began with a simple question: why were users
            abandoning the estimator halfway through? Over six weeks, we
            mapped the entire flow, interviewed twelve small business owners,
            and rebuilt the experience around a single moment of clarity.
          </Body>
        </Sample>
        <Sample label="Small">
          <Small>
            Role: Lead Product Designer — Timeline: 6 weeks — Team: 2
            designers, 3 engineers
          </Small>
        </Sample>
        <Sample label="Caption">
          <Caption as="p">
            Fig. 1 — Early wireframe exploring a single-screen estimator flow.
          </Caption>
        </Sample>
        <Sample label="Label">
          <Label>Selected Work</Label>
        </Sample>
      </section>

      <hr className="my-2xl border-border-subtle" />

      {/* 4. Lamore */}
      <section className="space-y-xl">
        <Label as="h2">Lamore</Label>
        <div className="space-y-l">
          <Hand as="p">made with lots of coffee ☕</Hand>
          <Hand as="p">don&apos;t skip this →</Hand>
          <Hand as="p">one of my favourites</Hand>
          <Hand as="p">tiny observations</Hand>
        </div>
      </section>

      <hr className="my-2xl border-border-subtle" />

      {/* 5. Combined Example */}
      <section className="space-y-xl">
        <Label as="h2">Combined Example</Label>
        <div className="space-y-m">
          <Label>Case Study — 01</Label>
          <H1 as="p">Redesigning the Estimator Workflow</H1>
          <Hand as="p">note to self: simplify further</Hand>
          <BodyLarge>
            A six-week deep dive into why small business owners were
            abandoning our estimator halfway through — and what changed when
            we stopped asking them to think like accountants.
          </BodyLarge>
        </div>
      </section>

      <hr className="my-2xl border-border-subtle" />

      {/* 6. Reference Table */}
      <section className="space-y-xl pb-3xl">
        <Label as="h2">Reference Table</Label>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-s pr-m">
                  <Label>Style</Label>
                </th>
                <th scope="col" className="py-s pr-m">
                  <Label>Font</Label>
                </th>
                <th scope="col" className="py-s pr-m">
                  <Label>Size</Label>
                </th>
                <th scope="col" className="py-s pr-m">
                  <Label>Line Height</Label>
                </th>
                <th scope="col" className="py-s pr-m">
                  <Label>Weight</Label>
                </th>
                <th scope="col" className="py-s">
                  <Label>Usage</Label>
                </th>
              </tr>
            </thead>
            <tbody>
              {referenceRows.map((row) => (
                <tr key={row.style} className="border-b border-border-subtle">
                  <td className="py-s pr-m">
                    <Small as="span">{row.style}</Small>
                  </td>
                  <td className="py-s pr-m">
                    <Small as="span">{row.font}</Small>
                  </td>
                  <td className="py-s pr-m">
                    <Small as="span">{row.size}</Small>
                  </td>
                  <td className="py-s pr-m">
                    <Small as="span">{row.lineHeight}</Small>
                  </td>
                  <td className="py-s pr-m">
                    <Small as="span">{row.weight}</Small>
                  </td>
                  <td className="py-s">
                    <Small as="span">{row.usage}</Small>
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
