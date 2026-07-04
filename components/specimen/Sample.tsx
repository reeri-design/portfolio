import type { ReactNode } from "react";
import { Caption } from "@/components/typography/Typography";

export function Sample({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:gap-10">
      <Caption className="text-text-muted sm:w-20 sm:shrink-0 sm:pt-1">
        {label}
      </Caption>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
