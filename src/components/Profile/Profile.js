import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({
  avatar,
  name,
  tag,
  location,
  statsFollowers,
  statsLikes,
  statsViews,
}) => (
  <div className={styles.profile}>
    <div className="Description">
      <img
        width="200px"
        height="200px"
        src={avatar}
        alt={name}
        className={styles.avatar}
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.statsItem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{statsFollowers}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{statsViews}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{statsLikes}</span>
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
