const mongoose = require("mongoose");

//user account details
const AccountSchema = new mongoose.Schema({
  bank: { type: String, required: true },
  address: { type: String, required: true },
  accountNumber: { type: String, required: true },
  amountOverdue: { type: Number, required: true },
  currentBalance: { type: Number, required: true },
});

// report details
const ReportSchema = new mongoose.Schema({
  uploadedAt: { type: Date, default: Date.now },

  basicDetails: {
    name: { type: String, required: true },
    mobilePhone: { type: String, required: true },
    pan: { type: String, required: true },
    creditScore: { type: Number, required: true },
  },

  reportSummary: {
    totalAccounts: { type: Number, default: 0 },
    activeAccounts: { type: Number, default: 0 },
    closedAccounts: { type: Number, default: 0 },
    currentBalanceAmount: { type: Number, default: 0 },
    securedAccountsAmount: { type: Number, default: 0 },
    unsecuredAccountsAmount: { type: Number, default: 0 },
    last7DaysEnquiries: { type: Number, default: 0 },
  },

  creditAccountsInfo: [AccountSchema],
});

ReportSchema.index({ "basicDetails.pan": 1 });

module.exports = mongoose.model("Report", ReportSchema);
