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

const PROGRAMS = [
  { id: "mobile",  label: "تدريب صحافة الموبايل" },
  { id: "junior",  label: "مؤنث سالم جونيور" },
  { id: "writing", label: "ورشة الكتابة الإبداعية — طعم الكلام" },
  { id: "gender",  label: "ورشة اللغة الحساسة للنوع الاجتماعي" },
  { id: "psych",   label: "ورشة الدعم النفسي للصحفيات" },
] as const;

interface FormFields {
  name: string;
  email: string;
  phone: string;
  program: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  program?: string;
}

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = "الاسم الكامل مطلوب";
  if (!fields.email.trim()) {
    errors.email = "البريد الإلكتروني مطلوب";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "البريد الإلكتروني غير صحيح";
  }
  if (!fields.phone.trim()) {
    errors.phone = "رقم الهاتف مطلوب";
  } else if (!/^[\d\s+\-()]{7,}$/.test(fields.phone)) {
    errors.phone = "رقم الهاتف غير صحيح";
  }
  if (!fields.program) errors.program = "يرجى اختيار البرنامج";
  return errors;
}

interface TrainingRegistrationFormProps {
  defaultProgram?: string;
}

export default function TrainingRegistrationForm({
  defaultProgram = "",
}: TrainingRegistrationFormProps) {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    program: defaultProgram,
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof FormErrors]) {
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
        <p className="font-cairo font-bold text-lg text-gray-900">تم تسجيل طلبك!</p>
        <p className="font-tajawal text-gray-600 leading-relaxed max-w-sm">
          تم تسجيل طلبك بنجاح! سنتواصل معكِ خلال 48 ساعة بتفاصيل البرنامج.
        </p>
        <Button
          variant="ghost"
          size="sm"
          onPress={() => {
            setSubmitted(false);
            setFields({ name: "", email: "", phone: "", program: "", notes: "" });
            setErrors({});
          }}
        >
          تسجيل طلب آخر
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
        <Label>الاسم الكامل</Label>
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

      <TextField
        name="phone"
        type="tel"
        value={fields.phone}
        onChange={(v) => update("phone", v)}
        isRequired
        isInvalid={!!errors.phone}
        autoComplete="tel"
        inputMode="tel"
      >
        <Label>رقم الهاتف</Label>
        <Input placeholder="01xxxxxxxxx" dir="ltr" />
        {errors.phone && <FieldError>{errors.phone}</FieldError>}
      </TextField>

      <Select
        selectedKey={fields.program || null}
        onSelectionChange={(key) => update("program", String(key ?? ""))}
        isRequired
        isInvalid={!!errors.program}
      >
        <Label>البرنامج المطلوب</Label>
        <Select.Trigger>
          <Select.Value>
            {({ selectedItem }) =>
              (selectedItem as { label?: string } | null)?.label ?? "اختاري البرنامج…"
            }
          </Select.Value>
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover className="min-w-[var(--trigger-width)]">
          <ListBox items={PROGRAMS} dir="rtl" className="outline-none text-right p-1.5">
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
        {errors.program && <FieldError>{errors.program}</FieldError>}
      </Select>

      <TextField
        name="notes"
        value={fields.notes}
        onChange={(v) => update("notes", v)}
      >
        <Label>
          ملاحظات{" "}
          <span className="text-gray-400 font-tajawal text-xs font-normal">(اختياري)</span>
        </Label>
        <TextArea
          rows={3}
          placeholder="أي معلومات إضافية تودين مشاركتها…"
          className="resize-none"
        />
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
            {isPending ? "جاري التسجيل…" : "سجلي الآن"}
          </>
        )}
      </Button>
    </form>
  );
}
