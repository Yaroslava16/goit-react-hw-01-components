import React from "react";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      {/* <Statistics stats={statisticalData} /> */}

      <FriendList friends={friends} />
    </div>
  );
};

export default App;
