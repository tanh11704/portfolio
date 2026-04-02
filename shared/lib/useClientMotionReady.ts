"use client";

import { useEffect, useState } from "react";

/**
 * Delays animation props until after hydration so SSR HTML matches the first client paint.
 */
export function useClientMotionReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return ready;
}
