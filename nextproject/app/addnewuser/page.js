"use client";
import { useState } from "react";
const AddNewUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addNewUserHandler = async () => {
    let response = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response.ok) {
      alert("User successfully created");
    } else {
      alert("An Error Occured while creating the new user");
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Please Enter your Name"
        className="ml-2 mr-4 mt-4"
      />
      <br />
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="Please Enter your Age"
        className="ml-2 mr-4 mt-4"
      />
      <br />
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Please Enter your Email"
        className="ml-2 mr-4 mt-4"
      />
      <br />
      <button
        className="bg-black text-white border p-2"
        onClick={addNewUserHandler}
      >
        Add New User
      </button>
    </div>
  );
};

export default AddNewUser;
