import React, { useState } from "react";
import { ChevronRight, X, Check } from "lucide-react";
import Breadcrumb from "./Breadcrumb";

const options = [
  { label: "Through Net-Banking", value: "netBanking" },
  { label: "Using Digital Signature Certificate (DSC)", value: "dsc" },
  {
    label: "Using OTP on Mobile Number Registered with Aadhaar",
    value: "aadhaarOtp",
  },
  { label: "Using Bank Account EVC", value: "bankEvc" },
  { label: "Using Demat Account EVC", value: "dematEvc" },
];

const steps = [
  { number: 1, label: "Select Higher Security Option(S)" },
  { number: 2, label: "Confirm" },
  { number: 3, label: "Update Successfully" },
];

const SecureAccount = ({ onBack }) => {
  const [selected, setSelected] = useState({});
  const [currentStep] = useState(1);

  const toggleOption = (value) => {
    setSelected((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };

  const [showValidationModal, setShowValidationModal] = useState(false);
  const handleContinue = () => {
    const hasLoginOption = options.some((opt) => selected[opt.value]);
    const hasResetOption = options.some(
      (opt) => selected[`reset-${opt.value}`],
    );

    if (!hasLoginOption && !hasResetOption) {
      setShowValidationModal(true);
      return;
    }
  };

  const breadcrumbItems = [
    { label: "Dashboard", path: "/incometax/itr_dashboard", clickable: true },
    { label: "e-Filing Vault Higher Security" },
  ];

  return (
    <div className="min-h-screen bg-[#f6f7fb] px-4 py-5 sm:px-6 lg:px-14 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />

        {/* Stepper */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex items-start min-w-0 md:min-w-[700px]">
            {steps.map((step, i) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-start">
                  <div className="flex min-w-[120px] sm:min-w-[180px] lg:min-w-[300px]">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-sm border-3 text-lg font-semibold ${
                        step.number === currentStep
                          ? "border-[#076bcf] text-black bg-white"
                          : "border-slate-300 text-slate-400 bg-white"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1">
                      {i < steps.length - 1 && (
                        <div className="flex items-center flex-1 pt-3">
                          <div className="h-0.5 w-full bg-slate-300" />
                          <ChevronRight className="w-4 h-4 text-slate-300 -ml-1" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className={`mt-2 text-sm text-left sm:text-center ${
                      step.number === currentStep
                        ? "font-semibold text-slate-900"
                        : "text-slate-400"
                    }`}
                  >
                    {step.label}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between w-full lg:w-[60%] mb-6">
          <h1 className="text-[28px] font-medium text-slate-900">
            e-Filing Vault Higher Security
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.65fr_1fr]">
              <div className="">
                <p className="text-sm text-slate-500 text-end">
                  <span className="text-red-500">*</span> Indicates mandatory
                  fields
                </p>

              <div className="rounded-sm border border-slate-300 bg-white p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-medium text-slate-900 mb-4">
                  Set Higher Security for Login
                </h2>
                <div className="space-y-4">
                  {options.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-start gap-3 text-sm text-slate-900 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={!!selected[option.value]}
                        onChange={() => toggleOption(option.value)}
                        className="h-4 w-4 rounded-sm border-slate-400 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="leading-5">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-sm border border-slate-300 bg-white p-6 h-fit mt-5">
              <div className="flex items-start gap-3">
                <div className="text-slate-500 mt-0.5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-medium text-slate-900">
                    Please know that
                  </p>
                  <p className="text-sm text-slate-600 mt-3 leading-6">
                    If none of the options are selected you will have default
                    login. If you choose any option(s), then in addition to
                    UserID and Password, you will be required to use that option
                    to login or provide the additional validation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.65fr_1fr]">
            <div>
              {" "}
              <div className="rounded-sm border border-slate-300 bg-white p-6">
                <h2 className="text-lg sm:text-xl font-medium text-slate-900 mb-4">
                  Set Higher Security for Password Reset
                </h2>
                <div className="space-y-4">
                  {options.map((option) => (
                    <label
                      key={`reset-${option.value}`}
                      className="flex cursor-pointer items-center gap-3 text-sm text-slate-900"
                    >
                      <input
                        type="checkbox"
                        checked={!!selected[`reset-${option.value}`]}
                        onChange={() => toggleOption(`reset-${option.value}`)}
                        className="h-4 w-4 rounded-sm border-slate-400 text-blue-600 focus:ring-blue-500"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="my-5 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                <button
                  type="button"
                  onClick={onBack}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm border border-[#2A3A8D] bg-white px-6 py-3 text-sm font-semibold text-[#2A3A8D] shadow-sm transition hover:bg-slate-50"
                >
                  <span className="text-xl leading-none">&lt;</span>
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleContinue}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-[#1D2D72] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#17265a]"
                >
                  Continue <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="rounded-sm border border-slate-300 bg-white p-6 h-fit">
              <div className="flex items-start gap-3">
                <div className="text-slate-500 mt-0.5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-medium text-slate-900">
                    Please know that
                  </p>
                  <p className="text-sm text-slate-600 mt-3 leading-6">
                    If you choose any option(s), if you forget your password,
                    then you will be required to use that option to reset your
                    password. The existing option of e-filing OTP will be
                    disabled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showValidationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-sm bg-white mx-4 shadow-xl overflow-hidden">
            {/* Body */}
            <div className="relative px-3 pt-8 pb-6">
              <button
                type="button"
                onClick={() => setShowValidationModal(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex justify-center mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-600">
                  <Check className="h-6 w-6 text-green-600" strokeWidth={3} />
                </div>
              </div>

              <p className="text-center text-slate-800 text-sm">
                Please select at least one of the option.
              </p>
            </div>

            {/* Footer */}
            <div className="flex justify-center sm:justify-end bg-slate-100 px-4 sm:px-6 py-4">
              <button
                type="button"
                onClick={() => setShowValidationModal(false)}
                className="rounded-sm bg-[#1D2D72] px-8 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#17265a]"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecureAccount;
