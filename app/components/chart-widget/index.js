import React from 'react';
import { RadialBarChart, RadialBar } from 'recharts';
import Panel from './../panel';
import Tag from './../tag';
import DropDown from './../dropdown';
import SideMenu from './../side-menu';
import Avatar from './../avatar';
import './styles.scss';

const defaultChartProps = {
  startAngle: 90,
  endAngle: -270,
  width: 350,
  height: 195,
  innerRadius: 55,
  outerRadius: 95,
  barSize: 10,
  barGap: 2,
};
const RadialChart = (props) => {
  const options = Object.assign({}, defaultChartProps, props);
  return (
    <RadialBarChart {...options}>
      <RadialBar background dataKey={options.dataKey} cornerRadius={5} />
    </RadialBarChart>
  );
};
RadialChart.propTypes = {
  dataKey: React.PropTypes.string.isRequired,
};
const timeToString = (time) => {
  let tpl;
  const h = Math.floor(time / 60);
  const min = time - (h * 60);
  if (h) {
    tpl = `${h}h ${min}min`;
  } else {
    tpl = `${min}min`;
  }
  return tpl;
};
const ChartWidget = (props) => {
  const chartProps = {
    data: props.users.map(u => u).reverse(),
    dataKey: 'duration',
  };
  return (<Panel>
    <Panel.Head>
      <span className="panel-title">{props.title}</span>
      <DropDown active={0} items={props.dropdown} />
      <SideMenu items={props.dotOptions} />
    </Panel.Head>
    <Panel.Body>
      <div className="row">
        <div className="grid-4">
          {
            props.users.map((user) => {
              return (
                <div className="users-detail" key={user.name}>
                  <div className="round-label" style={{ background: user.fill }} />
                  <div className="inline-block">
                    <div className="users-name" >{user.name}</div>
                    <div className="users-time">{timeToString(user.duration)}</div>
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="grid-8">
          <RadialChart {...chartProps} />
        </div>
      </div>
    </Panel.Body>
    <Panel.Footer>
      <div className="user-list">
        {props.footer.users.map((user) => {
          return <Avatar {...user} />;
        })}
      </div>
      {props.footer.tags.map(tag => <Tag key={tag.text} {...tag} />)}
    </Panel.Footer>
  </Panel>
  );
};
ChartWidget.propTypes = {
  title: React.PropTypes.string.isRequired,
  dropdown: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  footer: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  dotOptions: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
export default ChartWidget;
