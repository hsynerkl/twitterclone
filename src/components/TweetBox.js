import React,{useState} from "react";
import {
  PhotoIcon,
  GıfIcon,
  ListIcon,
  SmileIcon,
  ScheduleIcon
} from "../icons/icons";

function TweetBox() {
  return (
    <div className="flex-1 flex flex-col mt-2 px-2">
      <textarea
        className="outline:none focus:outline-none w-full text-xl placeholder-gray-dark overflow-hidden resize-none bg-transparent"
        placeholder="what's happening?"
      />
      <div className="flex items-center justify-between ">
        <div className=" flex w-11 h-11 rounded-full hover:bg-gray-lightest justify-center items-center cursor-pointer">
          <PhotoIcon />
        </div>
        <div className=" flex w-11 h-11 rounded-full hover:bg-gray-lightest justify-center items-center cursor-pointer">
          <GıfIcon />
        </div>
        <div className=" flex w-11 h-11 rounded-full hover:bg-gray-lightest justify-center items-center cursor-pointer">
          <ListIcon />
        </div>
        <div className=" flex w-11 h-11 rounded-full hover:bg-gray-lightest justify-center items-center cursor-pointer">
          <SmileIcon />
        </div>
        <div className=" flex w-11 h-11 rounded-full hover:bg-gray-lightest justify-center items-center cursor-pointer">
          <ScheduleIcon />
        </div>
        <button className="bg-primary-base text-white rounded-full px-4 py-2 font-m" >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default TweetBox;
