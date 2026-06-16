"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-ring/40 transition-colors";

export function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-md border border-teal-400 bg-teal-100/40 p-6">
        <p className="font-display text-lg font-semibold text-teal-700">
          {t({ pt: "Mensagem enviada!", en: "Message sent!" })}
        </p>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {t({
            pt: "Recebemos sua mensagem e entraremos em contato em breve.",
            en: "We received your message and will get in touch soon.",
          })}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">
            {t({ pt: "Nome", en: "Name" })} <span className="text-signal-error">*</span>
          </span>
          <input
            name="name"
            required
            placeholder={t({ pt: "Seu nome", en: "Your name" })}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">
            {t({ pt: "Email", en: "Email" })} <span className="text-signal-error">*</span>
          </span>
          <input
            name="email"
            type="email"
            required
            placeholder="your.email@example.com"
            className={fieldClass}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">
          {t({ pt: "Assunto", en: "Subject" })}
        </span>
        <input
          name="subject"
          placeholder={t({ pt: "Assunto da mensagem", en: "Message subject" })}
          className={fieldClass}
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">
          {t({ pt: "Mensagem", en: "Message" })} <span className="text-signal-error">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t({
            pt: "Conte-nos sobre seu projeto ou consulta",
            en: "Tell us about your project or inquiry",
          })}
          className={cn(fieldClass, "resize-y")}
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-signal-error">
          {t({
            pt: "Por favor, preencha todos os campos obrigatórios e tente novamente.",
            en: "Please fill in all required fields and try again.",
          })}
        </p>
      )}

      <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
        {status === "sending"
          ? t({ pt: "Enviando...", en: "Sending..." })
          : t({ pt: "Enviar mensagem", en: "Send message" })}
      </Button>
    </form>
  );
}
