import {
  ShieldCheck,
  Landmark,
  Wallet,
  Users,
  CircleDollarSign,
  Archive,
  Timer,
  CheckCircle2,
} from "lucide-react";

import StatCard from "./StatCard";

export default function ReportDisplay({ data }) {
  const { basicDetails, reportSummary, creditAccountsInfo } = data;

  console.log(basicDetails, reportSummary, creditAccountsInfo);

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden my-8 animate-fade-in dark:bg-slate-800 dark:border-slate-700">
      {/*Basic Details*/}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">{basicDetails.name}</h2>
            <div className="flex items-center space-x-6 mt-2 text-blue-100">
              <span className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2" /> PAN: {basicDetails.pan}
              </span>
              <span className="flex items-center">
                <Wallet className="w-5 h-5 mr-2" /> Phone:{" "}
                {basicDetails.mobilePhone}
              </span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-center flex-shrink-0">
            <div className="text-sm font-medium text-blue-100">
              CREDIT SCORE
            </div>
            <div className="text-5xl font-extrabold text-white bg-white/20 rounded-lg px-6 py-2 mt-1">
              {basicDetails.creditScore}
            </div>
          </div>
        </div>
      </div>


      { /* Report Summary */ }
      <div className="p-6 border-b border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          Report Summary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={<Users className="w-6 h-6" />}
            label="Total Accounts"
            value={reportSummary.totalAccounts}
          />
          <StatCard
            icon={<CheckCircle2 className="w-6 h-6" />}
            label="Active Accounts"
            value={reportSummary.activeAccounts}
          />
          <StatCard
            icon={<Archive className="w-6 h-6" />}
            label="Closed Accounts"
            value={reportSummary.closedAccounts}
          />
          <StatCard
            icon={<CircleDollarSign className="w-6 h-6" />}
            label="Current Balance"
            value={`₹${reportSummary.currentBalanceAmount}`}
          />
          <StatCard
            icon={<Landmark className="w-6 h-6" />}
            label="Secured Amount"
            value={`₹${reportSummary.securedAccountsAmount}`}
          />
          <StatCard
            icon={<Wallet className="w-6 h-6" />}
            label="Unsecured Amount"
            value={`₹${reportSummary.unsecuredAccountsAmount}`}
          />
          <StatCard
            icon={<Timer className="w-6 h-6" />}
            label="Recent Enquiries"
            value={reportSummary.last7DaysEnquiries}
          />
        </div>
      </div>



      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-4 dark:text-white">
          Credit Account Details:
        </h3>
        <div className="space-y-4">
          {creditAccountsInfo.map((account) => {
            const isOverdue = account.overdueAmount > 0;
            return (
              <div
                key={account.id}
                className={`rounded-lg border p-4 ${
                  isOverdue
                    ? "border-red-300 bg-red-50"
                    : "border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-700"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
                  { /* Bank Detail Column */}
                  <div className="md:col-span-1">
                    <div className="text-lg font-semibold text-blue-800 dark:text-white">
                      {account.bank}
                    </div>
                    <div className="text-sm text-slate-600">{account.type}</div>
                    <div className="text-sm text-slate-500 font-mono dark:text-slate-400">
                      {account.accountNumber}
                    </div>
                  </div>

                  {/* Balance Detail Column*/}
                  <div className="md:col-span-1">
                    <div className="font-medium text-slate-800 dark:text-white">
                      Current Balance: ₹{account.currentBalance}
                    </div>
                    <div
                      className={`font-medium ${
                        isOverdue ? "text-red-600 font-bold" : "text-slate-800"
                      } dark:text-white`}
                    >
                      Amount Overdue: ₹{account.amountOverdue}
                    </div>
                  </div>

                  {/* Address Detail Column */}
                  <div className="md:col-span-1">
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {account.address}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
