import { useState } from "react";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import Article from "./components/Article";
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

const name = "John Doe"

function App() {
  return (
    <div className="bg-slate-500 w-screen h-screen flex ">
      <Sidebar name={name}>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          //alert
          active
        />

        <SidebarItem icon={<BarChart3 size={20} />} text="Statistics"  />
        <SidebarItem icon={<UserCircle size={20} />} text="Users" alert />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
      </Sidebar>

      <Article name={name}></Article>

      
    </div>
  );
}

export default App;
