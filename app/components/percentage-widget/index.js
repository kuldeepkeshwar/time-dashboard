import React from 'react';
import Panel from './../panel';
import Tag from './../tag';
import DropDown from './../dropdown';
import SideMenu from './../side-menu';
import './styles.scss';
import Avatar from './../avatar';

const PercentageWidget = props => (
  <Panel>
    <Panel.Head>
      <span className="panel-title">{props.title}</span>
      <DropDown active={0} items={props.dropdown} />
      <SideMenu items={props.dotOptions} />
    </Panel.Head>
    <Panel.Body>
      {props.users.map((user) => {
        return (
          <div key={user.name} className="flex-container activity-detail">
            <Avatar {...user} />
            <div className="name">{user.name}</div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${user.percentage}%` }} />
            </div>
            <div className="percentage"> {`${user.percentage}%`} </div>
          </div>
        );
      })}
    </Panel.Body>
    <Panel.Footer>
      <div className="user-list">
        {props.footer.users.map((user) => {
          return <Avatar {...user} />;
        })}
      </div>
      <a href="" className="link">+{props.footer.moreCount} more</a>
      {props.footer.tags.map(tag => <Tag key={tag.text} {...tag} />)}
    </Panel.Footer>
  </Panel>
);
PercentageWidget.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  footer: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  title: React.PropTypes.string.isRequired,
  dropdown: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  dotOptions: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
export default PercentageWidget;
