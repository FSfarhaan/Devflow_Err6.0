import React from 'react'
import { FolderIcon, LayoutDashboard, MessageCircle, GitGraph, Link2, BarChart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
  
    return (
      <div className="w-64 bg-white border-r border-gray-200 p-4 ">
        <div className="flex items-center mb-6 "> 
        <div className="w-9 h-9 md:mr-3 mr-2 border bg-purple-950 border-gray-600 p-2 rounded-full">
          <img src="/devflow_logo.png" alt="Devflow Logo" />
        </div>
          <span className="text-xl font-semibold text-black">InsightPDF</span>
        </div>
  
        <div className="space-y-2">
            {[
                { label: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" },
                { label: "Chat", icon: <MessageCircle />, path: "/chat" },
                { label: "Knowledge Graph", icon: <GitGraph />, path: "/knowledgegraph" },
                { label: "Corelations", icon: <Link2 />, path: "/corelations" },
                { label: "Text Extractions", icon: <Link2 />, path: "/extract" },
                // { label: "Statistics", icon: <BarChart />, path: "/statistics" }
            ].map(({ label, icon, path }) => (
                <Link
                key={label}
                to={path}
                className={`w-full text-gray-700 p-2 rounded-lg flex items-center transition ${location.pathname === path ? "bg-purple-800 text-white" : "hover:bg-gray-200"}`}
                >
                {React.cloneElement(icon, { className: "w-5 h-5 mr-2" })}
                {label}
                </Link>
            ))}
            </div>
  
        <div className="mt-8">
          <h3 className="text-gray-500 mb-2">Folders</h3>
          {["Landing Page", "Mobile", "Dashboard", "Footer"].map((folder) => (
            <div key={folder} className="flex items-center text-gray-700 p-2">
              <FolderIcon className="w-5 h-5 text-yellow-400 mr-2" />
              {folder}
            </div>
          ))}
        </div>

      </div>
    );
  };

export default Sidebar
