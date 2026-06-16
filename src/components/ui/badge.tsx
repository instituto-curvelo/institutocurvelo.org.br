import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-sans text-xs font-bold uppercase tracking-[0.05em] px-3 py-1",
  {
    variants: {
      variant: {
        brand: "bg-teal-100 text-primary",
        outline: "border border-[#b0bec8] text-muted-foreground",
        amber: "bg-signal-amber/10 text-signal-amber",
        success: "bg-signal-success/10 text-signal-success",
        violet: "bg-teal-100 text-accent",
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
