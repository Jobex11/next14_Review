"use client";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const page = () => {
  return (
    <div>
      <h1>Google Fonts</h1>
      <h2 className={roboto.className}>Hello this is robot font</h2>
    </div>
  );
};

export default page;
