import React from "react";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span class="status">{(isOnline = true ? "online" : "offline")}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name"></p>
    </li>
  );
};

export default FriendListItem;
