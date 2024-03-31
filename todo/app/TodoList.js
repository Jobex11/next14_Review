"use client";
import WebIcon from "@mui/icons-material/Web";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import React from "react";

const TodoList = () => {
  return (
    <div className="h-full grid grid-rows-[auto_1fr_auto] p-6">
      <div className="">
        <div className="flex justify-between py-2">
          <div className=" w-1/2 text-2xl text-gray-50 capitalize font-bold">
            my day
          </div>
          <div className="w-1/3 flex justify-around">
            <div className="cursor-pointer rounded-sm bg-gray-300 text-gray-500">
              <WebIcon />
            </div>
            <div className="cursor-pointer rounded-sm bg-gray-300">
              <LightbulbIcon />
            </div>
            <div className="cursor-pointer">
              <MoreHorizIcon />
            </div>
          </div>
        </div>
        <div className="p-0 text-base text-gray-50">Wednesday, March 27</div>
      </div>
      <div className="h-full overflow-auto mt-2">
        {/* Task items  */}
        <div className="p-1 bg-gray-100 flex rounded-sm cursor-pointer mb-2">
          <div className="flex-grow flex flex-row w-full border-gray-400">
            <div className=" p-2 flex flex-col justify-center align-center">
              <FiberManualRecordOutlinedIcon
                style={{ fontSize: 30, color: "gray" }}
              />
            </div>
            <div className=" py-2   w-3/4">
              <h3 className="text-gray-500 font-bold text-base ">
                Clean gutters
              </h3>
              <span className="text-gray-500 text-">House</span>
            </div>
            <div className=" p-2 flex flex-col justify-center align-center">
              {/*  star icons here */}
              <StarBorderIcon style={{ color: "gray", fontSize: 30 }} />
            </div>
          </div>
        </div>
        <div className="p-1 bg-gray-100 flex rounded-sm cursor-pointer">
          <div className="flex-grow flex flex-row w-full border-gray-400">
            <div className=" p-2 flex flex-col justify-center align-center">
              <FiberManualRecordOutlinedIcon
                style={{ fontSize: 30, color: "gray" }}
              />
            </div>
            <div className=" py-2   w-3/4">
              <h3 className="text-gray-500 font-bold text-base ">
                Finalize windows todo
              </h3>
              <span className="text-gray-500 text-">work</span>
            </div>
            <div className=" p-2 flex flex-col justify-center align-center">
              {/*  star icons here */}
              <StarBorderIcon style={{ color: "gray", fontSize: 30 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 bg-gray-100 flex rounded-sm cursor-pointer mt-4">
        <div className=" p-2">
          <FiberManualRecordOutlinedIcon
            style={{ fontSize: 30, color: "gray" }}
          />
        </div>
        <div className="text-gray-600 flex justify-center items-center font-bold">
          Add a tasks
        </div>
      </div>
    </div>
  );
};

export default TodoList;
