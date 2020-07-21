import React, { useEffect, useState, useContext } from "react";
import { FriendsContext } from "../contexts/FriendsContext";

const FriendsList = () => {
  const { friends } = useContext(FriendsContext);
  return (
    <div className='container friends-list'>
      <h1>Friends</h1>
      {friends.length !== 0 ? (
        <div>
          {friends.map((f) => (
            <div key={f.id} className='container'>
              <h3>Name: {f.name}</h3>
              <p>Email: {f.email}</p>
              <p>Age: {f.age}</p>
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
