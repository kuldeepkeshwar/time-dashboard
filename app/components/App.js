import React from 'react';
import ChartWidget from './chart-widget';
import PercentageWidget from './percentage-widget';
import Header from './header';

const dropdown = [
      { key: 'Monthly', value: 'Monthly', active: true },
      { key: 'Daily', value: 'Daily', active: false },
];
const dotOptions = [
      { key: 'edit', value: 'Edit' }, { key: 'delete', value: 'Delete' },
];
const appState = [
  {
    title: 'Keyboard & Mouse Activity',
    dropdown,
    dotOptions,
    users: [
      { image: 'http://lorempixel.com/user/50/50/', name: 'Raju Mazumder', percentage: 13 },
      { image: 'http://lorempixel.com/user/50/50/', name: 'Khurram Butt', percentage: 13 },
      { image: 'http://lorempixel.com/user/50/50/', name: 'Eslam Mahmoud', percentage: 16 },
      { image: 'http://lorempixel.com/user/50/50/', name: 'Evgeny Stashevsky', percentage: 19 },
      { image: 'http://lorempixel.com/user/50/50/', name: 'Nataliya Oleynyk', percentage: 25 },
    ],
    footer: {
      users: [
      { image: 'http://lorempixel.com/output/people-q-c-50-50-6.jpg' },
      { image: 'http://lorempixel.com/output/people-q-g-50-50-3.jpg' },
      { image: 'http://lorempixel.com/user/50/50/' },
      ],
      moreCount: 900,
      tags: [{ text: 'Lowest' }],
    },
  },
  {
    title: 'Highest percentage of Mobile Time Users',
    dropdown,
    dotOptions,
    users: [
      { name: 'Elle Javier - Quingco', duration: ((9 * 60) + 20), fill: '#5A68C6' },
      { name: 'Lester Douglas', duration: ((1 * 60) + 25), fill: '#FFD331' },
      { name: 'Dmitry Shytsko', duration: ((0 * 60) + 30), fill: '#F65161' },
    ],
    footer: {
      users: [
      { image: 'http://lorempixel.com/output/people-q-c-50-50-6.jpg' },
      { image: 'http://lorempixel.com/output/people-q-g-50-50-3.jpg' },
      ],
      tags: [{ text: 'Highest' }],
    },
  },
];

const App = () => {
  const percentageWidgetProps = appState[0];
  const chartWidgetProps = appState[1];
  return (
    <div>
      <Header />
      <section className="content">
        <div className="wrapper">
          <h2>Company Dashboard</h2>
          <div className="row">
            <div className="grid-4">
              <PercentageWidget {...percentageWidgetProps} />
            </div>
            <div className="grid-4">
              <ChartWidget {...chartWidgetProps} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
