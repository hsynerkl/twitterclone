import React from "react";
import Twitterl from "../images/twitter.svg";
export default function UserBox() {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
      <img src={Twitterl} alt="profile" className="w-11 h-11 rounded-full"></img>
      <div className="flex flex-col">
        <span className="font-bold text-md text-black ">Hüseyin Erkal</span>
        <span className="text-sm text-gray-dark">@hsynerkal</span>
      </div>
      <div className="flex space-x-2">

      <div className="w-1 h-1 bg-gray-900 rounded-full" />
      <div className="w-1 h-1 bg-gray-900 rounded-full" />
      <div className="w-1 h-1 bg-gray-900 rounded-full" />

     
      </div>
    </div>
  );
}
