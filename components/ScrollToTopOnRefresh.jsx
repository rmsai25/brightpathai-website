"use client";

import { useEffect } from "react";

export default function ScrollToTopOnRefresh() {
  useEffect(() => {
    // Force scroll to top on page load (including refresh)
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return null;
}
