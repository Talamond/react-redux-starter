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
      <h2 className="caps">Demo</h2>
      <p>
        Here's some stuff ive done
      </p>
    </Container>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutPage);
