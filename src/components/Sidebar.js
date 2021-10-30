import React from "react";
import Twitterl from "../images/twitter.svg";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  Bookmarks,
  LıstsIcon,
  MoreIcon,
  ProfileIcon,
} from "../icons/icons";
import UserBox from "./UserBox";

const Sidebar = () => {
  return (
    <div className="w-72 h-screen sticky top-0  flex flex-col justify-between px-2">
      <div>
        <div className="hover:bg-gray-lightest flex justify-center items-center w-12 h-12 rounded-full transform transition-colors duration-200 cursor-pointer mt-1 mb-4">
          <img className="w-9 h-9" src={Twitterl}></img>
        </div>
        <nav className="mb-4">
          <ul className="inline-block ">
            <li className="flex items-center cursor-pointer active:text-primary-base     hover:bg-primary-light hover:text-primary-base rounded-full pl-3 py-3">
              <HomeIcon />{" "}
              <span className="ml-4 font-bold">
                <a href="Home">Home</a>
              </span>
            </li>
            <li className="flex items-center cursor-pointer hover:bg-primary-light hover:text-primary-base rounded-full pl-3 py-3">
              <ExploreIcon />{" "}
              <span className="ml-4 font-bold">
                <a href="Explpre">Explore</a>
              </span>{" "}
            </li>
            <li className="flex items-center cursor-pointer hover:bg-primary-light hover:text-primary-base rounded-full pl-3  py-3">
              <NotificationsIcon />{" "}
              <span className="ml-4 font-bold">
                <a href="Notifications">Notifications</a>{" "}
              </span>
            </li>
            <li className="flex items-center cursor-pointer hover:bg-primary-light hover:text-primary-base rounded-full pl-3 py-3">
              <MessagesIcon />{" "}
              <span className="ml-4 font-bold">
                <a href="Messages">Messages</a>
              </span>
            </li>
            <li className="flex items-center cursor-pointer hover:bg-primary-light hover:text-primary-base rounded-full pl-3 py-3 ">
              <Bookmarks />{" "}
              <span className="ml-4 font-bold">
                <a href="Bookmarks">Bookmarks</a>
              </span>
            </li>
            <li className="flex items-center cursor-pointer hover:bg-primary-light hover:text-primary-base rounded-full pl-3 py-3">
              <LıstsIcon />{" "}
              <span className="ml-4 font-bold">
                <a href="Lists">Lists</a>
              </span>
            </li>
            <li className="flex items-center cursor-pointer hover:bg-primary-light hover:text-primary-base rounded-full pl-3 py-3">
              <ProfileIcon />
              <span className="ml-4 font-bold">
                <a href="Profile">Profile</a>
              </span>
            </li>
            <li className="flex items-center cursor-pointer hover:bg-primary-light hover:text-primary-base rounded-full pl-3 py-3">
              <MoreIcon />{" "}
              <span className="ml-4 font-bold">
                <a href="More">More</a>
              </span>
            </li>
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark text-white rounded-full px-8 py-3 w-11/12 shadow-lg transform transition-colors duration-200">
          Tweet
        </button>
      </div>
      <div>
        {" "}
        <UserBox />{" "}
      </div>
    </div>
  );
};

export default Sidebar;
