import { useState } from "react";
import { 
      UploadCloud, 
} from "lucide-react";

function FileUpload({ onFileUpload, isLoading }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "text/xml" || file.type === "application/xml") {
        setSelectedFile(file);
      } else {
        alert("Please select a valid XML file.");
        setSelectedFile(null);
        e.target.value = null; // Clear the input
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      onFileUpload(selectedFile);
    }
  };

  return (
    <div className="bg-white border-4 border-slate-200 rounded-lg shadow-lg p-6 md:p-8 dark:bg-slate-800 dark:border-slate-700">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="file-upload"
          className="relative flex flex-col items-center justify-center w-full p-10 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors dark:border-slate-600 dark:bg-slate-700 dark:hover:bg-slate-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <UploadCloud className="w-12 h-12 text-slate-500 mb-3 dark:text-slate-400" />
            <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">XML files only</p>
          </div>
          <input
            id="file-upload"
            type="file"
            className="opacity-0 absolute inset-0 w-full h-full"
            onChange={handleFileChange}
            accept=".xml,text/xml,application/xml"
            disabled={isLoading}
          />
        </label>

        {selectedFile && (
          <div className="mt-4 text-center text-sm text-slate-600">
            Selected file:{" "}
            <span className="font-medium">{selectedFile.name}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={!selectedFile || isLoading}
          className="w-full mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all disabled:bg-slate-400 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {isLoading ? "Processing..." : "Generate Report"}
        </button>
      </form>
    </div>
  );
}

export default FileUpload;
