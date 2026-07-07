import type { ReactNode } from "react";
import { Caption } from "@/components/typography/Typography";

export function Sample({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-s sm:flex-row sm:gap-xl">
      <Caption className="text-text-muted sm:w-20 sm:shrink-0 sm:pt-xs">
        {label}
      </Caption>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
