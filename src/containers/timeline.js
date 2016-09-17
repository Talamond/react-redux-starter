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

const sampleTimelineItems = [
  {
    type: 'love',
    date: '2014-01-13',
    content: typicalTimeline('assets/fun.png',
    'love love love love love love love love love love love love love love love love love love love love love love '),
  },
  {
    type: 'food',
    date: '2014-01-17',
    content: typicalTimeline('assets/fun.png',
    'food food food food food food food food food food food food food food food food food food food food food food food '),
  },
  {
    type: 'travel',
    date: '2014-01-21',
    content: typicalTimeline('assets/fun.png',
    'travel travel travel travel travel travel travel travel travel travel travel travel travel travel travel travel '),
  },
  {
    type: 'time',
    date: '2014-02-13',
    content: typicalTimeline('assets/fun.png',
    'time time time time time time time time time time time time time time time time time time time time time time time '),
  },
  {
    type: 'sport',
    date: '2014-02-13',
    content: typicalTimeline('assets/fun.png',
    'fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun fun '),
  },
  {
    type: 'love',
    date: '2014-02-23',
    content: typicalTimeline('assets/fun.png'),
  },
  {
    type: 'love',
    date: '2014-03-13',
    content: typicalTimeline('assets/fun.png'),
  },
  {
    type: 'love',
    date: '2014-03-23',
    content: typicalTimeline('assets/fun.png'),
  },
  {
    type: 'love',
    date: '2014-03-24',
    content: typicalTimeline('assets/fun.png'),
  },
  {
    type: 'love',
    date: '2015-01-13',
    content: typicalTimeline('assets/fun.png'),
  },
  {
    type: 'love',
    date: '2015-01-13',
    content: typicalTimeline('assets/fun.png'),
  },
  {
    type: 'love',
    date: '2015-01-13',
    content: typicalTimeline('assets/fun.png',
    'last last last last last last last last last last last last last last last last last last last last last last '),
  },
];

function TimelinePage() {
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
