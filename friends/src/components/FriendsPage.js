import React, { useState, useEffect } from "react";
import { FriendsContext } from "../contexts/FriendsContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsList from "./FriendsList";

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({ name: "", age: "", email: "" });

  const getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        // console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log("error fetching friends list", err.response);
      });
  };
  const addFriend = (e) => {
    e.preventDefault();
    console.log(newFriend);
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
        setNewFriend({ name: "", age: "", email: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    getFriends();
  }, []);

  return (
    <FriendsContext.Provider
      value={{ friends, newFriend, setNewFriend, addFriend }}
    >
      <div className='container'>
        <h2>Friends Page Here</h2>
        <div className='FriendsForm'>
          <form onSubmit={addFriend}>
            <h1>Add User</h1>
            <div className='inputs'>
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
            </div>
          </form>
        </div>
        <FriendsList />
      </div>
    </FriendsContext.Provider>
  );
};
export default FriendsPage;
