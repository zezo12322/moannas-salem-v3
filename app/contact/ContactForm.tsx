"use client";

import { useState } from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  Select,
  Spinner,
  TextArea,
  TextField,
} from "@heroui/react";
import { ListBox, ListBoxItem } from "react-aria-components";

const SUBJECTS = [
  { id: "legal",  label: "استشارة قانونية" },
  { id: "psych",  label: "طلب دعم نفسي" },
  { id: "partn",  label: "شراكة مؤسسية" },
  { id: "press",  label: "استفسار إعلامي" },
  { id: "other",  label: "أخرى" },
] as const;

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = "الاسم مطلوب";
  if (!fields.email.trim()) {
    errors.email = "البريد الإلكتروني مطلوب";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "البريد الإلكتروني غير صحيح";
  }
  if (!fields.subject) errors.subject = "يرجى اختيار موضوع التواصل";
  if (!fields.message.trim()) errors.message = "الرسالة مطلوبة";
  return errors;
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(fields);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div
        role="alert"
        className="flex flex-col items-center justify-center gap-4 py-12 px-6 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-cairo font-bold text-lg text-gray-900">تم الإرسال بنجاح!</p>
        <p className="font-tajawal text-gray-600 leading-relaxed max-w-sm">
          شكراً! تم استلام رسالتك، سنتواصل معكِ خلال 24-48 ساعة.
        </p>
        <Button
          variant="ghost"
          size="sm"
          onPress={() => {
            setSubmitted(false);
            setFields({ name: "", email: "", subject: "", message: "" });
            setErrors({});
          }}
        >
          إرسال رسالة أخرى
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <TextField
        name="name"
        value={fields.name}
        onChange={(v) => update("name", v)}
        isRequired
        isInvalid={!!errors.name}
        autoComplete="name"
      >
        <Label>الاسم</Label>
        <Input placeholder="اسمك الكامل" />
        {errors.name && <FieldError>{errors.name}</FieldError>}
      </TextField>

      <TextField
        name="email"
        type="email"
        value={fields.email}
        onChange={(v) => update("email", v)}
        isRequired
        isInvalid={!!errors.email}
        autoComplete="email"
        inputMode="email"
      >
        <Label>البريد الإلكتروني</Label>
        <Input placeholder="example@email.com" dir="ltr" />
        {errors.email && <FieldError>{errors.email}</FieldError>}
      </TextField>

      <Select
        selectedKey={fields.subject || null}
        onSelectionChange={(key) => update("subject", String(key ?? ""))}
        isRequired
        isInvalid={!!errors.subject}
      >
        <Label>موضوع التواصل</Label>
        <Select.Trigger>
          <Select.Value>
            {({ selectedItem }) =>
              (selectedItem as { label?: string } | null)?.label ?? "اختاري الموضوع…"
            }
          </Select.Value>
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover className="min-w-[var(--trigger-width)]">
          <ListBox items={SUBJECTS} dir="rtl" className="outline-none text-right p-1.5">
            {(item) => (
              <ListBoxItem
                id={item.id}
                className="text-right min-h-11 flex items-center justify-end px-3 py-2.5 rounded-lg font-tajawal text-[15px] cursor-pointer data-[focused=true]:bg-primary/10 data-[selected=true]:bg-primary/15 data-[selected=true]:font-semibold transition-colors"
              >
                {item.label}
              </ListBoxItem>
            )}
          </ListBox>
        </Select.Popover>
        {errors.subject && <FieldError>{errors.subject}</FieldError>}
      </Select>

      <TextField
        name="message"
        value={fields.message}
        onChange={(v) => update("message", v)}
        isRequired
        isInvalid={!!errors.message}
      >
        <Label>الرسالة</Label>
        <TextArea rows={4} placeholder="اكتبي رسالتك هنا…" className="resize-none" />
        {errors.message && <FieldError>{errors.message}</FieldError>}
      </TextField>

      <Button
        type="submit"
        size="lg"
        fullWidth
        isPending={loading}
      >
        {({ isPending }) => (
          <>
            {isPending && <Spinner color="current" size="sm" />}
            {isPending ? "جاري الإرسال…" : "إرسال الرسالة"}
          </>
        )}
      </Button>
    </form>
  );
}
