import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <label
      htmlFor="dark-mode-toggle"
      className="flex items-center space-x-2 cursor-pointer"
    >
      <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
      <button
        id="dark-mode-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
          isDarkMode ? "bg-blue-600" : "bg-slate-300"
        }`}
      >
        <span
          className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
            isDarkMode ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
    </label>
  );
}

export default DarkModeToggle;
