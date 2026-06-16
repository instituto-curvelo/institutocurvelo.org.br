import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full font-mono text-xs font-medium uppercase tracking-[0.08em] px-2.5 py-1",
  {
    variants: {
      variant: {
        brand: "bg-teal-100 text-teal-700",
        outline: "border border-border text-muted-foreground",
        amber: "bg-signal-amber/15 text-signal-amber",
        success: "bg-signal-success/15 text-signal-success",
        violet: "bg-signal-violet/15 text-signal-violet",
      },
    },
    defaultVariants: { variant: "brand" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
