"use client";

import { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CTAButtonContent, ctaButtonClasses } from "@/components/CTAButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";
import { site } from "@/data/site";

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

    const serviceLabel = serviceOptions.find((service) => service.value === form.serviceType)?.label;
    const message = [
      "Hello TECHNOFROST 👋",
      "",
      "I need help with a service.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Service needed: ${serviceLabel ?? form.serviceType}`,
      `Issue or requirement: ${form.message.trim()}`,
    ].join("\n");

    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label="Name" error={errors.name}>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="h-12 rounded-xl border-slate-200 bg-white px-4 text-brand-title shadow-none focus-visible:border-brand-blue focus-visible:ring-brand-ice/40"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
        </Field>

        <Field id="contact-phone" label="Phone" error={errors.phone}>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="h-12 rounded-xl border-slate-200 bg-white px-4 text-brand-title shadow-none focus-visible:border-brand-blue focus-visible:ring-brand-ice/40"
            placeholder="0767801583"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          />
        </Field>

        <Field id="contact-service" label="Service Type" error={errors.serviceType}>
          <Select
            value={form.serviceType}
            onValueChange={(value) => updateField("serviceType", value)}
          >
            <SelectTrigger
              id="contact-service"
              className="h-12 w-full rounded-xl border-slate-200 bg-white px-4 text-brand-title shadow-none focus-visible:border-brand-blue focus-visible:ring-brand-ice/40"
              aria-invalid={Boolean(errors.serviceType)}
              aria-describedby={errors.serviceType ? "contact-service-error" : undefined}
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent
              position="popper"
              align="start"
              className="rounded-xl border border-slate-200 bg-white p-0 text-brand-title shadow-xl"
            >
              <SelectGroup className="p-1">
                {serviceOptions.map((service) => (
                  <SelectItem
                    key={service.value}
                    value={service.value}
                    className="rounded-lg focus:bg-brand-ice/20 focus:text-brand-navy"
                  >
                    {service.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>

        <div className="hidden sm:block" aria-hidden="true" />

        <Field
          id="contact-message"
          label="Message"
          error={errors.message}
          className="sm:col-span-2"
        >
          <Textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="min-h-36 resize-y rounded-xl border-slate-200 bg-white px-4 py-3 leading-6 text-brand-title shadow-none focus-visible:border-brand-blue focus-visible:ring-brand-ice/40"
            placeholder="Tell us what is not working, appliance type, and your location."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
          />
        </Field>
      </div>

      {submitted ? (
        <p className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-brand-whatsapp-dark" role="status">
          WhatsApp will open with your service details. Review the message and tap Send.
        </p>
      ) : null}

      <Button
        type="submit"
        className={ctaButtonClasses("primary", "mt-6 w-full sm:w-auto")}
      >
        <CTAButtonContent icon={<FaWhatsapp className="size-4" />}>Send via WhatsApp</CTAButtonContent>
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block text-sm font-black text-brand-title">
        {label}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-brand-red-dark">
          {error}
        </p>
      ) : null}
    </div>
  );
}
