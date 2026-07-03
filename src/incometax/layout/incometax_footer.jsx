import React from "react";

const IncomeTaxFooter = () => {
  return (
    <footer className="bg-[#142040] text-white font-poppins"
    style={{backgroundImage:"linear-gradient(to bottom, #142040, #115CBA)"}}>
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 border-b border-gray-600 pb-6 md:pb-8">
          {/* About Us */}
          <div>
            <h3 className="text-sm md:text-base font-semibold mb-3 md:mb-4">About Us</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">About the Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">History of Direct Taxation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Vision, Mission, Values</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Who We Are</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Right to Information</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Organizations & Functions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Media Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">e-Filing Calendar 2026</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Grievance Redressal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Feedback</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">RTI</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Public Grievance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Ombudsman</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Citizen Charter</a></li>
            </ul>
          </div>

          {/* Using the Portal */}
          <div>
            <h3 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Using the Portal</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">User Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Videos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Downloads</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Forms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Circulars</a></li>
            </ul>
          </div>

          {/* Related Sites */}
          <div>
            <h3 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Related Sites</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Income Tax Department</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">CBDT</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Ministry of Finance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">Government of India</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">NSDL</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">UTIITSL</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline block py-1">GST Portal</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-6 md:mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <h3 className="text-sm md:text-base font-semibold">Follow us on</h3>
            <div className="flex items-center gap-3 md:gap-4">
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505A3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.9925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default IncomeTaxFooter;
