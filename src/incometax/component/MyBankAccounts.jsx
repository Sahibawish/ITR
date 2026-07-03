import React, { useState } from "react";
import {
  Plus,
  MoreVertical,
  CheckCircle2,
  AlertCircle,
  List,
  LayoutGrid,
  Info,
  ChevronLeft,
} from "lucide-react";
import Breadcrumb from "./Breadcrumb";

const bankAccounts = [
  {
    id: 1,
    accountNumber: "198310400062639",
    bankName: "IDBI BANK",
    branch: "NANGLOI",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    statusLines: [
      { text: "Validated and EVC Enabled", ok: true },
      { text: "Eligible for Refund", ok: true },
      { text: "96xxxxxx24", ok: true },
      { text: "pr**********98@gmail.com", ok: false },
    ],
    status: "Validated and EVC Enabled",
    refundEligibility: "Eligible for Refund",
    contact: [
      { text: "96xxxxxx24", ok: true },
      { text: "pr**********98@gmail.com", ok: false },
    ],
    nominateRefund: true,
    nominateNetBanking: false,
  },
  {
    id: 2,
    accountNumber: "50100585642390",
    bankName: "HDFC BANK",
    branch: "PITAMPURA COMMUNITY CENTRE",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    statusLines: [
      { text: "Validated", ok: true },
      { text: "Eligible for Refund", ok: true },
      { text: "96xxxxxx24", ok: true },
      { text: "pr**********98@gmail.com", ok: true },
    ],
    status: "Validated",
    refundEligibility: "Eligible for Refund",
    contact: [
      { text: "96xxxxxx24", ok: true },
      { text: "pr**********98@gmail.com", ok: true },
    ],
    nominateRefund: true,
    nominateNetBanking: false,
  },
];

const notes = [
  "Add a bank account which is linked with your PAN (bank account number must be linked with your PAN) to receive refund.",
  "Refund can be issued in following account types: Savings, Current, Cash Credit, Over Draft & Non Resident Ordinary.",
  "The Name as per PAN and Name in your bank account must match.",
  "Refund cannot be issued to bank accounts which are closed, invalid, under litigation or in blocked status.",
  "EVC can be enabled for Individual taxpayers only, for one validated bank account at any given time.",
  "To Enable EVC, Mobile number or Email Id as in e-Filing user profile should match with the details linked with the bank account.",
  "If there is any change in mobile number or email Id linked with bank, update the contact details in e-Filing user profile and then revalidate your added bank contact to get your updated contact details validated from bank.",
  "EVC can be used for following: verifying income tax returns and other forms, e-Proceedings, refund reissue request, reset password and secured login to e-filing account.",
  "EVC can be enabled for the bank account of following banks only.",
  "Login through net banking to be allowed only for one Validated bank account opted for net banking login.",
];

function ToggleSwitch({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors shrink-0 ${
        checked ? "bg-blue-600" : "bg-slate-300"
      }`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
  );
}

function StatusIcon({ ok }) {
  return ok ? (
    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
  ) : (
    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
  );
}

export default function MyBankAccounts({ onBack }) {
  const [view, setView] = useState("grid"); // "grid" | "list"
  const [activeTab, setActiveTab] = useState("added");
  const [accounts, setAccounts] = useState(bankAccounts);

  const toggleField = (id, field) => {
    setAccounts((prev) =>
      prev.map((acc) =>
        acc.id === id ? { ...acc, [field]: !acc[field] } : acc
      )
    );
  };

  const breadcrumbItems = [
    { label: "Dashboard", path: "/incometax/itr_dashboard", clickable: true },
    { label: "My Bank Accounts" },
  ];

  const tabs = [
    { key: "added", label: `Added Bank Accounts( ${accounts.length} )` },
    { key: "failed", label: "Failed Bank Accounts( 0 )" },
    { key: "removed", label: "Removed Bank Accounts( 0 )" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h1 className="text-2xl font-semibold text-slate-800">
            My Bank Accounts
          </h1>
          <button
            type="button"
            className="flex items-center gap-1.5 border border-indigo-600 text-indigo-600 rounded-md px-4 py-2 text-sm font-medium hover:bg-indigo-50 transition-colors bg-white"
          >
            <Plus className="w-4 h-4" />
            Add Bank Account
          </button>
        </div>

        <div className="bg-white rounded-md border-[1.5px] border-gray-200 p-6 sm:p-8">
          {/* Tabs + view toggle */}
          <div className="flex items-center justify-between border-b-[1.5px] border-gray-200 mb-6 flex-wrap gap-3">
            <div className="flex gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`pb-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                    activeTab === tab.key
                      ? "border-blue-600 text-blue-700"
                      : "border-transparent text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex border border-slate-300 p-1 rounded-md overflow-hidden mb-2">
              <button
                type="button"
                onClick={() => setView("list")}
                aria-label="List view"
                className={`p-2 transition-colors rounded-sm ${
                  view === "list"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-500 hover:bg-slate-50"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setView("grid")}
                aria-label="Grid view"
                className={`p-2 transition-colors border-l border-slate-300 rounded-sm ${
                  view === "grid"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-500 hover:bg-slate-50"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>

          {activeTab !== "added" ? (
            <div className="text-center text-slate-500 py-10 text-sm">
              No entities present.
            </div>
          ) : view === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {accounts.map((acc) => (
                <div
                  key={acc.id}
                  className="rounded-sm border-[1.5px] border-gray-200 overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-9 h-9 rounded-md flex items-center justify-center ${acc.iconBg} ${acc.iconColor} font-bold text-sm shrink-0`}
                        >
                          {acc.bankName.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            {acc.accountNumber}
                          </p>
                          <p className="text-sm text-slate-700">
                            {acc.bankName}
                          </p>
                          <p className="text-sm text-slate-500">
                            {acc.branch}
                          </p>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-3 space-y-1.5 pl-12">
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <StatusIcon ok={true} />
                        {acc.status}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <StatusIcon ok={true} />
                        {acc.refundEligibility}
                      </div>
                      {acc.contact.map((c, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-slate-700"
                        >
                          <StatusIcon ok={c.ok} />
                          {c.text}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-200 px-4 py-3 space-y-2 bg-slate-50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">
                        Nominate for refund
                      </span>
                      <ToggleSwitch
                        checked={acc.nominateRefund}
                        onChange={() => toggleField(acc.id, "nominateRefund")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-700">
                        Nominate for login through net banking
                      </span>
                      <ToggleSwitch
                        checked={acc.nominateNetBanking}
                        onChange={() =>
                          toggleField(acc.id, "nominateNetBanking")
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-[1.5px] border-gray-200 rounded-md">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">
                      Account number
                    </th>
                    <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">
                      Bank name & Branch
                    </th>
                    <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">
                      Contact Details
                    </th>
                    <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">
                      Status
                    </th>
                    <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">
                      Refund eligibility
                    </th>
                    <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">
                      Nominate for refund
                    </th>
                    <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">
                      Nominate for login through net banking
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((acc, i) => (
                    <tr
                      key={acc.id}
                      className={
                        i !== accounts.length - 1
                          ? "border-b border-slate-100"
                          : ""
                      }
                    >
                      <td className="px-4 py-3 text-slate-800 whitespace-nowrap">
                        {acc.accountNumber}
                      </td>
                      <td className="px-4 py-3 text-slate-700 whitespace-nowrap">
                        {acc.bankName}
                        <br />
                        {acc.branch}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {acc.contact.map((c, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-slate-700 mb-1 last:mb-0"
                          >
                            <StatusIcon ok={c.ok} />
                            {c.text}
                          </div>
                        ))}
                      </td>
                      <td className="px-4 py-3 text-slate-700 whitespace-nowrap">
                        {acc.status}
                      </td>
                      <td className="px-4 py-3 text-slate-700 whitespace-nowrap">
                        {acc.refundEligibility}
                      </td>
                      <td className="px-4 py-3">
                        <ToggleSwitch
                          checked={acc.nominateRefund}
                          onChange={() =>
                            toggleField(acc.id, "nominateRefund")
                          }
                        />
                      </td>
                      <td className="px-4 py-3">
                        <ToggleSwitch
                          checked={acc.nominateNetBanking}
                          onChange={() =>
                            toggleField(acc.id, "nominateNetBanking")
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-4 h-4 text-slate-600" />
              <span className="font-semibold text-slate-800">Notes</span>
            </div>
            <ol className="list-decimal list-outside pl-5 space-y-2 text-sm text-black">
              {notes.map((note, i) => (
                <li key={i}>
                  {note}
                  {i === 8 && (
                    <>
                      {" "}
                      <a href="#" className="text-[#3248a8] font-medium">
                        List of Banks
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="mt-6 flex items-center gap-1 border-[1.5px] border-[#3248a8] text-[#3248a8] rounded-md px-3 py-2 text-sm font-semibold hover:bg-gray-200 transition-colors bg-white"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
      </div>
    </div>
  );
}
