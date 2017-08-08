import React from 'react';
import './styles.scss';

const Panel = props =>
  (<div className="panel">
    {props.children}
  </div>);
Panel.propTypes = {
  children: React.PropTypes.objectOf(React.PropTypes.object).isRequired,
};
Panel.Head = props =>
  (<div className="panel-head">
    {props.children}
  </div>);
Panel.Head.propTypes = {
  children: React.PropTypes.objectOf(React.PropTypes.object).isRequired,
};
Panel.Body = props =>
  (<div className="panel-body">
    {props.children}
  </div>);
Panel.Body.propTypes = {
  children: React.PropTypes.objectOf(React.PropTypes.object).isRequired,
};
Panel.Footer = props =>
  (<div className="panel-foot">
    {props.children}
  </div>);
Panel.Footer.propTypes = {
  children: React.PropTypes.objectOf(React.PropTypes.object).isRequired,
};
export default Panel;
