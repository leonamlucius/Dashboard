import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
const Users = () => {
  return (
    <div
      className="px-4 gap-3
    grid-cols-12"
    >
      <div className="p-4 col-span-4 rounded border border-stone-300">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-1.5 font-medium">
            <FaUser /> User
          </h3>
        </div>

        <div className="flex p-3 ">
          <img
            src="https://ui-avatars.com/api/?size=512"
            alt=""
            className="w-30 h-30 rounded-md"
          />

          <div className="ms-5 h-10 w-20 items-center md:w-20">
            <h3 className="md:flex items-center md:gap-1.5 font-medium b md:w-40 overflow-x-hidden text-ellipsis">
              <FaPerson />
              Name: John Dow
            </h3>
            <h3 className="md:flex items-center gap-1.5 font-medium md:w-40 overflow-x-hidden text-ellipsis">
              <MdEmail />
              Email: johndoe@gmail.com
            </h3>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-1.5 font-medium">
            <FaClock /> Previous Users{" "}
          </h3>
        </div>

        <div className="flex h-20 p-3">
          <img
            src="https://ui-avatars.com/api/?background=ADD8E6"
            alt=""
            className="w-10 h-10 rounded-md"
          />

          <div className="ms-5 overflow-x-hidden text-ellipsis">
            <h3 className="flex items-center gap-1.5 font-medium">
              <FaPerson />
              Name: John Dow
            </h3>
            <h3 className="flex items-center gap-1.5 font-medium">
              <MdEmail />
              Email: johndoe@gmail.com
            </h3>
          </div>
        </div>

        <div className="flex h-20 p-3">
          <img
            src="https://ui-avatars.com/api/?background=98FB98"
            alt=""
            className="w-10 h-10 rounded-md"
          />

          <div className="ms-5 overflow-x-hidden text-ellipsis">
            <h3 className="flex items-center gap-1.5 font-medium">
              <FaPerson />
              Name: John Dow
            </h3>
            <h3 className="flex items-center gap-1.5 font-medium">
              <MdEmail />
              Email: johndoe@gmail.com
            </h3>
          </div>
        </div>

        <div className="flex h-20 p-3">
          <img
            src="https://ui-avatars.com/api/?background=FFD1DC"
            alt=""
            className="w-10 h-10 rounded-md"
          />

          <div className="ms-5 overflow-x-hidden text-ellipsis">
            <h3 className="flex items-center gap-1.5 font-medium">
              <FaPerson />
              Name: John Dow
            </h3>
            <h3 className="flex items-center gap-1.5 font-medium">
              <MdEmail />
              Email: johndoe@gmail.com
            </h3>
          </div>
        </div>

        <div className="flex h-20 p-3">
          <img
            src="https://ui-avatars.com/api/?background=FFDAB9"
            alt=""
            className="w-10 h-10 rounded-md"
          />

          <div className="ms-5 overflow-x-hidden text-ellipsis">
            <h3 className="flex items-center gap-1.5 font-medium">
              <FaPerson />
              Name: John Dow
            </h3>
            <h3 className="flex items-center gap-1.5 font-medium">
              <MdEmail />
              Email: johndoe@gmail.com
            </h3>
          </div>
        </div>

        <div className="flex h-20 p-3">
          <img
            src="https://ui-avatars.com/api/?background=FFFACD"
            alt=""
            className="w-10 h-10 rounded-md"
          />

          <div className="ms-5 overflow-x-hidden text-ellipsis">
            <h3 className="flex items-center gap-1.5 font-medium">
              <FaPerson />
              Name: John Dow
            </h3>
            <h3 className="flex items-center gap-1.5 font-medium">
              <MdEmail />
              Email: johndoe@gmail.com
            </h3>
          </div>
        </div>

        <div className="flex h-20 p-3">
          <img
            src="https://ui-avatars.com/api/?background=C8A2C8"
            alt=""
            className="w-10 h-10 rounded-md"
          />

          <div className="ms-5 overflow-x-hidden text-ellipsis">
            <h3 className="flex items-center gap-1.5 font-medium">
              <FaPerson />
              Name: John Dow
            </h3>
            <h3 className="flex items-center gap-1.5 font-medium">
              <MdEmail />
              Email: johndoe@gmail.com
            </h3>
          </div>
        </div>

        <div className="flex h-20 p-3 b">
          <img
            src="https://ui-avatars.com/api/?background=E6C7E6"
            alt=""
            className="w-10 h-10 rounded-md"
          />

          <div className="ms-5 overflow-x-hidden text-ellipsis">
            <h3 className="flex items-center gap-1.5 font-medium">
              <FaPerson />
              Name: John Dow
            </h3>
            <h3 className="flex items-center gap-1.5 font-medium">
              <MdEmail />
              Email: johndoe@gmail.com
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
