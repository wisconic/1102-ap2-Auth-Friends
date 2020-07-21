import React, { useState, useContext } from "react";
import { FriendsContext } from "../contexts/FriendsContext";

const FriendForm = () => {
  const [newFriendInput, setNewFriendInput] = useState({
    name: "",
    age: "",
    email: "",
  });
  const { newFriend, addFriend } = useContext(FriendsContext);

  const handleChange = (e) => {
    setNewFriendInput({
      ...newFriendInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={addFriend}>
      <h1>Add User</h1>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={newFriendInput.name}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Age'
        name='age'
        value={newFriendInput.age}
        onChange={handleChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={newFriendInput.email}
        onChange={handleChange}
      />
      <button type='submit'>Add</button>
    </form>
  );
};
export default FriendForm;
