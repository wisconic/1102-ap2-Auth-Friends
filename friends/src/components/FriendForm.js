import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { FriendsContext } from "../contexts/FriendsContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { setFriends } = useContext(FriendsContext);

  const addFriend = (values) => {
    console.log("addFriend -> newFriend: ", values);
    axiosWithAuth()
      .post("/api/friends", values)
      .then((res) => {
        console.log("addFriend -> res.data", res.data);
        setFriends(res.data);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='FriendForm'>
      <h1>Add Friend</h1>
      <form onSubmit={handleSubmit(addFriend)} className='addFriend-form'>
        <input
          type='text'
          placeholder='Name'
          name='name'
          ref={register({ required: true })}
        />
        <input
          type='text'
          placeholder='Age'
          name='age'
          ref={register({ required: true })}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          ref={register({ required: true })}
        />
        <input type='submit' />
      </form>
    </div>
  );
};
export default FriendForm;
