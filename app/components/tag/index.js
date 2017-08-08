import React from 'react';

import './styles.scss';

const Tag = props => (<label key={props.text} htmlFor className="label">{props.text}</label>);
Tag.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default Tag;
