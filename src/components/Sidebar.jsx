import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();
export default function Sidebar({ children, name }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white shadow-sm rounded-md ml-1">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="images/logo.png"
            className={`overflow-hidden transition-all ${
              expanded ? "w-30" : "w-0"
            }`}
          />

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t-1 flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=random"
            alt=""
            className="w-10 h-10 rounded-md"
          />

          <div
            className={`
            flex justify-between items-center
           
            overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          

            `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{name}</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`
      relative flex items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      trasintions-colors group
      ${
        active
          ? "bg-gradient-to-tr from-slate-200 to-slate-100 text-slate-900"
          : "hover:bg-indigo-50 text-gray-600"
      }
      
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all 
        ${expanded ? "w-52 ml-3" : "w-0"}
        
        `}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}
      {!expanded && (
        <div
          className={`
        absolute left-full rounded-md px-2 py-1 ml-6
        bg-indigo-100 text-indigo-800 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
