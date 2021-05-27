import React from "react";
import PropTypes from "prop-types";

const Profile = ({
  avatar,
  name,
  tag,
  location,
  statsFollowers,
  statsLikes,
  statsViews,
}) => (
  <div class="profile">
    <div class="description">
      <img src={avatar} alt={name} class="avatar" />
      <p class="name">{name}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{statsFollowers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{statsViews}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{statsLikes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  statsFollowers: PropTypes.number.isRequired,
  statsLikes: PropTypes.number.isRequired,
  statsViews: PropTypes.number.isRequired,
};

export default Profile;
