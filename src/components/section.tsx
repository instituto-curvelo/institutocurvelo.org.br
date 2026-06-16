import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-6", className)}
      {...props}
    />
  );
}

/**
 * Section eyebrow — uppercase accent label.
 * `index` prepends an ordinal (only meaningful for true sequences).
 */
export function FieldLabel({
  children,
  index,
  className,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <span className={cn("field-label inline-flex items-center gap-2", className)}>
      {index != null && (
        <span className="tnum text-primary">{String(index).padStart(2, "0")}</span>
      )}
      {index != null && (
        <span aria-hidden className="h-3 w-px bg-current opacity-40" />
      )}
      <span>{children}</span>
    </span>
  );
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-14 md:py-24", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  className,
  tone = "light",
}: {
  eyebrow?: React.ReactNode;
  index?: number;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  /** "dark" inverts text for use on the deep-blue sections. */
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <FieldLabel index={index} className={cn("mb-3", tone === "dark" && "!text-accent-soft")}>
          {eyebrow}
        </FieldLabel>
      )}
      <h2
        className={cn(
          "font-display text-4xl leading-none md:text-5xl",
          tone === "dark" ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <div className="divider-accent mt-5" />
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "dark" ? "text-white/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Plain hairline divider. */
export function TickRule({ className }: { className?: string }) {
  return <div className={cn("tick-rule", className)} aria-hidden />;
}

/** Bordered readout cell for a key figure. */
export function MetricCell({
  label,
  value,
  className,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-4", className)}>
      <div className="field-label mb-2">{label}</div>
      <div className="font-display text-3xl leading-none tnum text-foreground">
        {value}
      </div>
    </div>
  );
}
