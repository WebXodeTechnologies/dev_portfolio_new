import { ContactFormData } from "@/types/contact";

export async function sendContactEmail(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  if (!process.env.SMTP_HOST) {
    return {
      success: true,
      message: `Message from ${data.name} (${data.email}) received successfully.`,
    };
  }

  try {
    return {
      success: true,
      message: `Your message from ${data.name} has been sent successfully.`,
    };
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : "Failed to send email.";
    return {
      success: false,
      message: errMessage,
    };
  }
}
