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
const typicalTimeline = (imgUrl) => {
  return (<div>
    <div>
      <i className={imgUrl}/>
    </div>
    <div>Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text </div>
  </div>);
};

const sampleTimelineItems = [
  {
    type: 'personal',
    date: '2014-01-13',
    content: typicalTimeline('filler'),
  },
  {
    type: 'personal',
    date: '2014-01-17',
    content: typicalTimeline('filler'),
  },
  {
    type: 'personal',
    date: '2014-01-21',
    content: typicalTimeline('filler'),
  },
  {
    type: 'personal',
    date: '2014-02-13',
    content: typicalTimeline('filler'),
  },
  {
    type: 'personal',
    date: '2014-02-13',
    content: typicalTimeline('filler'),
  },
  {
    type: 'personal',
    date: '2014-02-23',
    content: typicalTimeline('filler'),
  },
  {
    type: 'personal',
    date: '2014-03-13',
    content: typicalTimeline('filler'),
  },
  {
    type: 'personal',
    date: '2014-03-23',
    content: typicalTimeline('filler'),
  },
  {
    type: 'personal',
    date: '2014-03-24',
    content: typicalTimeline('filler'),
  },
  {
    type: 'personal',
    date: '2015-01-13',
    content: typicalTimeline('filler'),
  },
  {
    type: 'personal',
    date: '2015-01-13',
    content: typicalTimeline('filler'),
  },
  {
    type: 'personal',
    date: '2015-01-13',
    content: typicalTimeline('filler'),
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
