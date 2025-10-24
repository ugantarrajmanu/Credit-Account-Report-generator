import React, { useState } from "react";
import { FileText, Sun, Moon } from "lucide-react";
import LoadingSpinner from "./components/LoadSpinner";
import ErrorDisplay from "./components/ErrorDisplay";
import FileUpload from "./components/FileUpload";
import ReportDisplay from "./components/ReportDisplay";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [reportData, setReportData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClear = () => {
    setReportData(null);
    setError(null);
    setIsLoading(false);
  };

  const handleUpload = async (selectedFile) => {
    setIsLoading(true);
    setError(null);
    setReportData(null);

    // api call
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("https://credit-account-report-generator.onrender.com/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || `Error: ${response.status}`);
      }

      const data = await response.json();
      
      setReportData(data);
    } catch (err) {
      console.error("Upload failed:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="relative bg-slate-100 min-h-screen font-sans text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Dark mode  */}
          <div className="fixed flex justify-center items-center mt-[4rem] right-10">
            <DarkModeToggle />
          </div>


      <div className="max-w-5xl mx-auto p-4 md:p-8">

        <header className="text-center my-6">
          <div className="flex items-center justify-center space-x-3">
            <FileText className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100">
              Credit Report Analyzer
            </h1>
          </div>
          <p className="mt-2 text-lg text-slate-600 dark: text-slate-400">
            Upload XML report.
          </p>
        </header>


        {error && (
          <ErrorDisplay message={error} onClear={() => setError(null)} />
        )}


        {reportData ? (
          <div>
            <ReportDisplay data={reportData} />
            <button
              onClick={handleClear}
              className="block w-full max-w-xs mx-auto bg-slate-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-700 transition-all"
            >
              Upload Another Report
            </button>
          </div>
        ) : isLoading ? (
          <LoadingSpinner />
        ) : (
          <FileUpload onFileUpload={handleUpload} isLoading={isLoading} />
        )}
      </div>
    </div>
  );
}

export default App;
