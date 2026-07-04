import type { ElementType, ReactNode } from "react";

export const typography = {
  display:
    "font-display text-[3.75rem] md:text-[6rem] font-medium leading-[1.05] tracking-tight",
  h1: "font-display text-[2.25rem] md:text-[3rem] font-medium leading-[1.1] tracking-tight",
  h2: "font-display text-[1.875rem] md:text-[2.25rem] font-medium leading-[1.15] tracking-tight",
  h3: "font-body text-[1.5rem] md:text-[1.875rem] font-medium leading-[1.3]",
  h4: "font-body text-[1.25rem] md:text-[1.5rem] font-medium leading-[1.35]",
  bodyLarge: "font-body text-[1.125rem] md:text-[1.25rem] font-normal leading-[1.6]",
  body: "font-body text-[1rem] font-normal leading-[1.6]",
  small: "font-body text-[0.875rem] font-normal leading-[1.5]",
  caption: "font-body text-[0.75rem] font-normal leading-[1.4]",
  label: "font-body text-[0.75rem] font-medium uppercase tracking-wide leading-[1]",
  hand: "font-hand text-[1.25rem] md:text-[1.5rem] font-normal leading-[1.3]",
} as const;

type TypographyProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Display({ as: Tag = "h1", className, children }: TypographyProps) {
  return <Tag className={`${typography.display} ${className ?? ""}`}>{children}</Tag>;
}

export function H1({ as: Tag = "h1", className, children }: TypographyProps) {
  return <Tag className={`${typography.h1} ${className ?? ""}`}>{children}</Tag>;
}

export function H2({ as: Tag = "h2", className, children }: TypographyProps) {
  return <Tag className={`${typography.h2} ${className ?? ""}`}>{children}</Tag>;
}

export function H3({ as: Tag = "h3", className, children }: TypographyProps) {
  return <Tag className={`${typography.h3} ${className ?? ""}`}>{children}</Tag>;
}

export function H4({ as: Tag = "h4", className, children }: TypographyProps) {
  return <Tag className={`${typography.h4} ${className ?? ""}`}>{children}</Tag>;
}

export function BodyLarge({ as: Tag = "p", className, children }: TypographyProps) {
  return <Tag className={`${typography.bodyLarge} ${className ?? ""}`}>{children}</Tag>;
}

export function Body({ as: Tag = "p", className, children }: TypographyProps) {
  return <Tag className={`${typography.body} ${className ?? ""}`}>{children}</Tag>;
}

export function Small({ as: Tag = "p", className, children }: TypographyProps) {
  return <Tag className={`${typography.small} ${className ?? ""}`}>{children}</Tag>;
}

export function Caption({ as: Tag = "p", className, children }: TypographyProps) {
  return <Tag className={`${typography.caption} ${className ?? ""}`}>{children}</Tag>;
}

export function Label({ as: Tag = "span", className, children }: TypographyProps) {
  return <Tag className={`${typography.label} ${className ?? ""}`}>{children}</Tag>;
}

export function Hand({ as: Tag = "span", className, children }: TypographyProps) {
  return <Tag className={`${typography.hand} ${className ?? ""}`}>{children}</Tag>;
}
