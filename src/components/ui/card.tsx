import * as React from "react";
import { cn } from "@/lib/utils";

/** Flat card: paper fill, hairline border, no rest shadow. */
export function Card({
  className,
  interactive = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-card text-card-foreground",
        interactive &&
          "transition-colors duration-150 hover:border-teal-400 hover:shadow-[0_1px_2px_hsl(192_38%_9%/0.06),0_8px_24px_-12px_hsl(192_38%_9%/0.12)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}
