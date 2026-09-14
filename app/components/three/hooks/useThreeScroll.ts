"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function useThreeScroll(): number {
  return useScrollProgress();
}
