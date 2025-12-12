import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Initialize based on current class
    if (typeof document !== "undefined") {
      const hasDark = document.documentElement.classList.contains("dark");
      setIsDark(hasDark);
    }
  }, []);

  const toggleTheme = () => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark");
      const nowDark = document.documentElement.classList.contains("dark");
      setIsDark(nowDark);
      // Persist preference
      try {
        localStorage.setItem("theme", nowDark ? "dark" : "light");
      } catch {}
    }
  };

  return (
    <nav>
      <div className="ml-auto flex items-center gap-3">
        <button
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          {isDark ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}