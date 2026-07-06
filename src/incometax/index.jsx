import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ActivityLogs from "./component/ActivityLogs";
import MyBankAccounts from "./component/MyBankAccounts";
import EditContact from "./component/EditContact";
import SecureAccount from "./component/SecureAccount";
import Breadcrumb from "./component/Breadcrumb";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import success from "../assets/itr/success.svg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  List,
  BarChart3,
  CalendarClock,
  Calendar as CalendarIcon,
  Earth,
} from "lucide-react";

const taxDepositData = [
  { name: "Total", "A.Y. 2025-26": 900, "A.Y. 2026-27": 1400 },
  { name: "TDS", "A.Y. 2025-26": 700, "A.Y. 2026-27": 1100 },
  { name: "Advance Tax", "A.Y. 2025-26": 0, "A.Y. 2026-27": 0 },
  { name: "Self Assesment Tax", "A.Y. 2025-26": 0, "A.Y. 2026-27": 0 },
  { name: "TCS", "A.Y. 2025-26": 0, "A.Y. 2026-27": 0 },
];

const returnsData = [
  { name: "A.Y.  2024-25", amount: 435000 },
  { name: "A.Y.  2025-26", amount: 410000 },
];

function Card({ children, className = "" }) {
  return (
    <div className={`bg-white border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

function ChartToggle({ view, setView }) {
  return (
    <div className="flex">
      <button
        onClick={() => setView("list")}
        className={`py-2 px-4 rounded-md border ${
          view === "list"
            ? "bg-white border-gray-300 text-gray-700"
            : "bg-white border-gray-300 text-gray-500"
        }`}
        aria-label="List view"
      >
        <List size={18} />
      </button>
      <button
        onClick={() => setView("chart")}
        className={`py-2 px-4 rounded-md border ${
          view === "chart"
            ? "bg-[#076bcf] text-white"
            : "bg-white border border-gray-300 text-gray-500"
        }`}
        aria-label="Chart view"
      >
        <BarChart3 size={18} />
      </button>
    </div>
  );
}

function getViewFromLocation(pathname, search) {
  const params = new URLSearchParams(search);
  const queryView = params.get("view");
  if (queryView) return queryView;
  if (pathname.endsWith("/edit_contact")) return "editContact";
  if (pathname.endsWith("/bank_accounts")) return "bankAccounts";
  if (pathname.endsWith("/activity_log")) return "activityLog";
  if (pathname.endsWith("/secure_account")) return "secureAccount";
  return "dashboard";
}

export default function IncomeTax_Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [taxCalendarOpen, setTaxCalendarOpen] = useState(false);
  const [taxDepositOpen, setTaxDepositOpen] = useState(false);
  const [returnsOpen, setReturnsOpen] = useState(false);
  const [formsOpen, setFormsOpen] = useState(false);
  const [ViewITR, setViewITR] = useState(false);
  const [depositView, setDepositView] = useState("chart");
  const [returnsView, setReturnsView] = useState("chart");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const activeView = getViewFromLocation(location.pathname, location.search);

  const goTo = (view) => {
    if (view === "dashboard") {
      navigate("/incometax/itr_dashboard");
    } else if (view === "editContact") {
      navigate("/incometax/itr_dashboard/edit_contact");
    } else if (view === "bankAccounts") {
      navigate("/incometax/itr_dashboard/bank_accounts");
    } else if (view === "activityLog") {
      navigate("/incometax/itr_dashboard/activity_log");
    } else if (view === "secureAccount") {
      navigate("/incometax/itr_dashboard/secure_account");
    }
  };

  const breadcrumb = [
    {
      label: "Dashboard",
    },
  ];

  const goBack = () => navigate("/incometax/itr_dashboard");

  if (activeView === "editContact") {
    return <EditContact onBack={goBack} />;
  }
  if (activeView === "bankAccounts") {
    return <MyBankAccounts onBack={goBack} />;
  }
  if (activeView === "activityLog") {
    return <ActivityLogs onBack={goBack} />;
  }
  if (activeView === "secureAccount") {
    return <SecureAccount onBack={goBack} />;
  }

  const formattedSelectedDate = selectedDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-4">
      <div className="px-5 pb-5 md:px-14 md:pb-8 text-sm">
        <Breadcrumb items={breadcrumb} />
      </div>

      <div className="max-w-6xl px-4 lg:px-auto mx-auto grid grid-cols-1 lg:grid-cols-[minmax(280px,360px)_1fr] gap-4 md:gap-5">
        <div className="flex flex-col gap-4 md:gap-5">
          <Card className="p-5 rounded-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Welcome Back, PREETI
            </h2>
            <div className="space-y-1.5 text-sm text-gray-700 font-medium mb-5 pl-2">
              <p>CQNPD2747L</p>
              <p>XXXXXXXX1974</p>
              <p>+91 9654772424</p>
              <p className="break-all">preetidalal598@gmail.com</p>
            </div>

            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-gray-800">Contact Details</span>
              <button
                onClick={() => goTo("editContact")}
                className="text-sm font-medium text-[#076bcf] hover:underline"
              >
                Update
              </button>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-gray-800">Bank Account</span>
              <button
                onClick={() => goTo("bankAccounts")}
                className="text-sm font-medium text-[#076bcf] hover:underline"
              >
                Update
              </button>
            </div>
            <div className="flex items-start justify-between py-3 gap-3">
              <span className="text-sm text-gray-800 max-w-35">
                Your account is not secure with e-vault
              </span>
              <button
                onClick={() => goTo("secureAccount")}
                className="text-sm font-medium text-[#076bcf] hover:underline whitespace-nowrap"
              >
                Secure Account
              </button>
            </div>
          </Card>

          <Card className="p-5 flex items-center rounded-sm justify-between cursor-pointer hover:bg-gray-50 transition-colors">
            <h2 className="text-base font-medium text-gray-900">
              Income &amp; Tax Estimator
            </h2>
            <CalendarClock className="text-[#076bcf]" size={22} />
          </Card>

          <Card className="py-5 px-4 rounded-sm">
            <button
              className="w-full flex items-center justify-between"
              onClick={() => setTaxCalendarOpen((o) => !o)}
            >
              <div className="flex items-center gap-2">
                {taxCalendarOpen ? (
                  <ChevronDown size={18} className="text-gray-600" />
                ) : (
                  <ChevronRight size={18} className="text-gray-600" />
                )}
                <h2 className="text-base font-medium text-gray-900">
                  Tax Calendar
                </h2>
              </div>
              <CalendarIcon className="text-[#076bcf]" size={20} />
            </button>

            {taxCalendarOpen && (
              <>
                <div className="p-0 mt-5">
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    className="w-full border-none"
                    calendarType="gregory"
                    next2Label={null}
                    prev2Label={null}
                    showNeighboringMonth={false}
                  />
                </div>

                <div className="mt-5">
                  <p className="text-sm font-bold text-gray-900">
                    {formattedSelectedDate}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedDate.toDateString() === new Date().toDateString()
                      ? "No Event for Today"
                      : "Selected date"}
                  </p>
                  <button className="text-sm font-medium text-[#076bcf] underline mt-2">
                    View All Events
                  </button>
                </div>
              </>
            )}
          </Card>

          <Card className="p-5 rounded-sm">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-medium text-gray-900">
                Activity Log
              </h2>
              <button
                onClick={() => goTo("activityLog")}
                className="text-sm font-medium text-[#076bcf] hover:underline"
              >
                View All
              </button>
            </div>
            <div className="border-t border-gray-100 pt-3 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Last log In</span>
                <span className="text-gray-800">01-Jul-2026, 10:39 AM</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Last log out</span>
                <span className="text-gray-800">01-Jul-2026, 10:40 AM</span>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-4 md:gap-5">
          <Card className="px-5 md:px-6 py-4 rounded-sm">
            <h2 className="text-lg font-medium text-gray-900">
              File your return for the year ended on 31-Mar-2026
            </h2>
            <p className="text-sm text-gray-600 mt-1 mb-4">
              For Assessment Year 2026-27
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2 rounded-md bg-[#2a3a8d] text-white text-sm font-medium hover:bg-[#1a2a6d] transition-colors">
                File Now
              </button>
              <button className="px-5 py-2 rounded-md border border-gray-300 text-gray-400 text-sm font-medium cursor-not-allowed">
                Resume Filing
              </button>
            </div>
          </Card>

          <Card className="px-5 md:px-8 py-5 rounded-sm">
            <button
              className="w-full flex items-center gap-2"
              onClick={() => setViewITR((o) => !o)}
            >
              {ViewITR ? (
                <ChevronDown size={18} className="text-gray-600" />
              ) : (
                <ChevronRight size={18} className="text-gray-600" />
              )}
              <h2 className="text-base sm:text-lg font-medium text-gray-900">
                View ITR Status
              </h2>
            </button>
            {ViewITR && (
              <>
                <div className="flex gap-4 ml-5 mt-5 px-5 py-6 bg-green-400/6 rounded-md">
                  <div className="w-6 h-6 rounded-full mt-1">
                    <img src={success} alt="Check" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-green-700">
                      Filed successfully
                    </p>
                    <span className="text-sm mt-2">
                      <b>Note:</b> Your return has been verified successfully.
                      Please wait for processing.
                    </span>
                  </div>
                </div>

                <div className="mt-6 py-4 px-5">
                  <div className="relative">
                    {/* base gray line (full width) */}
                    <div
                      className="absolute top-3 h-0.5 -translate-y-1/2 bg-gray-300"
                      style={{ right: "23%", width: "25%" }}
                    />
                    <div
                      className="absolute top-3 h-0.5 -translate-y-1/2 bg-emerald-600"
                      style={{ left: "3%", width: "23%" }}
                    />
                    <div
                      className="absolute top-3 h-0.5 -translate-y-1/2 bg-[#076bcf]"
                      style={{ left: "29%", width: "25%" }}
                    />

                    <div className="grid grid-cols-4 gap-4 relative">
                      <div className="flex flex-col">
                        <div className="flex items-center justify-start">
                          <img
                            src={success}
                            alt="Completed"
                            className="w-6 h-6 rounded-full"
                          />
                        </div>
                        <p className="text-sm font-semibold text-gray-900 mt-3">
                          Return Filed On
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          01-Jul-2026
                        </p>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center justify-start">
                          <img
                            src={success}
                            alt="Completed"
                            className="w-6 h-6 rounded-full"
                          />
                        </div>
                        <p className="text-sm font-semibold text-gray-900 mt-3">
                          Return Verified On
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          01-Jul-2026
                        </p>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border-3 border-[#076bcf] bg-white">
                          <span className="text-base font-semibold"></span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 mt-3">
                          Return Processing
                        </p>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                          <span className="text-base font-semibold"></span>
                        </div>
                        <p className="text-sm font-semibold text-gray-900 mt-3">
                          Processed On
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 md:gap-3 mt-6 md:ml-5">
                  <button className="px-6 py-2 rounded-md border border-[#2a3a8d] text-[#2a3a8d] bg-white text-sm font-medium">
                    File Revised Return
                  </button>
                  <button className="px-5 py-2 rounded-md border border-gray-300 text-gray-400 bg-gray-300 text-sm font-medium cursor-not-allowed">
                    Resume Filing
                  </button>
                </div>
              </>
            )}
          </Card>

          <Card className="px-5 md:px-6 py-4 rounded-sm">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <button
                className="flex items-center gap-2"
                onClick={() => setTaxDepositOpen((o) => !o)}
              >
                {taxDepositOpen ? (
                  <ChevronDown size={18} className="text-gray-600" />
                ) : (
                  <ChevronRight size={18} className="text-gray-600" />
                )}
                <h2 className="text-base sm:text-lg font-medium text-gray-900">
                  Tax Deposit
                </h2>
              </button>
            </div>

            {taxDepositOpen && (
              <>
                <div className="-mt-6 flex justify-end">
                  <ChartToggle view={depositView} setView={setDepositView} />
                </div>
                <div className="h-85 mt-5 sm:h-75">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={taxDepositData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                      <Bar dataKey="A.Y. 2025-26" fill="#7dd3fc" barSize={28} />
                      <Bar dataKey="A.Y. 2026-27" fill="#f9a8d4" barSize={28} />
                      <Legend
                        verticalAlign="top"
                        align="right"
                        formatter={(value) => (
                          <span
                            style={{ color: "#000", fontSize: 14, top: -6 }}
                          >
                            {value}
                          </span>
                        )}
                      />

                      <CartesianGrid vertical={true} stroke="#EBEBEB" />
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 11, fill: "#6b7280" }}
                        angle={-15}
                        textAnchor="end"
                        height={40}
                        interval={0}
                      />
                      <YAxis
                        tickFormatter={(v) => v.toLocaleString("en-IN")}
                        domain={[0, 120000]}
                        ticks={[0, 20000, 40000, 60000, 80000, 100000, 120000]}
                        tick={{ fontSize: 11, fill: "#6b7280" }}
                        label={{
                          value: "Amount (₹)",
                          angle: -90,
                          position: "insideLeft",
                          style: { fontSize: 12, fill: "#374151" },
                        }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </>
            )}
          </Card>

          <Card className="px-5 md:px-6 py-4 rounded-sm">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <button
                className="flex items-center gap-2"
                onClick={() => setReturnsOpen((o) => !o)}
              >
                {returnsOpen ? (
                  <ChevronDown size={18} className="text-gray-600" />
                ) : (
                  <ChevronRight size={18} className="text-gray-600" />
                )}
                <h2 className="text-base sm:text-lg font-medium text-gray-900">
                  Recent Filed Returns
                </h2>
              </button>
            </div>

            {returnsOpen && (
              <>
                <div className="-mt-6 flex justify-end">
                  <ChartToggle view={depositView} setView={setDepositView} />
                </div>
                <div className="h-[340px] sm:h-[400px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={returnsData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                    >
                      <CartesianGrid vertical={false} stroke="#EBEBEB" />
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 12, fill: "#6b7280" }}
                      />
                      <YAxis
                        tickFormatter={(v) => v.toLocaleString("en-IN")}
                        domain={[0, 600000]}
                        ticks={[
                          0, 100000, 200000, 300000, 400000, 500000, 600000,
                        ]}
                        tick={{ fontSize: 11, fill: "#6b7280" }}
                        label={{
                          value: "Amount (₹)",
                          angle: -90,
                          position: "insideLeft",
                          style: { fontSize: 12, fill: "#374151" },
                        }}
                      />
                      <Bar dataKey="amount" fill="#7dd3fc" barSize={60} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-500 text-right mt-2">
                  * as per the latest order sent to you
                </p>
              </>
            )}
          </Card>

          <Card className="px-5 md:px-6 py-5 rounded-sm">
            <button
              className="w-full flex items-center gap-2"
              onClick={() => setFormsOpen((o) => !o)}
            >
              {formsOpen ? (
                <ChevronDown size={18} className="text-gray-600" />
              ) : (
                <ChevronRight size={18} className="text-gray-600" />
              )}
              <h2 className="text-base sm:text-lg font-medium text-gray-900">
                Recent Forms Filed
              </h2>
            </button>
            {formsOpen && (
              <p className="text-sm text-gray-500 mt-3">
                No recent forms filed.
              </p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
