import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="ml-auto flex items-center gap-3">
        <span
          aria-label="Dark mode enabled"
          className="inline-flex items-center gap-2 rounded-md border border-gray-700 bg-gray-800 px-3 py-1.5 text-sm text-gray-200"
        >
          🌙 Dark
        </span>
      </div>
    </nav>
  );
}