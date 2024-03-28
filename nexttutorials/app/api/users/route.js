import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

//5 UPDATE USER

export async function PUT(req, res) {
  let { id, name, email, password } = await req.json();
  //find the user in the users array
  const userIndex = users.findIndex((user) => user.id == id);
  if (userIndex == -1) {
    return NextResponse.json({ result: "User not found" }, { status: 404 });
  }
  if (name) {
    users[userIndex].name = name;
  }
  if (email) {
    users[userIndex].email = email;
  }
  if (password) {
    users[userIndex].password = password;
  }
  //Extract just the user array form the updated data
  const updatedUsersArray = users;
  // Convert the updated users array to a Json string
  const updatedData = JSON.stringify(updatedUsersArray, null, 2);
  // write hte updated users aray to a JSON string
  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData}`,
    "utf-8"
  );
  return NextResponse.json({ success: "User successfully updated" });
}
