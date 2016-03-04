import React, {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Navigator,
  Component,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as MenuActions from '../actions/menu-actions';
import Button from './Button';

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    height: 48,
    padding: 5
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

class Header extends Component {
  constructor(props){
    super(props);
    console.log('Headering...');
    console.log(props);
    this.onPress = this.onPress.bind(this);
  }
  onPress(){

    this.props.actionToggle();
  }
  render(){
      return (
        <View style={styles.header}>
          <Button onPress={this.onPress}>
            <Image source={{ uri: 'http://i.imgur.com/vKRaKDX.png', width: 32, height: 32, }} />
          </Button>
          <Text style={styles.title}>BigSonata</Text>
        </View>
      );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {toggled: state.menu.toggled};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(MenuActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
