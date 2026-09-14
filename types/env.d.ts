declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    SMTP_HOST?: string;
    SMTP_PORT?: string;
    SMTP_USER?: string;
    SMTP_PASS?: string;
    CONTACT_EMAIL?: string;
    NEXT_PUBLIC_SITE_URL?: string;
  }
}
