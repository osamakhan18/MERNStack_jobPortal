import React, { useState, useEffect } from "react";

function DarkLight() {
  const [darkmode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply the theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  // Update theme when darkmode changes
  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  return (
    <button
      onClick={() => setDarkMode(!darkmode)}
      className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
    >
      Toggle Dark Mode
    </button>
  );
}

export default DarkLight;
