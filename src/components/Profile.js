import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({
  avatar,
  name,
  tag,
  location,
  statsFollowers,
  statsLikes,
  statsViews,
}) => (
  <div className="profile">
    <div className="description">
      <img
        width="200px"
        height="200px"
        src={avatar}
        alt={name}
        className="avatar"
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li className="stats-item">
        <span className="label">Followers</span>
        <span className="quantity">{statsFollowers}</span>
      </li>
      <li className="stats-item">
        <span className="label">Views</span>
        <span className="quantity">{statsViews}</span>
      </li>
      <li className="stats-item">
        <span className="label">Likes</span>
        <span className="quantity">{statsLikes}</span>
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
