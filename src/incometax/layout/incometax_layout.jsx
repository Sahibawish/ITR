import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";
import IncomeTaxNavbar from "./incometax_navbar";
import IncomeTaxFooter from "./incometax_footer";

const IncomeTaxLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);



  return (
    <div className="w-full font-poppins">
      <IncomeTaxNavbar />

      <div className="flex">
        <div className="flex-1 transition-all duration-300">
          <Outlet context={{ sidebarOpen, setSidebarOpen }} />
        </div>
      </div>

      <IncomeTaxFooter />
    </div>
  );
};

export default IncomeTaxLayout;
