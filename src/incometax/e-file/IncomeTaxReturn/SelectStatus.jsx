import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Breadcrumb from "../../component/Breadcrumb";

const FileIncomeTaxReturn = ({ onBack, onContinue }) => {
  const [StatusMode, setStatusMode] = useState("");
  const [OtherStatus, setOtherStatus] = useState("");

  const isOthersSelected = StatusMode === "others";

  const isContinueEnabled =
    StatusMode === "indivduals" ||
    StatusMode === "HUF" ||
    (StatusMode === "others" && !!OtherStatus);

  const handleStatusChange = (value) => {
    setStatusMode(value);
    if (value !== "others") {
      setOtherStatus("");
    }
  };

  const handleContinue = () => {
    if (!isContinueEnabled) return;
    onContinue?.({ status: StatusMode, otherStatus: OtherStatus });
  };

  return (
    <div className="min-h-screen bg-[#f6f7fb] pb-8">
      <div className="px-5 pb-5 md:px-14 md:pb-8 pt-3 text-sm">
        <Breadcrumb
          items={[
            {
              label: "Dashboard",
              path: "/incometax/itr_dashboard",
              clickable: true,
            },
            { label: "e-file" },
            { label: "Income Tax Return" },
            { label: "Select Status" },
          ]}
        />
      </div>

      <div className="px-5 md:px-14">
        <div className="mb-6 max-w-3xl">
          <h1 className="text-[28px] font-medium">
            Please select the status applicable to you to proceed further
          </h1>
          <p className="text-sm max-w-xl">
            Based on your last year's data we have pre-selected a status
            applicable to you. You may change the status if it is not applicable
            to you.
          </p>
        </div>

        <div className="max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <label className="flex items-center gap-3 text-sm font-medium text-slate-900 transition w-auto sm:w-[300px] border-[1.5px] border-gray-300 px-4 py-3.5 rounded-sm">
              <input
                type="radio"
                name="StatusMode"
                value="indivduals"
                checked={StatusMode === "indivduals"}
                onChange={() => handleStatusChange("indivduals")}
                className="h-4 w-4 text-[#076bcf] accent-[#076bcf]"
              />
              <span>Indivduals</span>
            </label>

            <label className="flex items-center gap-3 text-sm font-medium text-slate-900 transition w-auto sm:w-[300px] border-[1.5px] border-gray-300 px-4 py-3.5 rounded-sm">
              <input
                type="radio"
                name="StatusMode"
                value="HUF"
                checked={StatusMode === "HUF"}
                onChange={() => handleStatusChange("HUF")}
                className="h-4 w-4 text-[#076bcf] accent-[#076bcf]"
              />
              <span>HUF</span>
            </label>
            <label className="flex items-center gap-3 text-sm font-medium text-slate-900 transition w-auto sm:w-[300px] border-[1.5px] border-gray-300 px-4 py-3.5 rounded-sm">
              <input
                type="radio"
                name="StatusMode"
                value="others"
                checked={StatusMode === "others"}
                onChange={() => handleStatusChange("others")}
                className="h-4 w-4 text-[#076bcf] accent-[#076bcf]"
              />
              <span>Others</span>
            </label>
          </div>
        </div>

        {/* hr + sub-options only appear once "Others" is selected */}
        {isOthersSelected && (
          <>
            <hr className="text-gray-400" />

            <div className="max-w-4xl mt-5">
              <div className="flex flex-col sm:flex-row md:flex-wrap items-start sm:items-stretch gap-6 mb-6">
                <label className="flex items-center gap-3 text-sm font-medium text-slate-900 transition w-auto sm:w-[280px] border-[1.5px] border-gray-300 px-4 py-3.5 rounded-sm">
                  <input
                    type="radio"
                    name="OtherStatus"
                    value="ITAct"
                    checked={OtherStatus === "ITAct"}
                    onChange={() => setOtherStatus("ITAct")}
                    className="h-4 w-4 text-[#076bcf] accent-[#076bcf]"
                  />
                  <span>Company(as per 2(17) of the I.T. Act)</span>
                </label>

                <label className="flex items-center gap-3 text-sm font-medium text-slate-900 transition w-auto sm:w-[280px] border-[1.5px] border-gray-300 px-4 py-3.5 rounded-sm">
                  <input
                    type="radio"
                    name="OtherStatus"
                    value="AOP"
                    checked={OtherStatus === "AOP"}
                    onChange={() => setOtherStatus("AOP")}
                    className="h-4 w-4 text-[#076bcf] accent-[#076bcf]"
                  />
                  <span>Association of Persons (AOP) / (BOI)</span>
                </label>

                <label className="flex items-center gap-3 text-sm font-medium text-slate-900 transition w-auto sm:w-[280px] border-[1.5px] border-gray-300 px-4 py-3.5 rounded-sm">
                  <input
                    type="radio"
                    name="OtherStatus"
                    value="LLP"
                    checked={OtherStatus === "LLP"}
                    onChange={() => setOtherStatus("LLP")}
                    className="h-4 w-4 text-[#076bcf] accent-[#076bcf]"
                  />
                  <span>Limited Liability Partnership (LLP)</span>
                </label>

                <label className="flex items-center gap-3 text-sm font-medium text-slate-900 transition w-auto sm:w-[280px] border-[1.5px] border-gray-300 px-4 py-3.5 rounded-sm">
                  <input
                    type="radio"
                    name="OtherStatus"
                    value="Local Authority"
                    checked={OtherStatus === "Local Authority"}
                    onChange={() => setOtherStatus("Local Authority")}
                    className="h-4 w-4 text-[#076bcf] accent-[#076bcf]"
                  />
                  <span>Local Authority</span>
                </label>

                <label className="flex items-center gap-3 text-sm font-medium text-slate-900 transition w-auto sm:w-[280px] border-[1.5px] border-gray-300 px-4 py-3.5 rounded-sm">
                  <input
                    type="radio"
                    name="OtherStatus"
                    value="Partnership Firm"
                    checked={OtherStatus === "Partnership Firm"}
                    onChange={() => setOtherStatus("Partnership Firm")}
                    className="h-4 w-4 text-[#076bcf] accent-[#076bcf]"
                  />
                  <span>Partnership Firm</span>
                </label>

                <label className="flex items-center gap-3 text-sm font-medium text-slate-900 transition w-auto sm:w-[280px] border-[1.5px] border-gray-300 px-4 py-3.5 rounded-sm">
                  <input
                    type="radio"
                    name="OtherStatus"
                    value="AJP"
                    checked={OtherStatus === "AJP"}
                    onChange={() => setOtherStatus("AJP")}
                    className="h-4 w-4 text-[#076bcf] accent-[#076bcf]"
                  />
                  <span>Aritificial Juridicial Person (AJP)</span>
                </label>
              </div>
            </div>
          </>
        )}

        <div className="max-w-4xl mt-8 flex flex-col gap-3 sm:flex-row sm:items-center justify-between">
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
            Proceed <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileIncomeTaxReturn;