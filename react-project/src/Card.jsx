import React from "react";
import { useState } from "react";

export default function Card(props) {
  const [followerCount, SetFollowerCount] = useState(0);
  const [totalLikes, setTotalLikes] = useState(0);

  function updateFollowers() {
    SetFollowerCount(followerCount + 1);
  }

  function updateLikes() {
    setTotalLikes(totalLikes + 1);
  }

  return (
    <div className="main">
      <div className="card">
        <img src={props.img} alt={props.user} />
        <h1>{props.user}</h1>
        <p>{props.post}</p>
        <p>Follower Count: {followerCount}</p>
        <p>Total Likes: {totalLikes}</p>
        <div className="buttons">
          <button className="Button" onClick={updateFollowers}>
            Follow
          </button>
          <button className="Button" onClick={updateLikes}>
            Like
          </button>
        </div>
      </div>
    </div>
  );
}
