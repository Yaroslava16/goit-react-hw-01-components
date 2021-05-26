import React from "react";
import Profile from "./components/Profile";
import user from "./user.json";

const App = () => {
  return (
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      statsFollowers={user.stats.followers}
      statsViews={user.stats.views}
      statsLikes={user.stats.likes}
    />
  );
};

export default App;
