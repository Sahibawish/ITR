import React, { useState } from "react";
import { Info, Download, ChevronLeft } from "lucide-react";
import Breadcrumb from "./Breadcrumb";

const summaryRows = [
  { event: "Last Login", details: "NA" },
  { event: "Last Logout", details: "NA" },
  { event: "Mode of Last Login", details: "NA" },
  { event: "Last Contact Details Update", details: "NA" },
  { event: "Last Bank Details Update", details: "NA" },
  { event: "Last Profile Update", details: "NA" },
];

export default function ActivityLogs({ onBack, detailedLogs = [] }) {
  const [selectedSummary, setSelectedSummary] = useState([]);
  const [selectedDetailed, setSelectedDetailed] = useState([]);

  const toggleAll = (rows, selected, setSelected) => {
    if (selected.length === rows.length) {
      setSelected([]);
    } else {
      setSelected(rows.map((_, i) => i));
    }
  };

  const toggleRow = (index, selected, setSelected) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const breadcrumbItems = [
    { label: "Dashboard", path: "/incometax/itr_dashboard", clickable: true },
    { label: "Activity Logs" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="text-2xl font-semibold text-slate-800 mb-6">
          Activity Logs
        </h1>

        <div className="bg-white rounded-md border-[1.5px] border-gray-200 p-6 sm:p-8">
          <div className="border-[1.5px] rounded-md border-slate-200 px-4 py-3 mb-6 flex items-start gap-2">
            <Info className="w-4 h-4 text-slate-500 mt-2.5 shrink-0" />
            <p className="text-sm text-slate-600 py-2">
              <span className="font-semibold text-slate-700">Note:</span>{" "}
              Activity logs are available starting from 02-07-2025. Data
              prior to this date will not be displayed.
            </p>
          </div>

          <div className="border-2 border-slate-200 rounded-sm overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b-2 border-slate-200">
                  <th className="text-left font-semibold px-4 py-3 w-[45%]">
                    Event
                  </th>
                  <th className="text-left font-semibold px-4 py-3">
                    Details
                  </th>
                  <th className="w-14 px-4 py-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-slate-400 accent-indigo-600 cursor-pointer"
                      checked={selectedSummary.length === summaryRows.length}
                      onChange={() =>
                        toggleAll(
                          summaryRows,
                          selectedSummary,
                          setSelectedSummary
                        )
                      }
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {summaryRows.map((row, i) => (
                  <tr
                    key={row.event}
                    className={i !== summaryRows.length - 1 ? "border-b-2 border-slate-200" : ""}
                  >
                    <td className="px-4 py-3">{row.event}</td>
                    <td className="px-4 py-3 text-slate-700">{row.details}</td>
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-400 accent-indigo-600 cursor-pointer"
                        checked={selectedSummary.includes(i)}
                        onChange={() =>
                          toggleRow(i, selectedSummary, setSelectedSummary)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <h2 className="text-xl font-semibold text-slate-800">
              Detailed logs of past 90days
            </h2>
            <button
              type="button"
              className="flex items-center gap-2 border-[1.5px] border-[#3248a8] text-[#3248a8] rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Activity Log
            </button>
          </div>

          <div className="border-2 border-slate-200 rounded-sm overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b-2 border-slate-200">
                  <th className="text-left font-semibold px-4 py-3 w-[45%]">
                    Event
                  </th>
                  <th className="text-left font-semibold px-4 py-3">
                    Details
                  </th>
                  <th className="w-14 px-4 py-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-slate-400 accent-indigo-600 cursor-pointer"
                      checked={
                        detailedLogs.length > 0 &&
                        selectedDetailed.length === detailedLogs.length
                      }
                      onChange={() =>
                        toggleAll(
                          detailedLogs,
                          selectedDetailed,
                          setSelectedDetailed
                        )
                      }
                      disabled={detailedLogs.length === 0}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {detailedLogs.length === 0 ? (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-4 py-4 text-center text-slate-600"
                    >
                      No entities present.
                    </td>
                  </tr>
                ) : (
                  detailedLogs.map((row, i) => (
                    <tr
                      key={i}
                      className={
                        i !== detailedLogs.length - 1
                          ? "border-b-2 border-slate-200"
                          : ""
                      }
                    >
                      <td className="px-4 py-3 text-indigo-600">
                        {row.event}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {row.details}
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-slate-400 accent-indigo-600 cursor-pointer"
                          checked={selectedDetailed.includes(i)}
                          onChange={() =>
                            toggleRow(i, selectedDetailed, setSelectedDetailed)
                          }
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
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
