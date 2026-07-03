import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InfoIcon, Landmark } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import pan from "../assets/itr/pan.svg";
import aadhar from "../assets/itr/adhaar.svg";
import other from "../assets/itr/userId.svg";
import loginLock from "../assets/itr/loginLock.svg";
const IncomeTaxLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showMore, setShowMore] = useState(false);
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [secureAccessConfirmed, setSecureAccessConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showTooltip, setShowTooltip] = useState(null);

  const handleContinue = (e) => {
    e.preventDefault();
    if (step === 1 && userId.trim()) {
      setStep(2);
    } else if (step === 2) {
      setLoading(true);
      setError("");
      setTimeout(() => {
        setLoading(false);
        login({ full_name: "Preeti Dalal", pan: userId });
        navigate("/incometax/itr_dashboard");
      }, 1000);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className=" w-full bg-[#f5f5f5] font-poppins py-4 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-right text-sm text-gray-500 px-4 py-2">
          <span className="text-red-500">*</span> Indicates mandatory fields
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white rounded-sm border-[1.5px] border-gray-200">

        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:p-14 md:pr-20 w-[42%]">
            {step === 1 && (

              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login</h2>
            )}

            <form className="space-y-5" onSubmit={handleContinue}>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded text-sm">
                  {error}
                </div>
              )}

              {step === 1 && (
                <>
                  <div>
                    <label className="block text-base text-gray-700 mb-2">
                      Enter your User ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="PAN/ AADHAAR/ OTHER USER ID"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      className="w-full border border-gray-400 rounded px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={!userId.trim()}
                      className={`flex-1 font-medium py-3 rounded text-sm transition-colors disabled:opacity-70 ${userId.trim()
                          ? "bg-[#2A3A8D] hover:bg-[#1a276b] text-white"
                        : "bg-[#d1d1d1] text-gray-600 cursor-not-allowed"
                        }`}
                    >
                      Continue &gt;
                    </button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-sm bg-gray-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 ">Login</h3>
                      <p className="text-sm text-gray-600">PAN : {userId}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-2">Secure Access Message</p>
                  <div className=" rounded  bg-white">
                    <p className="text-base font-medium text-gray-800 bg-[#EBF4FD] p-4">Login</p>
                  </div>

                  <div className="flex items-start gap-3 mb-4">
                    <input
                      type="checkbox"
                      id="secureAccess"
                      checked={secureAccessConfirmed}
                      onChange={(e) => setSecureAccessConfirmed(e.target.checked)}
                      className="mt-1 w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="secureAccess" className=" blocktext-sm text-gray-700 flex items-center gap-2">
                      Please confirm your secure access message displayed above
                      <div className="relative">
                        <InfoIcon
                          className="h-5 mt-1 text-[#666666] cursor-pointer"
                          onMouseEnter={() => setShowTooltip("secureAccess")}
                          onMouseLeave={() => setShowTooltip(null)}
                        />
                        {showTooltip === "secureAccess" && (
                          <div className="absolute bottom-full mb-2 left-0 bg-black text-white text-xs rounded px-2 py-1 z-10 w-64 whitespace-pre-wrap">
                            This is your personalized message which is a proof of the fact that the website you have accessed is genuine. This can be updated by you in your “Profile” post login. By default “login” has been set as your secure message.


                          </div>
                        )}
                      </div>

                    </label>
                  </div>

                  <div className="mb-4">
                    <label className="block text-base text-gray-700 mb-2">
                      Enter password for your e-Filing account <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-400 rounded px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className=" mb-4">
                    <button type="button" className="text-sm text-blue-600 font-semibold hover:underline flex items-center gap-1">
                      Forgot Password?
                      <div className="relative">
                        <InfoIcon
                          className="h-5  text-[#666666] cursor-pointer"
                          onMouseEnter={() => setShowTooltip("forgotPassword")}
                          onMouseLeave={() => setShowTooltip(null)}
                        />
                        {showTooltip === "forgotPassword" && (
                          <div className="absolute bottom-full mb-2 left-0 bg-black text-white text-xs rounded px-2 py-1 z-10 w-64 whitespace-pre-wrap">
                            If you do not remember your password, you can reset your password or you can login using OTP on mobile number registered with Aadhaar.
                          </div>
                        )}
                      </div>

                    </button>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading || !password.trim() || !secureAccessConfirmed}
                      className={`flex-1 font-medium py-2.5 rounded text-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed ${password.trim() && secureAccessConfirmed
                          ? "bg-[#2A3A8D] hover:bg-[#1a276b] text-white"
                          : "bg-[#d1d1d1] hover:bg-[#b8b8b8] text-gray-600"
                        }`}
                    >
                      {loading ? "Logging in..." : "Continue >"}
                    </button>
                  </div>
                </>
              )}

              <button
                type="button"
                onClick={handleBack}
                className="w-full border border-[#2a3a8d] text-[#2a3a8d] font-medium py-3 rounded text-sm hover:bg-blue-50 transition-colors"
              >
                {"< Back"}
              </button>
            </form>

            {/* Other ways */}
            {step === 1 && (

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-700 mb-4">Other ways to access your account</p>
                <button
                  type="button"
                  className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-700"
                >
                  <Landmark className="w-5 h-5 text-gray-600" />
                  Net Banking
                </button>
              </div>
            )}
          </div>

          {/* Right - User ID Info or Security Padlock */}
          <div className="p-8 md:p-14 bg-[#fafbfd] w-[58%]">
            {step === 1 ? (
              <>
                <h3 className="text-lg font-semibold text-gray-500 mb-6">
                  Know about your <span className="text-black">User ID</span>
                </h3>

                <div className="space-y-6">
                  {/* PAN */}
                  <div className="flex gap-4 pb-4 border-b border-gray-200">
                    <div className="w-18 h-18  flex items-center justify-center rounded shrink-0">
                      <img src={pan} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">PAN (Permanent Account Number)</p>
                      <p className="text-sm font-semibold text-black">Individuals</p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-semibold text-gray-800">Other Than Individuals</span> (Company, Trust, AOP, AJP, BOI, Firm, HUF, LLP, Local Authority)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 pb-4 border-b border-gray-200">
                    <div className="w-18 h-18  flex items-center justify-center rounded shrink-0">
                      <img src={aadhar} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Aadhaar Number</p>
                      <p className="text-sm font-semibold text-black">Individuals</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-18 h-18  flex items-center justify-center rounded shrink-0">
                      <img src={other} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Other than PAN users</p>
                      <p className="text-sm font-semibold text-black mt-1">
                        CA, External Agency, ERI, Tax Deductor & Tax collector, TIN 2.0 Stakeholders, ITDREIN, Non-Residents not holding PAN
                      </p>
                      <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc pl-4">
                        {!showMore && <li>TAN (Tax Deductor & Collector)</li>}
                        {showMore && (
                          <>
                            <li>ARCA (Authorised Representative Chartered Accountant) followed by 6 digit number</li>
                            <li>TAN (Tax Deductor & Collector)</li>
                            <li>ERIP (ERI User) followed by 6 digit number</li>
                            <li>TINN (TIN 2.0 User) followed by 6 digit number</li>
                            <li>EXTP (External Agency) followed by 6 digit number</li>
                            <li>ITDREIN (Income Tax Department Reporting Entity Identification Number) user ID will be- PAN/TAN of reporting entity followed by 2 alphabets and 3 digits</li>
                            <li>Non-Residents not holding and not required to have PAN- User ID will be NR followed by 2 alphabets and 6 digits allocated at the time of registration.</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowMore(!showMore)}
                  className="text-[#076bcf] text-sm font-medium mt-4 ml-22 hover:underline"
                >
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <img src={loginLock} className="object-cover w-64 " />


              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxLogin;
