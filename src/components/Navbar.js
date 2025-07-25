import { Moon, Sun, TextCursorInput } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className={`navbar navbar-${darkMode ? 'dark' : 'light'} py-2 px-3`}
         style={{ background: darkMode ? '#000' : '#fff' }}>
      <div className="container-fluid">
        <span className="navbar-brand d-flex align-items-center">
          <div className="rounded bg-primary d-flex align-items-center justify-content-center me-2"
               style={{ width: 32, height: 32 }}>
            <TextCursorInput color="white" size={18} />
          </div>
          <span className={`fw-bold ${darkMode ? 'text-light' : 'text-dark'}`}>
            TextUtils
          </span>
        </span>
        <button
          className={`btn btn-sm ${darkMode ? 'btn-dark' : 'btn-light'}`}
          onClick={toggleTheme}
        >
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
}