import React, {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Navigator,
  Component,
} from 'react-native';

export default class Button extends Component {
  constructor(props){
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}
        style={this.props.style}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}
