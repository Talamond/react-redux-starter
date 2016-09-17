import React from 'react';
import { connect } from 'react-redux';
import Timeline from '../components/timeline';

import Container from '../components/container';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

/* eslint-disable */
const typicalTimeline = (imgUrl, text) => {
  return (<div>
    <div>
      <img src={imgUrl} height="300" width="300"/>
    </div>
    <div>{text}</div>
  </div>);
};

// TODO move this list and sorting into reducer
const sampleTimelineItems = [
  {
    type: 'love',
    date: new Date(2012, 1, 1),
    content: typicalTimeline('assets/fun.png',
    'love love love love love love love love love love love love love love love love love love love love love love '),
  },
  {
    type: 'food',
    date: new Date(2012, 1, 1),
    content: typicalTimeline('assets/fun.png',
    'food food food food food food food food food food food food food food food food food food food food food food food '),
  },
  {
    type: 'travel',
    date: new Date(2012, 1, 1),
    content: typicalTimeline('assets/fun.png',
    'travel travel travel travel travel travel travel travel travel travel travel travel travel travel travel travel '),
  },
  {
    type: 'time',
    date: new Date(2012, 1, 1),
    content: typicalTimeline('assets/fun.png',
    'time time time time time time time time time time time time time time time time time time time time time time time '),
  },
  {
    type: 'sport',
    date: new Date(2012, 3, 1),
    content: typicalTimeline('assets/fun.png',
    'fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun '),
  },
  {
    type: 'love',
    date: new Date(2012, 3, 1),
    content: typicalTimeline('assets/fun.png',
      'love love love love love love love love love love love love love love love love love love love love love love '),
  },
  {
    type: 'food',
    date: new Date(2012, 1, 1),
    content: typicalTimeline('assets/fun.png',
      'food food food food food food food food food food food food food food food food food food food food food food food '),
  },
  {
    type: 'travel',
    date: new Date(2013, 1, 1),
    content: typicalTimeline('assets/fun.png',
      'travel travel travel travel travel travel travel travel travel travel travel travel travel travel travel travel '),
  },
  {
    type: 'time',
    date: new Date(2013, 1, 1),
    content: typicalTimeline('assets/fun.png',
      'time time time time time time time time time time time time time time time time time time time time time time time '),
  },
  {
    type: 'sport',
    date: new Date(2013, 1, 1),
    content: typicalTimeline('assets/fun.png',
      'fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun '),
  },
  {
    type: 'love',
    date: new Date(2012, 1, 1),
    content: typicalTimeline('assets/fun.png',
      'love love love love love love love love love love love love love love love love love love love love love love '),
  },
  {
    type: 'food',
    date: new Date(2012, 1, 1),
    content: typicalTimeline('assets/fun.png',
      'food food food food food food food food food food food food food food food food food food food food food food food '),
  },
  {
    type: 'travel',
    date: new Date(2012, 1, 1),
    content: typicalTimeline('assets/fun.png',
      'travel travel travel travel travel travel travel travel travel travel travel travel travel travel travel travel '),
  },
  {
    type: 'time',
    date: new Date(2012, 1, 1),
    content: typicalTimeline('assets/fun.png',
      'time time time time time time time time time time time time time time time time time time time time time time time '),
  },
  {
    type: 'sport',
    date: new Date(2012, 1, 1),
    content: typicalTimeline('assets/fun.png',
      'fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun '),
  },
  {
    type: 'love',
    date: new Date(2016, 1, 1),
    content: typicalTimeline('assets/fun.png',
    'last last last last last last last last last last last last last last last last last last last last last last '),
  },
];

function TimelinePage() {
  sampleTimelineItems.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    } else if (a.date > b.date) {
      return 1;
    }
    return 0;
  });
  return (
    <Container size={4} center>
      <Timeline items={sampleTimelineItems} selectedIndex={0}/>
    </Container>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimelinePage);
