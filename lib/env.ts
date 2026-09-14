export function getEnvVar(key: keyof NodeJS.ProcessEnv, fallback = ""): string {
  return process.env[key] || fallback;
}

export const isProduction = process.env.NODE_ENV === "production";
export const isDevelopment = process.env.NODE_ENV === "development";
