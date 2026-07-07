import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { H1, Body, Label } from "@/components/typography/Typography";

export const metadata: Metadata = {
  title: "Work · reeri.design",
  description: "Selected case studies by Srishti Mittal, Product Designer.",
};

const CASE_STUDIES = [
  {
    href: "/work/beam",
    eyebrow: "BEAM · Enterprise SaaS",
    title: "Unified Estimator Workflow",
    summary:
      "A flexible, role-based workflow system for a construction takeoff platform — with human-in-the-loop AI training designed in from the start.",
  },
] as const;

export default function WorkIndex() {
  return (
    <main className="flex-1">
      <Container width="reading" className="pb-2xl pt-3xl">
        <Label as="p" className="mb-l text-text-muted">Work</Label>
        <H1 className="mb-xl text-text-primary">Selected case studies</H1>

        <ul className="space-y-l">
          {CASE_STUDIES.map((study) => (
            <li key={study.href}>
              <Link
                href={study.href}
                className="group block border border-border p-l transition-colors duration-200 hover:border-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:p-xl"
              >
                <Label as="p" className="mb-m text-text-muted">
                  {study.eyebrow}
                </Label>
                <h2 className="mb-m font-display text-[1.5rem] font-medium leading-[1.15] tracking-tight text-text-primary md:text-[1.875rem]">
                  {study.title}
                </h2>
                <Body className="max-w-[34rem] text-text-secondary">
                  {study.summary}
                </Body>
                <Label
                  as="span"
                  className="mt-l inline-block text-text-muted transition-colors duration-200 group-hover:text-accent-primary"
                >
                  Read the case study →
                </Label>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
