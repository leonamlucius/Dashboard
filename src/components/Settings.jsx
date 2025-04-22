import React from "react";
import { IoIosSettings } from "react-icons/io";
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
const Settings = () => {
  return (
    <div className="px-4">
      <div className="p-4 rounded border border-stone-300 h-screen ">
        <div className="mb-4 flex justify-between">
          <h3 className="flex items-center gap-1.5 font-medium">
            <IoIosSettings />
            Seettings
          </h3>
        </div>
        <div className="mt-10">
          <div className="flex items-center gap-1.5 font-normal ms-8 mb-5">
            <FaToggleOff />
            Darkmode
          </div>
          <div className="flex items-center gap-1.5 font-normal ms-8 mb-5">
            <FaToggleOn />
            AutoSave filter
          </div>
          <div className="flex items-center gap-1.5 font-normal ms-8 mb-5">
            <FaToggleOn />
            Usage analytics
          </div>
          <div className="flex items-center gap-1.5 font-normal ms-8 mb-5">
            <FaToggleOff />
            Show get Embed code for Dashboard
          </div>
          <div className="flex items-center gap-1.5 font-normal ms-8 mb-5">
            <FaToggleOn />
            Lock Resource Synchronization
          </div>
          <div className="flex items-center gap-1.5 font-normal ms-8 mb-5">
            <FaToggleOn />
            Mark dashboard as public
          </div>
          <div className="flex items-center gap-1.5 font-normal ms-8 mb-5">
            <FaToggleOn />
            Default views
          </div>

          <div className="flex items-center gap-1.5 font-normal ms-8 mb-5">
            <FaToggleOn />
            Show name
          </div>

          <div className="flex items-center gap-1.5 font-normal ms-8 mb-5">
            <FaToggleOn />
            Show E-mail addressS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
