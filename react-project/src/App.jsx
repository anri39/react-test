import { useState } from "react";
import "./App.css";
import Card from "./card";

function App() {
  const posts = [
    {
      img: "https://preview.redd.it/3fc3wd5xwf171.png?auto=webp&s=efea2e1ae32067ea07fc547585f64a95171c7902",
      user: "Anri",
      post: "Hello Hello Hello Hello",
    },
    {
      img: "https://i.pinimg.com/736x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg",
      user: "Saba",
      post: "Hello Hello Hello Hello2",
    },
    {
      img: "https://wallpapers-clan.com/wp-content/uploads/2022/11/cute-frog-pfp-2.jpg",
      user: "Vako",
      post: "Hello Hello Hello Hello2",
    },
  ];

  return (
    <div className="maindiv">
      <div className="Main">
        {posts.map((post, i) => (
          <Card key={i} img={post.img} user={post.user} post={post.post} />
        ))}
      </div>
    </div>
  );
}

export default App;
