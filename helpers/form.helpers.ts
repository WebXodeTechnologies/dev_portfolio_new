import { ContactFormData } from "@/types/contact";

export function validateContactForm(data: ContactFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim() === "") {
    errors.name = "Name is required.";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Valid email address is required.";
  }

  if (!data.message || data.message.trim() === "") {
    errors.message = "Message is required.";
  }

  return errors;
}
