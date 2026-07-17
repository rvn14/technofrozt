"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";
import { CTAButtonContent, ctaButtonClasses } from "@/components/CTAButton";
import { services } from "@/data/services";

type FormState = {
  name: string;
  phone: string;
  serviceType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  serviceType: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = useMemo(
    () => services.map((service) => ({ label: service.title, value: service.slug })),
    [],
  );

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function validate(values: FormState) {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Enter your name.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Enter a phone number.";
    } else if (!/^[+\d\s-]{7,18}$/.test(values.phone.trim())) {
      nextErrors.phone = "Use a valid phone number.";
    }

    if (!values.serviceType) {
      nextErrors.serviceType = "Choose a service type.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Describe the issue briefly.";
    }

    return nextErrors;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // TODO: Send this payload to a Next.js Route Handler or email provider.
    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-md bg-white p-5 shadow-[0_20px_60px_rgba(4,20,43,0.09)] sm:p-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm text-brand-title outline-none transition focus:border-brand-blue focus:ring-3 focus:ring-brand-ice/40"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
          />
        </Field>

        <Field label="Phone" error={errors.phone}>
          <input
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm text-brand-title outline-none transition focus:border-brand-blue focus:ring-3 focus:ring-brand-ice/40"
            placeholder="0767801583"
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>

        <Field label="Service Type" error={errors.serviceType}>
          <select
            value={form.serviceType}
            onChange={(event) => updateField("serviceType", event.target.value)}
            className="h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm text-brand-title outline-none transition focus:border-brand-blue focus:ring-3 focus:ring-brand-ice/40"
            aria-invalid={Boolean(errors.serviceType)}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </Field>

        <div className="hidden sm:block" aria-hidden="true" />

        <Field label="Message" error={errors.message} className="sm:col-span-2">
          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="min-h-36 w-full resize-y rounded-md border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-brand-title outline-none transition focus:border-brand-blue focus:ring-3 focus:ring-brand-ice/40"
            placeholder="Tell us what is not working, appliance type, and your location."
            aria-invalid={Boolean(errors.message)}
          />
        </Field>
      </div>

      {submitted ? (
        <p className="mt-5 rounded-md border border-brand-blue/20 bg-brand-light px-4 py-3 text-sm font-semibold text-brand-deep">
          Request captured on this page. Connect the form to email/API before production.
        </p>
      ) : null}

      <button
        type="submit"
        className={ctaButtonClasses("primary", "mt-6 w-full sm:w-auto")}
      >
        <CTAButtonContent icon={<Send className="size-4" />}>Submit Request</CTAButtonContent>
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-black text-brand-title">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm font-semibold text-brand-red-dark">{error}</span> : null}
    </label>
  );
}
