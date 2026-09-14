const tracker = new Map<string, { count: number; expiresAt: number }>();

export function checkRateLimit(
  ip: string,
  limit = 5,
  windowMs = 60 * 1000
): { success: boolean; remaining: number } {
  const now = Date.now();
  const entry = tracker.get(ip);

  if (!entry || now > entry.expiresAt) {
    tracker.set(ip, { count: 1, expiresAt: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }

  if (entry.count >= limit) {
    return { success: false, remaining: 0 };
  }

  entry.count += 1;
  return { success: true, remaining: limit - entry.count };
}
