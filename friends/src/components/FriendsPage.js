import React, { useState, useEffect } from "react";
import { FriendsContext } from "../contexts/FriendsContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsList from "./FriendsList";
import FriendForm from "./FriendForm";

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);

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

  useEffect(() => {
    console.log('FriendsPage mount --> getFriends()')
    getFriends();
  }, []);

  return (
    <FriendsContext.Provider
      value={{ friends, setFriends }}
    >
      <div className='container'>
        <h2>Friends Page (protected)</h2>
        <FriendForm />
        <FriendsList />
      </div>
    </FriendsContext.Provider>
  );
};
export default FriendsPage;
