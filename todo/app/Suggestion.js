"use client";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";

import * as React from "react";
import Stack from "@mui/material/Stack";
import { createSvgIcon } from "@mui/material/utils";

const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com/
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

const Suggestion = () => {
  return (
    <div className="parent w-full flex flex-col justify-center">
      <div>
        <div>
          <h1 className="capitalize my-5 font-bold text-gray-500 text-2xl">
            suggestions
          </h1>
        </div>
        <div className="flex flex-row w-inherit justify-end">
          <h5 className="my-3 font-bold text-gray-500 capitalize text-base w-full">
            Recently added
          </h5>
          <div className=" p-3 flex flex-col justify-center align-center">
            <MoreHorizIcon style={{ color: "#808080" }} />
          </div>
        </div>
      </div>

      {/* suggestions call from the blockchain*/}
      <div className="flex-grow flex flex-row w-full border-gray-400 border-b-2 ">
        <div className=" p-3 flex flex-col justify-center align-center">
          <FiberManualRecordOutlinedIcon
            style={{ fontSize: 30, color: "gray" }}
          />
        </div>
        <div className=" py-3   w-3/4">
          <h3 className="text-black-500 text-lg ">Fix lamp</h3>
          <span className="text-gray-500 text-">House</span>
        </div>
        <div className=" p-3 flex flex-col justify-center align-center">
          <Stack direction="row" spacing={3}>
            <PlusIcon color="primary" />
          </Stack>
        </div>
      </div>
      <div className="flex-grow flex flex-row w-full border-gray-400 border-b-2 ">
        <div className=" p-3 flex flex-col justify-center align-center">
          <FiberManualRecordOutlinedIcon
            style={{ fontSize: 30, color: "gray" }}
          />
        </div>
        <div className=" py-3   w-3/4">
          <h3 className="text-black-500 text-lg ">Shred Documents</h3>
          <span className="text-gray-500 text-">House 1 of 2</span>
        </div>
        <div className=" p-3 flex flex-col justify-center align-center">
          <Stack direction="row" spacing={3}>
            <PlusIcon color="primary" />
          </Stack>
        </div>
      </div>
      <div className="flex-grow flex flex-row w-full border-gray-400 border-b-2 ">
        <div className=" p-3 flex flex-col justify-center align-center">
          <FiberManualRecordOutlinedIcon
            style={{ fontSize: 30, color: "gray" }}
          />
        </div>
        <div className=" py-3   w-3/4">
          <h3 className="text-black-500 text-lg ">Fix lamp</h3>
          <span className="text-gray-500 text-">House</span>
        </div>

        <div className=" p-3 flex flex-col justify-center align-center">
          <Stack direction="row" spacing={3}>
            <PlusIcon color="primary" />
          </Stack>
        </div>
      </div>
      {/* suggestions ended */}
    </div>
  );
};

export default Suggestion;
