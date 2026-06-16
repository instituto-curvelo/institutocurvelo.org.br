import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1280px] px-4 md:px-8", className)}
      {...props}
    />
  );
}

/**
 * Mono coordinate eyebrow — the signature field label.
 * `index` renders an ordinal (// 02 — LABEL) only when the content is a real sequence.
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
      <span aria-hidden className="text-teal-500">//</span>
      {index != null && (
        <span className="tnum text-foreground">
          {String(index).padStart(2, "0")}
        </span>
      )}
      {index != null && <span aria-hidden>—</span>}
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
    <section
      id={id}
      className={cn("scroll-mt-20 py-14 md:py-24", className)}
    >
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
}: {
  eyebrow?: React.ReactNode;
  index?: number;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <FieldLabel index={index} className="mb-4">
          {eyebrow}
        </FieldLabel>
      )}
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

/** Tick-marked hairline divider. */
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
    <div className={cn("rounded-md border border-border bg-card p-4", className)}>
      <div className="field-label mb-2">{label}</div>
      <div className="font-display text-2xl font-semibold tnum text-foreground">
        {value}
      </div>
    </div>
  );
}
