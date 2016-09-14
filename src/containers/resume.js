import React from 'react';
import { connect } from 'react-redux';

import Container from '../components/container';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

function AboutPage() {
  return (
    <Container size={4} center>
      <h2 className="caps">Resume</h2>
      <p>
        Here's my resume
      </p>
    </Container>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutPage);
