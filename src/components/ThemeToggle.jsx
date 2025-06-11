import { useTheme } from "../context/ThemeProvider";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-12 left-14 p-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow hover:scale-105 transition"
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        <SunIcon className="w-10 h-10" />
      ) : (
        <MoonIcon className="w-10 h-10" />
      )}
    </button>
  );
}
