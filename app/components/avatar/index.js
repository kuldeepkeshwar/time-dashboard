import React from 'react';
import './styles.scss';

const Avatar = props => (
  <div key={props.image} className="avatar">
    <img src={props.image} alt="" />
  </div>
);
Avatar.propTypes = {
  image: React.PropTypes.string.isRequired,
};
export default Avatar;
