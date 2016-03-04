const React = require('react-native');
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Component,
} = React;
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Registry from '../Registry'
import * as MenuActions from '../actions/menu-actions'

const window = Dimensions.get('window');
const uri = 'http://pickaface.net/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'black',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    color: 'white',
    fontWeight: '300',
    paddingTop: 5,
  },
});

class Menu extends Component {
  constructor(props){
    super(props);
    this.navigate= this.navigate.bind(this);
  }

  navigate(route){
    this.props.actionSetRoute(route);
    this.props.actionSetToggle(false);
  }

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri, }}/>
          <Text style={styles.name}>Big Sonata</Text>
        </View>

        <Text
          onPress={() => this.navigate(Registry.ROUTE_LAUNCH)}
          style={styles.item}>
          Launch
        </Text>

        <Text
          onPress={() => this.navigate(Registry.ROUTE_ABOUT)}
          style={styles.item}>
          About
        </Text>

        <Text
          onPress={() => this.navigate(Registry.ROUTE_CONTACTS)}
          style={styles.item}>
          Contacts
        </Text>
      </ScrollView>
    );
  }
};

Menu.propTypes = {
  onItemSelected: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(MenuActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
