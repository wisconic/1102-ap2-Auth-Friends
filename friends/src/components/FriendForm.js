import React, { useContext, useState } from "react";
import { FriendsContext } from "../contexts/FriendsContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = () => {
  const blankForm = { name: "", age: "", email: "" };
  const [newFriend, setNewFriend] = useState(blankForm);
  const { setFriends } = useContext(FriendsContext);

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };
  const addFriend = (e) => {
    e.preventDefault();
    console.log("addFriend -> newFriend: ", newFriend);
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((res) => {
        console.log("addFriend -> res.data", res.data);
        setFriends(res.data);
        setNewFriend(blankForm);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  console.log("render FriendForm with", newFriend);

  return (
    <div className='FriendForm'>
      <h1>Add Friend</h1>
      <form onSubmit={addFriend} className='addFriend-form'>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Age'
          name='age'
          value={newFriend.age}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={newFriend.email}
          onChange={handleChange}
        />

        <button type='submit'>Add</button>
      </form>
    </div>
  );
};
export default FriendForm;
