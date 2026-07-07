import type { ElementType, ReactNode } from "react";

const widths = {
  reading: "max-w-reading",
  default: "max-w-default",
  wide: "max-w-wide",
} as const;

type ContainerProps = {
  children: ReactNode;
  width?: keyof typeof widths;
  className?: string;
  as?: ElementType;
};

export function Container({
  as: Tag = "div",
  width = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full px-page ${widths[width]} ${className ?? ""}`}>
      {children}
    </Tag>
  );
}
