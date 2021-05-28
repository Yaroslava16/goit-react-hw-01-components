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
  <div className="Profile">
    <div className="Description">
      <img
        width="200px"
        height="200px"
        src={avatar}
        alt={name}
        className="Avatar"
      />
      <p className="Name">{name}</p>
      <p className="Tag">@{tag}</p>
      <p className="Location">{location}</p>
    </div>

    <ul className="Stats">
      <li className="Stats-item">
        <span className="Label">Followers</span>
        <span className="Quantity">{statsFollowers}</span>
      </li>
      <li className="Stats-item">
        <span className="Label">Views</span>
        <span className="Quantity">{statsViews}</span>
      </li>
      <li className="Stats-item">
        <span className="Label">Likes</span>
        <span className="Quantity">{statsLikes}</span>
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
