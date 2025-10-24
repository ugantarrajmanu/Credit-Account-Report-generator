import { AlertTriangle, XCircle } from "lucide-react";

const ErrorDisplay = ({ message, onClear }) => (
  <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 my-4 flex items-center justify-between shadow-md">
    <div className="flex items-center">
      <AlertTriangle className="w-5 h-5 mr-3 flex-shrink-0" />
      <span className="font-medium">{message}</span>
    </div>
    <button
      onClick={onClear}
      className="text-red-800 hover:text-red-600"
      aria-label="Clear error"
    >
      <XCircle className="w-5 h-5" />
    </button>
  </div>
);

export default ErrorDisplay;