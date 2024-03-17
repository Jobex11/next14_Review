"use client";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
const DeleteUser = () => {
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      alert("Please provide user ID to delete the usser.");
      return;
    }
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("User successfully deleted");
        setId("");
      } else {
        const data = await response.json();
        alert(data.result || "Something went wrong while deleting the user");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="user ID"
          type="text"
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <Button className="mt-2" type="submit">
          Delete User
        </Button>
      </form>
    </div>
  );
};

export default DeleteUser;
