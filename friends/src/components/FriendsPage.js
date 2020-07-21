import React, {useState, useEffect} from "react";
import { FriendsContext } from "../contexts/FriendsContext";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendsList from "./FriendsList";

const FriendsPage = (props) => {
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
    getFriends();
  }, []);

  return (
    <FriendsContext.Provider value={{ friends }}>
      <div className='container'>
        <h2>Friends Page Here</h2>
        <div className='FriendsForm'>Add a Friend</div>
        <FriendsList />
      </div>
    </FriendsContext.Provider>
  );
};
export default FriendsPage;
