import React, { useEffect, useState } from "react";
import "./App.css";
import StartedButton from "./components/StartedButton";

function App() {
  const [darkmode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

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
  }, [darkmode]); // Added darkmode as a dependency

  return (
    <>
      <button
        onClick={() => setDarkMode(!darkmode)}
        className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
      >
        Toggle Dark Mode
      </button>
      <StartedButton  />
    </>
  );
}

export default App;
