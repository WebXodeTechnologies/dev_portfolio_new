export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  budget?: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}
