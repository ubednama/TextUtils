import { useState } from "react";
import { 
  ArrowUp, 
  ArrowDown, 
  Eraser, 
  Copy, 
  RotateCcw, 
  Type, 
  Scissors,
  Volume2,
  Download,
  FileText
} from "lucide-react";
import { jsPDF } from "jspdf";
import { useTheme } from "../context/ThemeContext";

export default function TextForm() {
  const [text, setText] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const { darkMode } = useTheme();

  // Feature functions
  const handleUppercase = () => setText(text.toUpperCase());
  const handleLowercase = () => setText(text.toLowerCase());
  const handleCapitalize = () =>
    setText(
      text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    );
  const handleClear = () => setText("");
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };
  const handleRemoveSpaces = () => setText(text.replace(/\s+/g, " ").trim());
  const handleReverse = () => setText(text.split("").reverse().join(""));

  // Stats
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  // const readingTime = Math.ceil(wordCount / 200);

  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const handleSpeak = () => {
    if (!isSpeaking) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    } else {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleDownloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "textutils-content.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("textutils-content.pdf");
  };

  return (
    <div className="container-fluid px-3 py-2">
      <div className="row g-3">
        {/* Text Editor - Main */}
        <div className="col-lg-9">
          <div className={`card custom-card h-100 ${darkMode ? "dark-card" : ""}`}>
            <div className="card-body p-3">
              <h2 className={`h5 mb-3 ${darkMode ? 'text-light' : 'text-dark'}`}>Text Editor</h2>
              <textarea
                className={`form-control custom-textarea ${darkMode ? "dark-textarea" : ""}`}
                style={{ 
                  height: "calc(100vh - 280px)",
                  background: darkMode ? "#1a1a1a" : "#ffffff",
                  color: darkMode ? "#ffffff" : "#000000"
                }}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Start typing..."
              />
              <div className="d-flex flex-wrap gap-2 mt-3">
                {/* Primary Actions */}
                <div className="d-flex gap-2 me-3">
                  <button className="btn btn-primary px-3 py-2" onClick={handleUppercase}>
                    <ArrowUp size={16} className="me-1" />UPPER
                  </button>
                  <button className="btn btn-primary px-3 py-2" onClick={handleLowercase}>
                    <ArrowDown size={16} className="me-1" />lower
                  </button>
                  <button className="btn btn-primary px-3 py-2" onClick={handleCapitalize}>
                    <Type size={16} className="me-1" />Title
                  </button>
                </div>
                
                {/* Secondary Actions */}
                <div className="d-flex gap-2 me-3">
                  <button className="btn btn-secondary px-3 py-2" onClick={handleRemoveSpaces}>
                    <Scissors size={16} className="me-1" />Trim
                  </button>
                  <button className="btn btn-secondary px-3 py-2" onClick={handleReverse}>
                    <RotateCcw size={16} className="me-1" />Reverse
                  </button>
                </div>

                {/* Utility Actions */}
                <div className="d-flex gap-2">
                  <button 
                    className={`btn ${isSpeaking ? 'btn-warning' : 'btn-info'} px-3 py-2`} 
                    onClick={handleSpeak}
                  >
                    <Volume2 size={16} className="me-1" />
                    {isSpeaking ? 'Stop' : 'Speak'}
                  </button>
                  <button className="btn btn-info px-3 py-2" onClick={handleDownloadText}>
                    <Download size={16} className="me-1" />Text
                  </button>
                  <button className="btn btn-info px-3 py-2" onClick={handleDownloadPDF}>
                    <FileText size={16} className="me-1" />PDF
                  </button>
                  <button className="btn btn-success px-3 py-2" onClick={handleCopy}>
                    <Copy size={16} className="me-1" />{copySuccess ? 'Copied!' : 'Copy'}
                  </button>
                  <button className="btn btn-danger px-3 py-2" onClick={handleClear}>
                    <Eraser size={16} className="me-1" />Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics - Side */}
        <div className="col-lg-3">
          <div className={`card custom-card h-100 ${darkMode ? "dark-card" : ""}`}>
            <div className="card-body p-3">
              <h5 className={`mb-3 ${darkMode ? 'text-light' : 'text-dark'}`}>Statistics</h5>
              <div className="statistics-grid">
                <div className={`stat-box ${darkMode ? 'dark-stat-box' : ''}`}>
                  <div className="stat-value text-primary">{wordCount}</div>
                  <div className="stat-label">Words</div>
                </div>
                <div className={`stat-box ${darkMode ? 'dark-stat-box' : ''}`}>
                  <div className="stat-value text-purple">{charCount}</div>
                  <div className="stat-label">Characters</div>
                </div>
                <div className={`stat-box ${darkMode ? 'dark-stat-box' : ''}`}>
                  <div className="stat-value text-success">{sentenceCount}</div>
                  <div className="stat-label">Sentences</div>
                </div>
                <div className={`stat-box ${darkMode ? 'dark-stat-box' : ''}`}>
                  <div className="stat-value text-warning">{Math.ceil(wordCount / 200)}</div>
                  <div className="stat-label">Minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="col-12">
          <div className={`card custom-card ${darkMode ? "dark-card" : ""}`}>
            <div className="card-body p-3">
              <h5 className={`mb-3 ${darkMode ? 'text-light' : 'text-dark'}`}>Preview</h5>
              <div 
                className={`preview-content p-3 rounded ${darkMode ? 'dark-preview' : ''}`}
                style={{ 
                  minHeight: "100px",
                  background: darkMode ? "#1a1a1a" : "#f8f9fa",
                  color: darkMode ? "#ffffff" : "#000000"
                }}
              >
                {text || <span className="text-muted">Your text preview will appear here...</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}