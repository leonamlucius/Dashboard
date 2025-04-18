import { ChevronFirst, MoreVertical } from "lucide-react";

export default function Sidebar({ children }) {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white shadow-sm rounded-md">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img src="images/logo.png" className="w-10" />

          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            <ChevronFirst />
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>

        <div className="border-t-1 flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=random"
            alt=""
            className="w-10 h-10 rounded-md"
          />

          <div
            className={`
            flex justify-between items-center
            w-52 ml-3
          

            `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}
