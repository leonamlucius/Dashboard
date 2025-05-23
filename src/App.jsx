import { useState } from "react";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import Article from "./components/Article";
import Grid from "./components/Grid";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const name = "John Doe";

function App() {
  return (
    <div className="bg-slate-500 flex h-lvh smooth">
      <Sidebar name={name}>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          //alert
          active
        />

        <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" />
        <SidebarItem icon={<UserCircle size={20} />} text="Users" alert />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
      </Sidebar>
      <main className="w-screen overflow-auto">  {/* Dá uma olhada nisso */}
      
        <Article name={name} isSelect={1}>  </Article>
      </main>
    </div>
  );
}

export default App;
