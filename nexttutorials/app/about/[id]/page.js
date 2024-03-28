"use client";
import { redirect } from "next/navigation";
const ID = ({ params }) => {
  if (params.id == 4) {
    console.log("client components have double console");
    redirect("/login");
  }
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default ID;
