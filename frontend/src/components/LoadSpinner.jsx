import React from "react";
import { Loader2 } from "lucide-react";

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center p-12">
    <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
    <p className="mt-4 text-slate-600">Processing your report...</p>
  </div>
);

export default LoadingSpinner;