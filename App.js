import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  AppRegistry,
} from 'react-native';
import { Constants } from 'expo';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dollarAmount: '', percentageAmount: '', partyAmount: '' };
  }

  render() {
    var percent = this.state.percentageAmount / 100;
    var calculate =
      '$' +
      Number(
        ((this.state.dollarAmount * percent) / this.state.partyAmount).toFixed(2)
      );
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <Text style={styles.title}>Tip The Waiter</Text>
          <View style={styles.infoInput}>
            <TextInput
              style={{
                height: 30,
                width: 30,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              onChangeText={percentageAmount => this.setState({ percentageAmount })}
              value={this.state.percentageAmount}
              keyboardType="numeric"
            />
            <Text style={{ fontSize: 20 }}>% of $</Text>
            <TextInput
              style={{
                height: 30,
                width: 60,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              onChangeText={dollarAmount => this.setState({ dollarAmount })}
              value={this.state.dollarAmount}
              keyboardType="numeric"
            />
            <Text style={{ fontSize: 20 }}> With </Text>
            <TextInput
              style={{
                height: 30,
                width: 30,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              onChangeText={partyAmount => this.setState({ partyAmount })}
              value={this.state.partyAmount}
              keyboardType="numeric"
              defaultValue='1'
            />
            <Text style={{ fontSize: 20 }}> Many People</Text>
          </View>
          <Text style={styles.answer}>{calculate}</Text>
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answer: {
    fontSize: 75,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
