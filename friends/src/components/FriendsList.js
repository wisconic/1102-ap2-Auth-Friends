import React, { useContext } from "react";
import { FriendsContext } from "../contexts/FriendsContext";

const FriendsList = () => {
  const { friends } = useContext(FriendsContext);
  console.log("render FriendsList with: ", friends);
  return (
    <div className='container'>
      <h1>Friends</h1>
      {friends.length !== 0 ? (
        <div className='friends-list'>
          {friends.map((friend) => (
            <div key={friend.id} className='friend container'>
              <h3>Name: {friend.name}</h3>
              <p>Email: {friend.email}</p>
              <p>Age: {friend.age}</p>
            </div>
          ))}
        </div>
      ) : (
        <h3>loading...</h3>
      )}
    </div>
  );
};

export default FriendsList;
