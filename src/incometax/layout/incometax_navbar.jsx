import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Globe,
  Minus,
  Circle,
  Contrast,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { apiService } from "../../services/api";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
// import Strip from "../../component/strip";
import logo from "../../assets/itr/logo.png";
import profile from "../../assets/itr/default-profile.png";

const IncomeTaxNavbar = ({ sidebarOpen, setSidebarOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [callUsOpen, setCallUsOpen] = useState(false);
  const [openProfileDropdown, setOpenProfileDropdown] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await apiService.logout();
      logout();
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed");
    } finally {
      navigate("/incometax/login");
    }
  };

  // const menuItems = [
  //   { name: user ? "Dashboard" : "Home", path: "/" },
  //   { name: "Individual/HUF", hasDropdown: true },
  //   { name: "Company", hasDropdown: true },
  //   { name: "Non-Company", hasDropdown: true },
  //   { name: "Tax Professionals & Others", hasDropdown: true },
  //   { name: "Downloads", hasDropdown: true },
  //   { name: "Help", hasDropdown: true },
  // ];

  const eFileMenu = [
    {
      label: "Income Tax Returns",
      hasSubmenu: true,
      submenu: [
        {
          label: "File Income Tax Return",
          // active: true,
        },
        { label: "View Filed Returns" },
        { label: "e-Verify Return" },
        { label: "View Form 26AS" },
        { label: "Download Pre-Filled Data" },
        { label: "View Annual Information Statement (AIS)" },
      ],
    },
    {
      label: "Income Tax Forms",
      hasSubmenu: true,
      submenu: [
        {
          label: "File Income Tax Forms",
        },
        { label: "View Filed Forms" },
        { label: "View Bulk Filed Forms Status (15CA/145)" },
      ],
    },
    { label: "e-Pay Tax", hasSubmenu: false },
    {
      label: "Submit Tax Evasion Petition or Benami Property holding",
      hasSubmenu: false,
    },
  ];

  const AuthorisedMenu = [
    {
      label: "My e-Return Intermediary (ERI)",
    },
    {
      label: "My Chartered Accountant (CA)",
    },
    {
      label: "Register as Representative Assessee",
    },
    {
      label: "Register to act on behalf of another person",
    },
    {
      label: "Authorize another person to act on behalf of self",
    },
  ];

  const ServiceMenu = [
    { label: "Know Your Refund Status" },
    { label: "Tax Credit Mismatch" },
    {
      label: "Rectification",
      hasSubmenu: true,
      submenu: [
        {
          label: "Rectification of order passed by CPC",
        },
        { label: "Rectification of order passed by CIT (A)" },
        { label: "Request to AO seeking rectification" },
      ],
    },
    {
      label: "Challan Correction",
      hasSubmenu: true,
      submenu: [
        { label: "Normal Challans (100,300,400)" },
        { label: "Block Assesssment Challans 9311, 411)" },
      ],
    },
    { label: "Refund Reissue" },
    { label: "Request for Order Giving Effect" },
    { label: "Generate Electronic Verification Code (EVC" },
    { label: "View/Download e-PAN" },
    { label: "Manage ITD Reporting Entity Identification Number (ITDEIN)" },
    { label: "Condonation Request" },
  ];

  const PendingActionMenu = [
    { label: "Worklist" },
    { label: "Response to Outstanding Demand" },
    { label: "e-Proceedings" },
    {
      label: "Reporting Portal",
      hasSubmenu: true,
      submenu: [{ label: "Reporting Entities" }, { label: "Others" }],
    },
    { label: "Compliance Portal" },
  ];

  const grievancesMenu = [
    { label: "Submit Grievance" },
    { label: "View Grievance Status" },
  ];

  const menuItems = [
    { name: user ? "Dashboard" : "Home", path: "/" },
    { name: "e-File", hasDropdown: true, megaMenu: eFileMenu },
    {
      name: "Authorised Partners",
      hasDropdown: true,
      megaMenu: AuthorisedMenu,
    },
    { name: "Services", hasDropdown: true, megaMenu: ServiceMenu },
    { name: "AIS" },
    { name: "Pending Actions", hasDropdown: true, megaMenu: PendingActionMenu },
    { name: "Grievances", hasDropdown: true, megaMenu: grievancesMenu },
    { name: "Help" },
  ];
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const displayName = user?.business_name || user?.full_name || "Tax Payer";
  const displayPan = user?.pan || "Not Available";

  return (
    <>
      {/* <Strip /> */}

      {/* Header Section */}
      <div className="bg-white font-poppins sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between ">
            {/* Logo */}
            <div className="flex items-center gap-3 py-3">
              <img
                src={logo}
                alt="E-Filing Logo"
                className="h-16 cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>

            {/* Right Actions */}
            <div
              className={`flex ${user ? "flex-row" : "flex-col"} items-end md:items-center gap-2`}
            >
              <div className="flex items-center gap-5">
                {/* Call Us */}
                <div className="relative hidden sm:block">
                  <button
                    className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600"
                    onClick={() => setCallUsOpen(!callUsOpen)}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Us</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {callUsOpen && (
                    <div className="absolute -right-30 mt-2 w-175 bg-white border border-[#DDDDDD] shadow-lg rounded z-50 p-4">
                      {/* e-filing Section */}
                      <div className="mb-4 flex items-start justify-between pb-4 border-b border-[#DDDDDD]">
                        <div className="w-[50%]">
                          <h4 className="font-semibold text-base mb-2">
                            e-filing and Centralized Processing Center
                          </h4>
                          <p className="text-xs text-gray-600">
                            e-Filing of Income Tax Return or Forms and other
                            value added services & Intimation, Rectification,
                            Refund and other Income Tax Processing Related
                            Queries
                          </p>
                        </div>
                        <div className="w-[50%] mx-10 space-y-1">
                          <p className="text-sm text-black font-medium">
                            1800 103 0025 (or)
                          </p>
                          <p className="text-sm text-black font-medium">
                            1800 419 0025
                          </p>
                          <p className="text-sm text-black font-medium">
                            +91-80-46122000
                          </p>
                          <p className="text-sm text-black font-medium">
                            +91-80-61464700
                          </p>
                        </div>
                        <div className="w-[35%]">
                          <p className="text-sm text-gray-500">
                            08:00 hrs - 20:00 hrs
                          </p>
                          <p className="text-sm text-gray-500">
                            (Monday to Friday)
                          </p>
                        </div>
                      </div>

                      {/* NSDL Section */}
                      <div className="mb-4 flex items-start justify-between pb-4 border-b border-[#DDDDDD]">
                        <div className="w-[50%]">
                          <h4 className="font-semibold text-sm mb-2">
                            Tax Information Network - NSDL
                          </h4>
                          <p className="text-sm text-gray-600">
                            Queries related to PAN & TAN application for
                            Issuance / Update through NSDL
                          </p>
                        </div>
                        <div className="w-[50%] mx-10 ">
                          <p className="text-sm text-black font-medium">
                            +91-20-27218080
                          </p>
                        </div>
                        <div className="w-[35%]">
                          <p className="text-sm text-gray-500">
                            07:00 hrs - 23:00 hrs
                          </p>
                          <p className="text-sm text-gray-500">(All Days)</p>
                        </div>
                      </div>

                      {/* View All Link */}
                      <button className="text-blue-600 hover:underline text-sm font-medium flex items-center justify-end w-full gap-1">
                        View All
                        <ChevronDown className="w-3 h-3 -rotate-90" />
                      </button>
                    </div>
                  )}
                </div>
                <span className="text-gray-400 hidden md:block">|</span>

                {/* Language Selector */}
                <div className="hidden sm:flex items-center gap-1 text-sm text-gray-700">
                  <Globe className="w-4 h-4" />
                  <select className="border-0 bg-transparent text-gray-700 cursor-pointer text-sm">
                    <option>English</option>
                    <option>हिंदी</option>
                  </select>
                </div>
                <span className="text-gray-400 hidden md:block">|</span>

                {/* Font Size Controls */}
                <div className="hidden lg:flex items-center gap-3">
                  <button
                    className="p-1 hover:bg-gray-100 rounded text-gray-700 text-sm font-medium"
                    title="Reduce font size"
                  >
                    A-
                  </button>
                  <button
                    className="px-1 bg-[#076bcf] text-white rounded-sm text-sm font-medium"
                    title="Default font size"
                  >
                    A
                  </button>
                  <button
                    className="p-1 hover:bg-gray-100 rounded text-gray-700 text-sm font-medium"
                    title="Increase font size"
                  >
                    A+
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-1"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
              {user ? (
                <div className="relative text-sm hidden md:flex">
                  <button
                    type="button"
                    onClick={() => setOpenProfileDropdown(!openProfileDropdown)}
                    className="flex items-center gap-1 bg-white px-3 py-2 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center">
                      <img
                        src={user?.profile_picture || profile}
                        alt="Profile"
                        className="w-8 h-8 object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-900">
                        {displayName}
                      </p>
                      <p className="text-xs text-gray-500">{displayPan}</p>
                    </div>
                  </button>

                  {openProfileDropdown && (
                    <div className="absolute right-0 top-full mt-2 w-44 rounded border border-gray-200 bg-white shadow-lg z-50">
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="hidden md:flex justify-end text-sm w-full">
                  <span className="text-gray-600">
                    Do not have an account?{" "}
                  </span>
                  <button
                    type="button"
                    onClick={() => navigate("/incometax/login")}
                    className="text-[#076bcf] hover:underline font-medium ml-1"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dark Blue Navigation Bar */}
      <div className="bg-[#2A3A8D] font-poppins">
        <div className="container mx-auto px-4 sm:px-8 md:px-12">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-start mx-auto gap-2 py-1.5">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`px-3 py-2 text-sm text-white flex items-center gap-1 ${
                        openDropdown === index
                          ? "bg-[#1D2D72]"
                          : "hover:bg-[#2a4a6c]"
                      }`}
                      onClick={() => {
                        setOpenDropdown(openDropdown === index ? null : index);
                        setActiveSubmenu(null);
                      }}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openDropdown === index && item.megaMenu && (
                      <div className="absolute left-0 top-full mt-1 overflow-visible z-50">
                        <div className="relative w-72 rounded-l-md bg-white border border-slate-200 shadow-lg overflow-visible">
                          {item.megaMenu.map((entry) => (
                            <div key={entry.label} className="relative">
                              <button
                                onMouseEnter={() =>
                                  entry.hasSubmenu &&
                                  setActiveSubmenu(entry.label)
                                }
                                className={`w-full flex items-center justify-between px-5 py-4 text-left text-sm border-b border-slate-100 last:border-b-0 ${
                                  activeSubmenu === entry.label
                                    ? "bg-blue-50 text-[#076bcf] font-semibold"
                                    : "text-slate-800 hover:text-[#076bcf] hover:bg-slate-50"
                                }`}
                              >
                                {entry.label}
                                {entry.hasSubmenu && (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                              </button>

                              {activeSubmenu === entry.label &&
                                entry.submenu?.length > 0 && (
                                  <div className="absolute top-0 left-full w-72 overflow-visible rounded-r-md bg-white border border-slate-200 shadow-lg">
                                    {entry.submenu.map((sub, subIndex) => (
                                      <div key={sub.label} className="relative">
                                        <div
                                          className={`px-5 py-4 text-sm border-b border-slate-100 ${
                                            sub.active
                                              ? "border-2 border-[#076bcf] text-slate-900 font-medium m-1"
                                              : "text-slate-800 hover:text-[#076bcf] hover:bg-slate-50"
                                          } ${
                                            subIndex ===
                                            entry.submenu.length - 1
                                              ? "border-b-0"
                                              : ""
                                          }`}
                                          onMouseEnter={() => {}}
                                        >
                                          {sub.label}
                                        </div>

                                        {sub.active &&
                                          sub.children?.length > 0 && (
                                            <div className="absolute top-0 left-full ml-1 w-72 overflow-hidden rounded-r-md bg-white border border-slate-200 shadow-lg">
                                              {sub.children.map((child) => (
                                                <button
                                                  key={child}
                                                  className="w-full text-left px-5 py-4 text-sm font-medium text-slate-800 hover:bg-slate-50"
                                                >
                                                  {child}
                                                </button>
                                              ))}
                                            </div>
                                          )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="px-3 py-2 text-sm text-white hover:bg-[#2a4a6c] block"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a3a5c] font-poppins">
          <div className="container mx-auto px-4 py-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <button
                    className="w-full text-left px-3 py-2 text-sm text-white hover:bg-[#2a4a6c] flex items-center justify-between"
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-sm text-white hover:bg-[#2a4a6c]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default IncomeTaxNavbar;
