import React, {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Navigator,
  Component,
} from 'react-native';

import {
  Router,
  Route,
  Schema,
  Animations,
  Actions,
  TabBar
} from 'react-native-router-flux';

const SideMenu = require('react-native-side-menu');

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../actions/menu-actions';

import AboutPage from './AboutPage'
import ContactsPage from './ContactsPage'
import LaunchPage from './LaunchPage'
import Menu from './Menu'
import Header from './Header'

import * as Registry from '../Registry'

export default class Pager extends Component {
  constructor(props){
    super(props);
    this.getMenu = this.getMenu.bind(this);
    this.updateMenuState = this.updateMenuState.bind(this);
    this.onMenuItemSelected = this.onMenuItemSelected.bind(this);
    this.state = {
      isOpen: props.toggled,
      selectedItem: 'Launch',
    };
    console.log('Pager constructor');
    console.log(props);
  }

  updateMenuState(isOpen) {
    this.props.actionSetToggle(isOpen);
  }

  onMenuItemSelected(item){
    this.props.actionSetToggle(false);
  }

  getPageContent(){
    return (
      <Router name="root" header={Header} hideNavBar={false}>
        <Schema name="default"/>

        <Route name={Registry.ROUTE_ABOUT} component={AboutPage} title="About" hideNavBar={true}/>
        <Route name={Registry.ROUTE_CONTACTS} component={ContactsPage} title="Contact" hideNavBar={true}/>
        <Route name={Registry.ROUTE_LAUNCH} initial={true} component={LaunchPage} wrapRouter={true} title="Launch" hideNavBar={true} />
      </Router>
    );
  }

  getMenu(){
    return (<Menu onItemSelected={this.onMenuItemSelected} />);
  }

  render() {
    console.log('Page (re-)rendering...');
     return (
      <SideMenu
        menu={this.getMenu()}
        isOpen={this.props.toggled}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        {this.getPageContent()}
      </SideMenu>
    );
  }
};


const mapStateToProps = (state, ownProps) => {
  console.log('Pager mapStateToProps');
  console.log(state);
  return {
    toggled: state.menu.toggled,
    route: state.menu.route,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(MenuActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pager);
