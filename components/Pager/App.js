// Application to demo how to use routers with redux & side menu
import React, {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Navigator,
  Component,
} from 'react-native';

import store from './store';
import {Provider} from 'react-redux';
import Pager from './components/Pager';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Provider store={store}>
        <Pager />
      </Provider>
    );
  }
};
