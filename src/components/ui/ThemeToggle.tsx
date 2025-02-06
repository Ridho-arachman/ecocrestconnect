"use client";

import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function ThemeToggle() {
  useEffect(() => {
    themeChange(false); // Inisialisasi theme-change
  }, []);

  return (
    <button
      data-toggle-theme="light,abyss"
      data-act-class="ACTIVECLASS"
      className="btn"
    >
      Switch Mode
    </button>
  );
}
