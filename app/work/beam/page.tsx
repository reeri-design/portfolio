import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Label, Caption } from "@/components/typography/Typography";
import { SectionNav } from "@/components/navigation/SectionNav";

export const metadata: Metadata = {
  title: "BEAM — Unified Estimator Workflow · reeri.design",
  description:
    "Designing a flexible, role-based workflow system for a construction takeoff platform — across Ops, Team Leads, and Estimators — while enabling human-in-the-loop AI training at scale.",
};

/* ---------------------------------------------------------
   Local building blocks — specific to case study pages.
   If a second case study reuses these, promote them to
   components/case-study/.
--------------------------------------------------------- */

function Prose({
  children,
  className,
  small = false,
}: {
  children: ReactNode;
  className?: string;
  // Tailwind resolves same-property class conflicts by CSS source order, not
  // JSX order — so a caller passing a smaller text-[...]/leading-[...] via
  // className can't reliably override these base sizes. Use this prop instead.
  small?: boolean;
}) {
  const size = small ? "text-[0.875rem] leading-[1.65]" : "text-[1rem] leading-[1.75]";
  return (
    <p className={`font-body ${size} text-text-secondary ${className ?? ""}`}>
      {children}
    </p>
  );
}

function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-text-primary">{children}</strong>;
}

// Shared "card" title/body pair — the small bold title + secondary
// paragraph used in Decision's trade-off cards, Role, and Production.
// One size (13px title, 13px/1.55 body) so it doesn't drift per section.
function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-body text-[0.8125rem] font-medium text-text-primary ${className ?? ""}`}>
      {children}
    </p>
  );
}

function CardItem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <CardTitle className="mb-xs">{title}</CardTitle>
      <p className="font-body text-[0.8125rem] leading-[1.55] text-text-secondary">
        {children}
      </p>
    </div>
  );
}

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-2xl border-b border-border">
      <Container width="reading" className="py-2xl">
        <Label as="p" className="mb-xl text-text-muted">{label}</Label>
        <div className="space-y-l">{children}</div>
      </Container>
    </section>
  );
}

function ScreenBlock({
  label,
  node,
  ratio = "16 / 9",
  caption,
}: {
  label: string;
  node: string;
  ratio?: string;
  caption: ReactNode;
}) {
  return (
    <figure className="my-m">
      {/* Placeholder — replaced by exported screens later. Node ID keeps
          the mapping back to Figma unambiguous. */}
      <div
        className="flex w-full flex-col items-center justify-center gap-s border border-border bg-background-subtle"
        style={{ aspectRatio: ratio }}
      >
        <Caption className="text-text-muted">{label}</Caption>
        <Caption className="text-border">Figma · {node}</Caption>
      </div>
      <figcaption className="mt-s">
        <Caption className="text-text-muted">{caption}</Caption>
      </figcaption>
    </figure>
  );
}

/* Section list is the single source of truth for both the in-hero
   overview ToC and the margin SectionNav. `id` matches each
   <Section id> on the page. */
const SECTIONS = [
  { id: "outcomes", label: "Outcomes" },
  { id: "problem", label: "Problem" },
  { id: "decision", label: "Decision" },
  { id: "system", label: "System" },
  { id: "ai", label: "AI" },
  { id: "role", label: "Role" },
  { id: "production", label: "Production" },
  { id: "learnings", label: "Learnings" },
] as const;

const HERO_ID = "beam-hero";

export default function BeamCaseStudy() {
  return (
    <main className="flex-1">
      <SectionNav sections={SECTIONS} heroId={HERO_ID} />

      {/* HERO */}
      <section id={HERO_ID} className="border-b border-border">
        <Container width="reading" className="pb-2xl pt-3xl">
          <Label as="p" className="mb-l text-text-muted">Case study · BEAM</Label>
          <h1 className="mb-l font-display text-[2.25rem] font-medium leading-[1.1] tracking-tight text-text-primary md:text-[3.25rem]">
            Unified Estimator Workflow
          </h1>
          <p className="mb-2xl max-w-[32.5rem] font-body text-[1.0625rem] leading-[1.65] text-text-secondary">
            Designing a flexible, role-based workflow system for a construction
            takeoff platform — across Ops, Team Leads, and Estimators — while
            enabling human-in-the-loop AI training at scale.
          </p>

          <dl className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">
            {[
              ["Role", "Lead Product Designer"],
              ["Duration", "6–12 months"],
              ["Platform", "SaaS — Web"],
              ["Collaboration", "PM, Eng, Ops, QA"],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-r border-border p-m">
                <dt>
                  <Label as="span" className="text-text-muted">
                    {label}
                  </Label>
                </dt>
                <dd className="mt-xs font-body text-[0.8125rem] font-medium leading-[1.3] text-text-primary">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* OUTCOMES */}
      <Section id="outcomes" label="Outcomes">
        <div className="grid border-l border-t border-border md:grid-cols-3">
          {[
            ["30%", "reduction in turnaround time (TAT)"],
            ["800+", "users scaled, ~5× growth from V1"],
            ["0", "external tools needed for project communication"],
          ].map(([num, desc]) => (
            <div key={desc} className="border-b border-r border-border p-l">
              <p className="font-display text-[2.5rem] leading-none text-text-primary">
                {num}
              </p>
              <p className="mt-s font-body text-[0.8125rem] leading-[1.4] text-text-secondary">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROBLEM */}
      <Section id="problem" label="Problem">
        <blockquote className="border-l-[1.5px] border-text-primary py-xs pl-l">
          <p className="font-display text-[1.25rem] italic leading-[1.5] text-text-primary">
            Ops Leads and Team Leads were solving the same visibility problem in
            opposite directions. Neither had what the other thought they had.
          </p>
        </blockquote>

        <Prose>
          Ops wanted a bird’s-eye view across all teams. Team Leads needed
          ground-level bandwidth data. The coordination overhead wasn’t a
          process failure — it was a visibility gap built into how information
          was structured.
        </Prose>

        <Prose>
          This surfaced through interviews and working sessions with all three
          user types. What looked like a communication problem was actually
          structural. Projects lived in Excel, coordination happened across
          Google Chat, Slack, and email, and the annotation canvas where
          estimators did the actual work was entirely separate.
        </Prose>

        <Prose>
          The result: assignments made from incomplete information, updated
          every few hours over chat. When cross-team dependencies or delays
          came up, there was no clear owner. Every edge case required manual
          intervention because no one had a complete picture.
        </Prose>

        <div className="grid border border-border md:grid-cols-2">
          <div className="border-b border-border p-l md:border-b-0 md:border-r">
            <Label as="p" className="mb-m text-text-muted">Before</Label>
            <ul className="space-y-xs">
              {[
                "Excel for project tracking",
                "Google Chat, Slack, email for coordination",
                "Separate annotation canvas",
                "No shared visibility across roles",
                "Manual assignment from incomplete data",
              ].map((item) => (
                <li
                  key={item}
                  className="relative pl-m font-body text-[0.8125rem] leading-[1.55] text-text-secondary before:absolute before:left-0 before:text-border before:content-['—']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-l">
            <Label as="p" className="mb-m text-accent-primary">After</Label>
            <ul className="space-y-xs">
              {[
                "Single platform for all project activity",
                "Threaded communication by type (TAT, RFI, general)",
                "Takeoff and task in one surface",
                "Role-based visibility at every stage",
                "Assignment driven by quantified bandwidth data",
              ].map((item) => (
                <li
                  key={item}
                  className="relative pl-m font-body text-[0.8125rem] leading-[1.55] text-text-secondary before:absolute before:left-0 before:text-border before:content-['—']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ScreenBlock
          label="Before state — unassigned project table"
          node="7690:43703"
          ratio="16 / 7"
          caption={
            <>
              <Strong>Every row shows USER UNASSIGNED</Strong> — no team, no
              dates, no status. The design problem wasn’t adding fields; it was
              building the infrastructure that made assignment possible with
              confidence.
            </>
          }
        />
      </Section>

      {/* DECISION */}
      <Section id="decision" label="The decision that shaped everything">
        <Prose>
          The core design decision I drove was whether to standardize workflows
          or design for flexibility. This wasn’t a UX question — it was a
          product strategy question with direct implications for adoption risk
          across teams with different working styles.
        </Prose>

        <div className="border border-border">
          <div className="border-b border-border px-l py-m">
            <Label as="p" className="text-text-muted">Trade-off considered</Label>
            <CardTitle className="mt-xs">Standardized SOP vs. flexible workflow model</CardTitle>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="border-b border-border p-l md:border-b-0 md:border-r">
              <Label as="p" className="mb-s text-text-muted">Not chosen</Label>
              <CardItem title="Rigid SOP">
                Faster to implement, easier to track compliance. But would
                require teams to abandon existing processes and introduce
                workarounds from day one.
              </CardItem>
            </div>
            <div className="p-l">
              <Label as="p" className="mb-s text-accent-primary">Chosen</Label>
              <CardItem title="Flexible, guided workflow">
                Teams operate within a shared structure while retaining their
                working style. A roofing team tags different subtrades than an
                HVAC team — but both work through the same scoping and handoff
                flow.
              </CardItem>
            </div>
          </div>
          <div className="border-t border-border bg-background-subtle px-l py-m">
            <p className="font-body text-[0.75rem] leading-[1.55] text-text-muted">
              Trade-off: longer build time and iterative onboarding — accepted
              in exchange for lower adoption risk. A rigid SOP would have been
              bypassed within weeks.
            </p>
          </div>
        </div>

        <Prose>
          Making this case internally was part of the work. A flexible system
          is harder to sell than a rigid one — it’s less predictable to
          implement and harder to validate early. I worked directly with the PM
          and ops stakeholders to build the argument before the direction was
          locked, anchoring it in what teams had told us in research about
          their existing working patterns.
        </Prose>
      </Section>

      {/* SYSTEM */}
      <Section id="system" label="The system">
        <Prose>
          Each role owns a defined scope, and ownership transfers at explicit
          handoff points — which is what made edge cases resolvable. When a
          cross-team issue came up, the structure made it clear who needed to
          act, and the communication layer surfaced it to the right people
          without a separate escalation process.
        </Prose>

        <div>
          <FlowStep role="Ops Lead" title="Scope and assign">
            <Prose small>
              Projects are broken into trades. Ops reviews, routes, and assigns
              based on team capacity and deadline priority — with full project
              status and internal threads in the same view.
            </Prose>
            <ScreenBlock
              label="Unified project view — communication + takeoff"
              node="6844:10711"
              caption={
                <>
                  <Strong>
                    Filter chips (Trade unassigned, Due tomorrow, Due this week)
                    are built around real workflow failure modes, not generic
                    filters.
                  </Strong>{" "}
                  Threads are typed by purpose — General, TAT, RFI — rather than
                  chronological, and per-project subtrade completion % gives Ops
                  a status signal without opening each record.
                </>
              }
            />
          </FlowStep>

          <FlowStep role="Team Lead" title="Assign by bandwidth">
            <Prose small>
              TLs see who is available, for how long, and what type of work
              they’re carrying — using the Schedule view to spot conflicts and
              plan ahead before committing assignments.
            </Prose>
            <p className="font-body text-[0.75rem] italic leading-[1.55] text-text-muted">
              This is what directly drove the 30% TAT reduction. Bandwidth
              visibility → confident assignment → deadline tracked actively →
              less time lost to back-and-forth.
            </p>
            <ScreenBlock
              label="Schedule / Gantt — bandwidth and conflict detection"
              node="57:40349"
              caption={
                <>
                  <Strong>
                    Rows at 38 hrs carry an automatic overload warning
                  </Strong>{" "}
                  — conflict detection without manual scanning. Colour-coding
                  by task type (QC work, QA work, Leave, Meeting) lets a TL
                  understand what kind of work is filling the week, not just
                  that it’s full. Filter row surfaces only available capacity
                  on demand.
                </>
              }
            />
          </FlowStep>

          <FlowStep role="Estimator" title="Task + annotate">
            <Prose small>
              Estimators work through structured checklists tied directly to
              their annotations — takeoff and task in one view, no tool
              switching. Each action also feeds the AI model.
            </Prose>
            <ScreenBlock
              label="Work Breakdown — scoping tab"
              node="1256:126846"
              caption={
                <>
                  <Strong>
                    Showing the effort logic inline — not just the output —
                    reduces estimation disputes.
                  </Strong>{" "}
                  The formula (QC: 1h 49m, (60 + 0) × 1.4 = 84m; QA ≈ 25% of QC)
                  was established through secondary research with ops and PM. The
                  “Carry forward” banner means estimators don’t re-scope similar
                  sheets from scratch — compounding across ~30 sheets per
                  project.
                </>
              }
            />
          </FlowStep>

          <FlowStep role="QA" title="Task-level review">
            <Prose small>
              QA reviews at a task level, not just on final output — so issues
              are caught before they compound across trades. This also creates
              a buffer before the delivery window, giving Ops and TLs
              visibility into delays without a last-minute scramble.
            </Prose>
            <p className="font-body text-[0.75rem] italic leading-[1.55] text-text-muted">
              Deliberate decision: catching issues early at task level beats a
              single QA gate at delivery. The buffer window was equally
              intentional.
            </p>
            <ScreenBlock
              label="Work Breakdown — allocations tab"
              node="1245:124596"
              caption={
                <>
                  <Strong>
                    Countdown timer (02:34:23) tied to a specific deadline
                  </Strong>{" "}
                  — urgency visible without mental math. Per-sheet progress bar
                  (0 of 8 sheets / 80%) lets a TL see at a glance if a task is
                  on track, without asking. TL notes surface inline with
                  checklist items so context lives where the work happens.
                </>
              }
            />
          </FlowStep>

          <FlowStep role="Ops Lead" title="Final review and delivery" last>
            <Prose small>
              Centralized sign-off before the project exits the system. Ops
              Lead owns final delivery because they have cross-team visibility
              that TLs don’t — this aligned with how ops already worked and
              made structural sense.
            </Prose>
          </FlowStep>
        </div>
      </Section>

      {/* AI */}
      <Section id="ai" label="Human-in-the-loop AI">
        <Prose>
          A constraint I held throughout: the workflow layer couldn’t create
          friction that degraded the signal quality the annotation system was
          trying to capture. The loop worked like this:
        </Prose>

        <ol className="grid border border-border md:grid-cols-5">
          {[
            "Estimator scopes sheet",
            "Model suggests detections",
            "Estimator confirms or corrects",
            "Corrections feed back into training",
            "Model improves over time",
          ].map((step, index, steps) => (
            <li
              key={step}
              className={`p-m text-left font-body text-[0.75rem] leading-[1.4] text-text-secondary md:text-center ${
                index < steps.length - 1
                  ? "border-b border-border md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              {step}
            </li>
          ))}
        </ol>

        <Prose>
          Without the AI training requirement, estimator inputs could have
          stayed flexible and free-form. But every annotation had to be usable
          as structured training data, so the scoping structure had a second
          audience: the model downstream. That’s what made complexity tags
          (Low / Medium / High) and QA sensitivity tags mandatory rather than
          optional, kept checklist boundaries explicit, and turned ambiguity at
          the scoping layer into a data-quality problem, not just a UX one —
          non-negotiable because of the model, not workflow convenience.
        </Prose>

        <Prose>
          I coordinated with the annotation UX workstream throughout to ensure
          the task structure didn’t introduce gaps at the point where
          estimators moved from workflow into canvas. The two systems had to
          feel seamless to the estimator while serving different downstream
          purposes.
        </Prose>

        <ScreenBlock
          label="History panel — audit trail"
          node="1802:9982"
          ratio="16 / 10"
          caption={
            <>
              <Strong>
                “System · auto” entries show framing blocks generated
                automatically from scoped sheets
              </Strong>{" "}
              — the workflow layer feeding the AI pipeline in real time.
              Critical changes are flagged with a marker; not all history is
              equal, and the design reflects that. Two tabs separate the human
              workflow trail from the takeoff-level record.
            </>
          }
        />
      </Section>

      {/* ROLE */}
      <Section id="role" label="My role">
        <Prose>
          As Lead Product Designer, I owned end-to-end design across this
          system — from research through rollout. A significant part of the
          work was alignment, not just design. The flexible workflow model was
          a harder internal sell than a rigid SOP — it required building a
          concrete case for why adoption risk justified the longer build time,
          and making that argument to PM and ops stakeholders before the
          direction was locked.
        </Prose>

        <div className="grid border-l border-t border-border md:grid-cols-2">
          {[
            [
              "User research",
              "Interviews and working sessions across all three user types to map actual breakdowns, not just surface-level pain points.",
            ],
            [
              "Workflow definition",
              "Defining the flexible workflow model, ownership boundaries, and decision points — including the QC/QA effort framework developed with ops and PM through secondary research.",
            ],
            [
              "System + interaction design",
              "Figma prototypes alongside workflow and system diagrams — both were necessary to communicate the design to different stakeholders.",
            ],
            [
              "Rollout support",
              "Embedded through early rollout for validation and iteration — catching edge cases in production that prototypes hadn't surfaced, including a full notification architecture redesign.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="border-b border-r border-border p-l">
              <CardItem title={title}>{body}</CardItem>
            </div>
          ))}
        </div>

        <Prose>
          AI allocation improvements shipped after my handoff were built on the
          annotation system’s extensibility — designed in from the start
          specifically to allow iteration without a full rebuild.
        </Prose>
      </Section>

      {/* PRODUCTION REALITIES */}
      <Section id="production" label="Production realities">
        <Prose>
          Within the first week of rollout, a pattern emerged: users were
          muting browser notifications and ignoring system alerts. The
          platform’s notification engine had no role-based constraints — when
          an estimator completed a single sheet inside a 50-sheet project, a
          generic update fired to every Ops Lead and TL across the division.
          Critical escalations were getting buried in noise.
        </Prose>

        <Prose>
          I paired with engineering to redesign the notification architecture
          from the ground up around three principles:
        </Prose>

        <div className="grid border border-border md:grid-cols-3">
          {[
            [
              "Draft silence",
              "Zero notifications fire while a TL is dragging, splitting, or rearranging blocks in allocation mode. The system waits for intent to be confirmed before alerting anyone.",
            ],
            [
              "Publish batching",
              "Notifications only fire on the TL's Publish action. If a single publish assigns five blocks to one estimator, they receive one notification — not five separate pings.",
            ],
            [
              "Action-oriented messages",
              "Every notification states what happened and what the recipient needs to do next, with a direct link to the relevant view.",
            ],
          ].map(([title, body], index, items) => (
            <div
              key={title}
              className={`p-l ${
                index < items.length - 1
                  ? "border-b border-border md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <CardItem title={title}>{body}</CardItem>
            </div>
          ))}
        </div>

        <Prose>
          The redesign also introduced two layers of user control. Senders
          (TLs) got a Silent Publish checkbox on the confirmation modal — for
          minor schedule tweaks that don’t warrant alerting the team. Receivers
          got per-category toggles in notification preferences so users could
          manage their own signal-to-noise ratio without opting out entirely.
        </Prose>

        <figure className="my-m">
          <NotificationDiagram />
          <figcaption className="mt-s">
            <Caption className="text-text-muted">
              The notification architecture after redesign — three gates before
              delivery, role-filtered routing at the end. Critical alerts (new
              assignments, scope creep, final delivery) became actionable again
              because they were no longer competing with routine progress
              updates.
            </Caption>
          </figcaption>
        </figure>

        <ScreenBlock
          label="Notification controls — Silent Publish + preference toggles"
          node="9089:91722"
          ratio="16 / 7"
          caption={
            <>
              <Strong>Silent Publish checkbox on the confirmation modal</Strong>{" "}
              gives TLs sender-level control — minor schedule tweaks don’t
              trigger alerts. Per-category toggles (New Assignments, Schedule
              Updates, Scope Creep Warnings) give receivers control without
              opting out entirely.
            </>
          }
        />
      </Section>

      {/* LEARNINGS */}
      <Section id="learnings" label="Learnings">
        <div>
          {[
            [
              "Enterprise design is workflow design",
              "The hardest part of this project wasn't the UI — it was structuring responsibilities clearly enough that the system could be handed from one role to the next without ambiguity. In multi-team enterprise products, the deeper design problem is ownership and flow. Usability is a layer on top of that, not the foundation.",
            ],
            [
              "Flexibility has to be earned, not assumed",
              "Building a flexible system is slower and harder to validate than a rigid one. The adoption benefits don't show up in a prototype — they show up when teams with different working styles actually use it without bypassing it. On this project that required making a concrete, defensible argument early, before the decision was locked.",
            ],
            [
              "Design decisions have a longer tail than the project",
              "The features built after I left — AI allocation updates, the expanded Work Items tab, the enhanced history panel — were possible because the architecture had been designed with extensibility in mind. The notification system was the counter-example: we hadn't fully thought through role-based constraints, and had to revisit it during rollout. The most durable decisions are sometimes the ones you make for builders you'll never meet. The most costly ones are the edge cases you leave for production to surface.",
            ],
          ].map(([title, body], index, items) => (
            <div
              key={title}
              className={`border-t border-border-subtle py-xl ${
                index === items.length - 1 ? "border-b" : ""
              }`}
            >
              <p className="mb-s font-body text-[1rem] font-medium text-text-primary">
                {title}
              </p>
              <p className="font-body text-[0.9375rem] leading-[1.75] text-text-secondary">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

/* ---------------------------------------------------------
   Notification architecture diagram — treated as illustration
   content (like a screenshot), so it keeps its own internal
   palette rather than interface tokens. Inline SVG so text
   inherits the site's loaded fonts.
--------------------------------------------------------- */
function NotificationDiagram() {
  const sans = "var(--font-dm-sans), sans-serif";
  return (
    <svg
      width="100%"
      viewBox="0 0 680 520"
      role="img"
      aria-label="BEAM notification architecture: flowchart showing draft silence check, publish batching, silent publish bypass, and role-filtered delivery to Ops Lead, Team Lead, and Estimator/QC/QA"
      className="block border border-border bg-background-subtle"
    >
      <defs>
        <marker
          id="arr2"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="context-stroke"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>

      {/* Trigger */}
      <rect x="240" y="30" width="200" height="44" rx="8" fill="#E8E8E4" stroke="#D8D8D2" strokeWidth="0.5" />
      <text x="340" y="52" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="12" fill="#1A1A1A">
        System event generated
      </text>

      <line x1="340" y1="74" x2="340" y2="104" stroke="#9A9A94" strokeWidth="1" markerEnd="url(#arr2)" />

      {/* Draft silence */}
      <rect x="190" y="106" width="300" height="56" rx="8" fill="#FAEEDA" stroke="#EF9F27" strokeWidth="0.5" />
      <text x="340" y="126" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="13" fontWeight="500" fill="#633806">
        Draft silence check
      </text>
      <text x="340" y="146" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="12" fill="#854F0B">
        Is TL in allocation draft mode?
      </text>

      {/* Yes → suppress */}
      <line x1="490" y1="134" x2="558" y2="134" stroke="#9A9A94" strokeWidth="1" markerEnd="url(#arr2)" />
      <text x="524" y="126" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#9A9A94">
        Yes
      </text>
      <rect x="560" y="112" width="96" height="44" rx="8" fill="#E8E8E4" stroke="#D8D8D2" strokeWidth="0.5" />
      <text x="608" y="128" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="12" fontWeight="500" fill="#5C5C58">
        Suppressed
      </text>
      <text x="608" y="144" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#9A9A94">
        no notification
      </text>

      {/* No → down */}
      <text x="352" y="178" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#9A9A94">
        No
      </text>
      <line x1="340" y1="162" x2="340" y2="194" stroke="#9A9A94" strokeWidth="1" markerEnd="url(#arr2)" />

      {/* Publish batching */}
      <rect x="190" y="196" width="300" height="56" rx="8" fill="#E1F5EE" stroke="#0F6E56" strokeWidth="0.5" />
      <text x="340" y="216" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="13" fontWeight="500" fill="#04342C">
        Publish batching
      </text>
      <text x="340" y="236" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="12" fill="#085041">
        Group by user — one notification per publish
      </text>

      <line x1="340" y1="252" x2="340" y2="282" stroke="#9A9A94" strokeWidth="1" markerEnd="url(#arr2)" />

      {/* Silent publish */}
      <rect x="190" y="284" width="300" height="56" rx="8" fill="#E8E8E4" stroke="#D8D8D2" strokeWidth="0.5" />
      <text x="340" y="304" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="13" fontWeight="500" fill="#1A1A1A">
        Silent publish?
      </text>
      <text x="340" y="324" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="12" fill="#5C5C58">
        TL unchecked “notify users”
      </text>

      {/* Yes → suppress */}
      <line x1="490" y1="312" x2="558" y2="312" stroke="#9A9A94" strokeWidth="1" markerEnd="url(#arr2)" />
      <text x="524" y="304" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#9A9A94">
        Yes
      </text>
      <rect x="560" y="290" width="96" height="44" rx="8" fill="#E8E8E4" stroke="#D8D8D2" strokeWidth="0.5" />
      <text x="608" y="306" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="12" fontWeight="500" fill="#5C5C58">
        Suppressed
      </text>
      <text x="608" y="322" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#9A9A94">
        DB updates only
      </text>

      {/* No → down to role filter */}
      <text x="352" y="356" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#9A9A94">
        No
      </text>
      <line x1="340" y1="340" x2="340" y2="370" stroke="#9A9A94" strokeWidth="1" markerEnd="url(#arr2)" />
      <text x="340" y="385" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#9A9A94">
        Route by recipient role
      </text>

      {/* Three role boxes */}
      <line x1="260" y1="392" x2="115" y2="405" stroke="#9A9A94" strokeWidth="1" markerEnd="url(#arr2)" />
      <line x1="340" y1="392" x2="340" y2="405" stroke="#9A9A94" strokeWidth="1" markerEnd="url(#arr2)" />
      <line x1="420" y1="392" x2="565" y2="405" stroke="#9A9A94" strokeWidth="1" markerEnd="url(#arr2)" />

      {/* Ops Lead */}
      <rect x="30" y="406" width="170" height="90" rx="8" fill="#EEEDFE" stroke="#534AB7" strokeWidth="0.5" />
      <text x="115" y="424" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="13" fontWeight="500" fill="#26215C">
        Ops Lead
      </text>
      <text x="115" y="442" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#3C3489">
        Team assigned
      </text>
      <text x="115" y="458" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#3C3489">
        Scope creep flag
      </text>
      <text x="115" y="474" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#3C3489">
        Final delivery
      </text>

      {/* Team Lead */}
      <rect x="255" y="406" width="170" height="90" rx="8" fill="#E1F5EE" stroke="#0F6E56" strokeWidth="0.5" />
      <text x="340" y="424" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="13" fontWeight="500" fill="#04342C">
        Team Lead
      </text>
      <text x="340" y="442" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#085041">
        Scoping complete
      </text>
      <text x="340" y="458" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#085041">
        Overload warning
      </text>
      <text x="340" y="474" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#085041">
        Scope creep flag
      </text>

      {/* Estimator / QC / QA */}
      <rect x="480" y="406" width="170" height="90" rx="8" fill="#FAECE7" stroke="#993C1D" strokeWidth="0.5" />
      <text x="565" y="424" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="13" fontWeight="500" fill="#4A1B0C">
        Estimator / QC / QA
      </text>
      <text x="565" y="442" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#712B13">
        New work allocated
      </text>
      <text x="565" y="458" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#712B13">
        Schedule modified
      </text>
      <text x="565" y="474" textAnchor="middle" dominantBaseline="central" fontFamily={sans} fontSize="11" fill="#712B13">
        Assignment removed
      </text>
    </svg>
  );
}

function FlowStep({
  role,
  title,
  last = false,
  children,
}: {
  role: string;
  title: string;
  last?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`grid gap-s border-t border-border-subtle py-xl md:grid-cols-[140px_1fr] md:gap-xl ${
        last ? "border-b" : ""
      }`}
    >
      <div>
        <Label as="p" className="text-text-muted">{role}</Label>
        <p className="mt-xs font-body text-[0.875rem] font-medium text-text-primary">
          {title}
        </p>
      </div>
      <div className="space-y-m">{children}</div>
    </div>
  );
}
