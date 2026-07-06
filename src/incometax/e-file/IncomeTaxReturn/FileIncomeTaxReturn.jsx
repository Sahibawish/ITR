import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Breadcrumb from "../../component/Breadcrumb";

const assessmentYears = ["2026-27 (Current A.Y.)", "2025-26", "2024-25", "2023-24", "2022-23"];

const FileIncomeTaxReturn = ({ onBack }) => {
  const [assessmentYear, setAssessmentYear] = useState("");
  const [filingMode, setFilingMode] = useState("");
  const [filingType, setFilingType] = useState("");
  const [ITRType, setITRType] = useState("");
  const [audited, setAudited] = useState("");
  const [showOverview, setShowOverview] = useState(false);

  const isContinueEnabled =
    assessmentYear &&
    filingMode &&
    (filingMode === "online" || (filingMode === "offline" && filingType));


  const handleContinue = () => {
    if (isContinueEnabled) {
      setShowOverview(true);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!assessmentYear) {
      setFilingMode("");
      setFilingType("");
      setAudited("");
    }
  }, [assessmentYear]);

  useEffect(() => {
    if (filingMode !== "offline") {
      setFilingType("");
      setAudited("");
    }
  }, [filingMode]);

  return (
    <div className="min-h-screen bg-[#f6f7fb] pb-8">
      <div className="px-5 pb-5 md:px-14 md:pb-8 text-sm">
        <Breadcrumb
          items={[
            {
              label: "Dashboard",
              path: "/incometax/itr_dashboard",
              clickable: true,
            },
            { label: "e-file" },
            { label: "Income Tax Return" },
            { label: "File Income Tax Return" },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-14">
        <div className="mb-2">
          <h1 className="text-[28px] font-semibold text-slate-900">
            Income Tax Return (ITR)
          </h1>
        </div>
        {!showOverview ? (
          <div className="grid gap-6 lg:grid-cols-[1.7fr_0.9fr]">
            <div>
              <div className="text-end">
                <p className="text-xs text-slate-600 mb-1">
                  <span className="text-red-600">*</span> Indicates mandatory
                  fields
                </p>
              </div>
              <div className="rounded-sm border border-slate-200 bg-white p-6">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Select Assessment year{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={assessmentYear}
                    onChange={(e) => setAssessmentYear(e.target.value)}
                    className="w-full md:w-[350px] rounded-sm border border-slate-400 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition duration-150 focus:border-[#076bcf] focus:ring-2 focus:ring-[#076bcf]/20"
                  >
                    <option value="">Select</option>
                    {assessmentYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-5">
                  <div className="mb-1 text-sm font-medium text-slate-700">
                    Select Mode of Filing{" "}
                    <span className="text-red-600">*</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <label className="flex items-center gap-3 text-sm font-medium text-slate-900 transition hover:border-[#076bcf] w-full sm:w-auto">
                      <input
                        type="radio"
                        name="filingMode"
                        value="online"
                        checked={filingMode === "online"}
                        onChange={() => setFilingMode("online")}
                        className="h-4 w-4 text-[#076bcf] accent-[#076bcf]"
                        disabled={!assessmentYear}
                      />
                      <span>
                        Online{" "}
                        <span className="font-normal text-slate-500">
                          (Recommended)
                        </span>
                      </span>
                    </label>

                    <label className="flex items-center gap-3 text-sm font-medium text-slate-900 transition hover:border-[#076bcf] w-full sm:w-auto">
                      <input
                        type="radio"
                        name="filingMode"
                        value="offline"
                        checked={filingMode === "offline"}
                        onChange={() => setFilingMode("offline")}
                        className="h-4 w-4 text-[#076bcf] accent-[#076bcf]"
                        disabled={!assessmentYear}
                      />
                      <span>Offline</span>
                    </label>
                  </div>
                  {filingMode !== "offline" && (
                    <div className="rounded-sm bg-[#ebf4fd] mt-4 p-5 max-w-max">
                      <p className="text-sm font-base text-slate-900">
                        <b>Note:</b> The user can select type of ITR applicable
                        later.
                      </p>
                    </div>
                  )}

                  {filingMode === "offline" && (
                    <>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Select Filing Type{" "}
                          <span className="text-red-600">*</span>
                        </label>
                        <select
                          value={filingType}
                          onChange={(e) => setFilingType(e.target.value)}
                          className="w-full md:w-[300px] rounded-sm border border-slate-400 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition duration-150 focus:border-[#076bcf] focus:ring-2 focus:ring-[#076bcf]/20"
                        >
                          <option value="">Select</option>
                          <option value="Original Return">139(1) - Original Return</option>
                          <option value=" Revised Return">139(5) - Revised Return</option>
                        </select>
                      </div>

                      <div className="text-sm font-base mt-5 mb-3 max-w-md">
                        Are you audited u/s 44AB or political party as per
                        section 13A? <span className="text-red-600">*</span>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <label className="flex items-center gap-3 text-sm font-medium text-slate-900 transition hover:border-[#076bcf] w-full sm:w-auto">
                          <input
                            type="radio"
                            name="audited"
                            value="yes"
                            checked={audited === "yes"}
                            onChange={() => setAudited("yes")}
                            className="h-4 w-4 text-[#076bcf] accent-[#076bcf]"
                            disabled={!assessmentYear}
                          />
                          <span>Yes</span>
                        </label>

                        <label className="flex items-center gap-3 text-sm font-medium text-slate-900 transition hover:border-[#076bcf] w-full sm:w-auto">
                          <input
                            type="radio"
                            name="audited"
                            value="no"
                            checked={audited === "no"}
                            onChange={() => setAudited("no")}
                            className="h-4 w-4 text-[#076bcf] accent-[#076bcf]"
                            disabled={!assessmentYear}
                          />
                          <span>No</span>
                        </label>
                      </div>

                      <div className="mt-5">
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Select ITR Type{" "}
                          <span className="text-red-600">*</span>
                        </label>
                        <select
                          value={filingType}
                          onChange={(e) => setITRType(e.target.value)}
                          className="w-full md:w-[300px] rounded-sm border border-slate-400 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition duration-150 focus:border-[#076bcf] focus:ring-2 focus:ring-[#076bcf]/20"
                        >
                          <option value="">Select</option>
                          <option value="ITR-3">ITR-3</option>
                        </select>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center justify-between">
                <button
                  type="button"
                  onClick={onBack}
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#2a3a8d] bg-white px-5 py-3 text-sm font-medium text-[#2a3a8d] transition hover:bg-slate-50"
                >
                  <ChevronLeft size={16} /> Back
                </button>
                <button
                  type="button"
                  onClick={handleContinue}
                  disabled={!isContinueEnabled}
                  className={`inline-flex items-center justify-center rounded-sm px-7 py-3 text-sm font-medium transition ${
                    isContinueEnabled
                      ? "bg-[#2a3a8d] text-white hover:bg-[#055bb2]"
                      : "bg-[#6666] text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Continue <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <aside className="rounded-sm bg-[#ebf4fd] mt-5 p-4 max-h-max">
              <h2 className="text-md font-medium text-slate-900">
                Information
              </h2>
              <p className="mt-4 text-[13px] leading-6">
                You’ve been directed to the “File Income Tax Return” page right
                after login to make it easier to file your return.
              </p>
              <p className="text-[13px] leading-6">
                If you select offline mode, you will need to upload the ITR form
                prepared using offline utility in the next step.
              </p>
            </aside>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-sm">
              Any changes to the profile information will take 30 minutes to
              refresh. It’s suggested to start new filing 30 minutes after the
              changes are done.
            </p>

            <div className="rounded-sm border border-slate-200">
              <h2 className="text-xl font-medium text-slate-900 bg-[#efeff9] px-4 py-6 leading-none">
                You have saved draft of Income Tax Return pending for submission
              </h2>
              <p className="text-sm px-6 py-7 bg-white">No Saved Draft</p>
            </div>

            <div className="rounded-sm border border-slate-200">
              <h2 className="text-xl font-medium text-slate-900 bg-[#efeff9] px-4 py-6 leading-none">
                To file a fresh Income Tax Return
              </h2>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between bg-white">
                <p className="text-sm px-4 py-7 max-w-2xl">
                  Income Tax Return is the form in which a taxpayer files
                  information about his income and tax thereon to the Income Tax
                  Department.
                </p>

                <button
                  type="button"
                  onClick={() => navigate("/incometax/itr_dashboard/select_status")}
                  className="rounded-sm mr-5 bg-[#2a3a8d] px-6 py-3 text-sm font-medium  text-white transition hover:bg-[#1f2f70]"
                >
                  Start New Filing
                </button>
              </div>
            </div>

            <div className="flex justify-start">
              <button
                type="button"
                onClick={() => setShowOverview(false)}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#2a3a8d] bg-white px-5 py-3 text-sm font-medium text-[#2a3a8d] transition hover:bg-slate-50"
              >
                <ChevronLeft size={16} /> Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};

export default FileIncomeTaxReturn;
