

const StatCard = ({ icon, label, value }) => (
  <div className="bg-slate-50 rounded-lg p-4 shadow-sm ring-1 ring-slate-200 dark:bg-slate-700 dark:ring-slate-700 dark:text-slate-400">
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-2">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-slate-600 dark:text-slate-300">{label}</div>
        <div className="text-xl font-bold text-slate-900 dark:text-white">{value}</div>
      </div>
    </div>
  </div>
);

export default StatCard;