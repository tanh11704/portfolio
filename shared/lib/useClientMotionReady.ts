"use client";

import { useSyncExternalStore } from "react";

/**
 * Delays animation props until after hydration so SSR HTML matches the first client paint.
 */
export function useClientMotionReady() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}
