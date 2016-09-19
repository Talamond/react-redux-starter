import React from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import { loginUser, logoutUser } from '../actions/session';

import { Link } from 'react-router';
import Content from '../components/content';
import Logo from '../components/logo';
import Navigator from '../components/navigator';
import NavigatorItem from '../components/navigator-item';

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginUser()),
    logout: () => dispatch(logoutUser()),
  };
}

function App({ children }) {
  return (
    <div>
      <Navigator testid="navigator" style={{maxHeight: '5vh'}}>
        <NavigatorItem style={{width: '100%'}}>
          <div className="bold center" style={{width: '100%'}}>Sarah and Jon's Timeline Together!</div>
        </NavigatorItem>
      </Navigator>
      <Content isVisible>
        { children }
      </Content>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
  session: React.PropTypes.object,
  login: React.PropTypes.func,
  logout: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
