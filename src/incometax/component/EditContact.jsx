import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Breadcrumb from "./Breadcrumb";

const sidebarLinks = [
  "My Bank Account",
  "My Demat Account",
  "Register DSC",
  "E-filing Vault - Higher Security",
  "Secure Access Message",
  "Static Password",
  "Aadhaar OTP Login",
  "Jurisdiction Details",
  "Source of Income",
  "Authorised Signatory for Income tax",
  "Portuguese Civil Code Applicability",
];

function FlagPrefix() {
  return (
    <div className="flex items-center gap-1 px-2 border-r border-slate-300 shrink-0">
      <span className="text-base leading-none">🇮🇳</span>
      <span className="text-slate-400 text-xs">▾</span>
    </div>
  );
}

function TextField({ label, required, defaultValue = "", placeholder = "" }) {
  return (
    <div>
      <label className="block text-sm text-slate-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full border border-slate-300 rounded-md px-3 py-3 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}

function PhoneField({ label, required, defaultValue = "" }) {
  return (
    <div>
      <label className="block text-sm text-slate-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className="flex items-center border border-slate-300 rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-indigo-500 focus-within:border-indigo-500">
        <FlagPrefix />
        <input
          type="text"
          defaultValue={defaultValue}
          className="w-full px-3 py-3 text-sm text-slate-800 focus:outline-none"
        />
      </div>
    </div>
  );
}

function SelectField({ label, required, options, defaultValue }) {
  return (
    <div>
      <label className="block text-sm text-slate-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <select
        defaultValue={defaultValue}
        className="w-full border border-slate-300 rounded-md px-3 py-[14px] text-sm text-slate-800 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
function Card({ children, className = "" }) {
  return (
    <div className={`bg-white border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

export default function EditContact({ onBack, onCancel, onProceed }) {
  const [form, setForm] = useState({
    country: "INDIA",
    flatDoor: "F-56, Rajendra Park, Extn.",
    roadStreet: "Nangloi",
    pincode: "110041",
    postOffice: "",
    areaLocality: "",
    districtCity: "WEST DELHI",
    state: "Delhi",
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const breadcrumbItems = [
    { label: "Dashboard", path: "/incometax/itr_dashboard", clickable: true },
    { label: "Edit Contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5">
          {/* ---------------- SIDEBAR ---------------- */}
          <div className="flex flex-col">
            <div className="bg-indigo-50 border-[1.5px] border-b-0 border-indigo-100 p-4">
              <button className="w-full flex items-center justify-between">
                <div className="text-left">
                  <p className="font-bold text-slate-900 text-sm">
                    PREETI DALAL
                  </p>
                  <p className="text-xs text-slate-500">Individual</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
              </button>
              <p className="text-xs text-slate-600 mt-3">
                Language Preference:{" "}
                <span className="font-semibold">English</span>
              </p>
              <button className="text-xs text-indigo-600 font-semibold hover:underline mt-1">
                Change Password
              </button>
            </div>

            <div className="bg-white border-[1.5px] border-gray-200 overflow-hidden">
              {sidebarLinks.map((link, i) => (
                <button
                  key={link}
                  className={`w-full flex items-center justify-between px-4 py-4 text-sm text-slate-700 hover:bg-slate-50 transition-colors ${
                    i !== sidebarLinks.length - 1
                      ? "border-b-[1.5px] border-slate-200"
                      : ""
                  }`}
                >
                  {link}
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                </button>
              ))}
            </div>

            <Card className="p-5 mt-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold text-gray-900">
                  Activity Log
                </h2>
                <button className="text-sm font-semibold text-[#3248a8] hover:underline">
                  View All
                </button>
              </div>
              <div className="border-t-[1.5px] border-gray-200 py-3 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last log In</span>
                  <span className="text-gray-800 font-medium">
                    01-Jul-2026, 10:39 AM
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last log out</span>
                  <span className="text-gray-800 font-medium">
                    01-Jul-2026, 10:40 AM
                  </span>
                </div>
              </div>

              <div className="border-t-[1.5px] border-gray-200 pt-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last log out</span>
                  <span className="text-gray-800 font-medium">
                    01-Jul-2026, 10:40 AM
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* ---------------- MAIN FORM ---------------- */}
          <div>
            <h1 className="text-xl font-bold text-slate-900 mb-4">
              Update Details
            </h1>

            <div className="bg-white border border-slate-200 rounded-md p-6 sm:p-8">
              {/* Mobile */}
              <h2 className="font-bold text-slate-900 text-sm mb-4">Mobile</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <PhoneField
                  label="Primary *→"
                  required
                  defaultValue="9654772424"
                />
                <SelectField
                  label="Primary Mobile Number Belongs to"
                  required
                  options={["Self", "Parent", "Spouse", "Other"]}
                  defaultValue="Self"
                />
                <PhoneField label="Secondary" defaultValue="9811500336" />
                <SelectField
                  label="Secondary Mobile Number belongs to"
                  required
                  options={["Self", "Parent", "Spouse", "Other"]}
                  defaultValue="Parent"
                />
              </div>

              {/* Residential / Office */}
              <h2 className="font-bold text-slate-900 text-sm mb-4">
                Residential/Office
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <PhoneField label="Mobile" />
                <PhoneField label="Landline" />
              </div>

              {/* Email */}
              <h2 className="font-bold text-slate-900 text-sm mb-4">Email</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <TextField
                  label="Primary"
                  required
                  defaultValue="preetidalal598@gmail.com"
                />
                <SelectField
                  label="E-mail ID belongs to"
                  required
                  options={["Self", "Parent", "Spouse", "Other"]}
                  defaultValue="Self"
                />
                <TextField label="Secondary" />
                <SelectField
                  label="Secondary E-mail ID belongs to"
                  options={["Select", "Self", "Parent", "Spouse", "Other"]}
                  defaultValue="Select"
                />
              </div>

              {/* Address */}
              <h2 className="font-bold text-slate-900 text-sm mb-1">Address</h2>
              <p className="text-xs text-slate-500 mb-3">
                You can enter details manually or{" "}
                <button className="text-indigo-600 font-semibold hover:underline">
                  Update as per PAN
                </button>
              </p>

              <div className="mb-5">
                <SelectField
                  label=""
                  options={["INDIA", "USA", "UK", "Other"]}
                  defaultValue={form.country}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <TextField
                  label="Flat / Door / Building"
                  required
                  defaultValue={form.flatDoor}
                />
                <TextField
                  label="Road / Street / Block / Sector"
                  defaultValue={form.roadStreet}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <TextField
                  label="Pincode"
                  required
                  defaultValue={form.pincode}
                />
                <div />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <SelectField
                  label="Post Office"
                  required
                  options={["", "Select Post Office"]}
                  defaultValue=""
                />
                <SelectField
                  label="Area/Locality"
                  required
                  options={["", "Select Area/Locality"]}
                  defaultValue=""
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <TextField
                  label="District/City"
                  required
                  defaultValue={form.districtCity}
                />
                <TextField label="State" required defaultValue={form.state} />
              </div>

              <div className="mb-2">
                <p className="text-sm text-slate-700">
                  Communication to be addressed to:
                  <span className="text-red-500 ml-0.5">*</span>
                </p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  Primary and Secondary
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-5">
              <button
                type="button"
                onClick={onCancel || onBack}
                className="border border-indigo-600 text-indigo-600 rounded-md px-6 py-2 text-sm font-semibold hover:bg-indigo-50 transition-colors bg-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onProceed}
                className="bg-indigo-900 text-white rounded-md px-6 py-2 text-sm font-semibold hover:bg-indigo-800 transition-colors"
              >
                Proceed To E-Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
