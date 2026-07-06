import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ items = [] }) => {
  const navigate = useNavigate();

  if (!items.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 py-3">
      {items.map((item, index) => (
        <React.Fragment key={`${item.label}-${index}`}>
          {item.clickable && item.path ? (
            <button
              type="button"
              onClick={() => navigate(item.path)}
              className="font-medium text-[#076bcf] hover:underline"
            >
              {item.label}
            </button>
          ) : (
            <span className="font-medium text-slate-500">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <ChevronRight size={14} className="text-slate-400" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
