"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type User = {
  userId: string;
  email: string;
};

export default function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Theme init
  useEffect(() => {
    if (typeof document !== "undefined") {
      const hasDark = document.documentElement.classList.contains("dark");
      setIsDark(hasDark);
    }
  }, []);

  // Auth check
  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const toggleTheme = () => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark");
      const nowDark = document.documentElement.classList.contains("dark");
      setIsDark(nowDark);
      try {
        localStorage.setItem("theme", nowDark ? "dark" : "light");
      } catch {}
    }
  };

  if (loading) return null; // avoid flicker

  return (
    <nav className="flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <Link href="/" className="text-sm font-medium">
          Home
        </Link>

        {user && (
          <Link href="/dashboard" className="text-sm font-medium">
            Dashboard
          </Link>
        )}
      </div>

      {/* RIGHT */}
      <div className="ml-auto flex items-center gap-3">
        {user ? (
          <button
            onClick={async () => {
              await fetch("/api/auth/logout", { method: "POST" });
              window.location.href = "/login";
            }}
            className="text-sm font-medium text-red-500 hover:underline"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="text-sm font-medium text-blue-500 hover:underline"
          >
            Login
          </Link>
        )}

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
