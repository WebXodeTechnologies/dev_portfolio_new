"use client";

import React, { useState } from "react";
import { ContactFormData, ContactApiResponse } from "@/types/contact";
import { validateContactForm } from "@/helpers/form.helpers";
import { Button } from "@/app/components/ui/Button";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ loading: boolean; message?: string; success?: boolean }>({
    loading: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus({ loading: true });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: ContactApiResponse = await res.json();
      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, message: data.message });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.message || "Failed to send message.",
        });
      }
    } catch {
      setStatus({
        loading: false,
        success: false,
        message: "An unexpected error occurred.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-sm border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-white focus:border-neutral-500 focus:outline-none"
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-sm border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-white focus:border-neutral-500 focus:outline-none"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-sm border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-white focus:border-neutral-500 focus:outline-none"
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" disabled={status.loading}>
        {status.loading ? "Sending..." : "Send Message"}
      </Button>

      {status.message && (
        <p
          className={`text-sm ${
            status.success ? "text-green-400" : "text-red-400"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};
