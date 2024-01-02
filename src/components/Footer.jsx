import React from "react";

function Footer() {
  return (
    <div className="flex text-xs justify-between p-2 text-gray-600">
      <div>
        <p className="text-gray-400">5 items left</p>
      </div>
      <div className="flex gap-2 text-gray-400">
        <button className="text-blue-700 hover:text-gray-900">All</button>
        <button className=" hover:text-gray-900">Active</button>
        <button className=" hover:text-gray-900">Completed</button>
      </div>
      <div>
        <button className="text-gray-400 hover:text-gray-900">
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default Footer;
