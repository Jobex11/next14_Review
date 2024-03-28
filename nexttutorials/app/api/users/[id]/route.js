import { NextResponse } from "next/server";
import { users } from "@/app/util/db";
import fs from "fs";

//6. DELETE  USERS FROM THE DATABASE
export async function DELETE(req, res) {
  const { id } = await req.params;

  // find the index of the user to delete in the array
  const userIndex = users.findIndex((user) => user.id == id);
  if (userIndex == -1) {
    return NextResponse.json({ result: "User not found" }, { status: 404 });
  }
  //Remove the user from the users arra
  users.splice(userIndex, 1);
  //Extract just the user array to a json string
  const updatedUsersArray = users;
  //convert updats users array to json string
  const updatedData = JSON.stringify(updatedUsersArray, null, 2);
  fs.writeFileSync(
    "./app/util.dbjs",
    `export const users = ${updatedData}`,
    "utf-8"
  );
  return NextResponse.json({ success: "User successfull DELETED" });
}
