import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { darkMode } = useTheme();
  
  return (
    <div 
      style={{ 
        minHeight: "100vh",
        background: darkMode ? "#000000" : "#f8f9fa",
        transition: 'background-color 0.3s ease'
      }}
    >
      <Navbar />
      <div className="container-fluid py-4">
        <TextForm />
      </div>
    </div>
  );
}

export default App;