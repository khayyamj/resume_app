import React, { Component } from 'react';
import { Button, Image, NavigatorIOS, StyleSheet, Text, TextInput, View } from 'react-native';
import TextField from './TextFields';

class MyApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      applicantName: '',
      jobId: '',
      userName: '',
      password: '',
      role: '',
      roleChosen: false
    };
  }

  updateRole(role) {
    this.setState({ role, roleChosen: true });
  }

  renderWelcome() {
    return (
      <View>
        <Text style={styles.textTitle}>
          Are you an
        </Text>
        <Button
          style={styles.buttonText}
          containerStyle={styles.buttonContainer}
          disabledContainerStyle={styles.buttonDisabled}
          onPress={() => this.updateRole('applicant')}
          title="Applicant"
          accessibilityLabel="I am an applicant"
        />
        <Button
          style={styles.buttonText}
          containerStyle={styles.buttonContainer}
          disabledContainerStyle={styles.buttonDisabled}
          onPress={() => this.updateRole('employer')}
          title="Employer"
          accessibilityLabel="I am an employer"
        />
      </View>
    )
  }

  renderChoices() {
    // const navigate = this.props.navigation;
    if (this.state.role === 'applicant') {
      return (
        <View>
          <TextField
          styles={styles.textInputs}
          text={this.state.userName}
          placeholder={'Username'}
          update={(userName) => this.setState({userName})}
          />
          <TextField
            styles={styles.textInputs}
            text={this.state.password}
            placeholder={'Password'}
            update={(password) => this.setState({password})}
          />
          <Button
            style={styles.buttonText}
            containerStyle={styles.buttonContainer}
            disabledContainerStyle={styles.buttonDisabled}
            onPress={() => this.onSubmit()}
            title='Submit'
            accessibilityLabel='Submit Information'
          />
        </View>
      )
    } else {
      return (
        <View>
          <TextField
          styles={styles.textInputs}
          text={this.state.applicantName}
          placeholder={"Applicant's Name"}
          update={(applicantName) => this.setState({applicantName})}
          />
          <TextField
            styles={styles.textInputs}
            text={this.state.jobId}
            placeholder={'Job Id'}
            update={(jobId) => this.setState({jobId})}
          />
          <Button
            style={styles.buttonText}
            containerStyle={styles.buttonContainer}
            disabledContainerStyle={styles.buttonDisabled}
            onPress={() => this.onSubmit()}
            title='Submit'
            accessibilityLabel='Submit Information'
          />
        </View>
      )
    }
  }

  onSubmit() {
    console.log('submit function ->props: ', this.props);
    // const { navigate } = this.props.navigation;
    // navigate('Profile');
    this.props.navigation.navigate('Profile');
  }

  render() {
    console.log('role chosen: ', this.state.roleChosen);
    const { container, imageStyle, textTitle, textInputs } = styles;
    return (
      <View style={container}>
        <Image source={require('../assets/MyResume.png')} style={imageStyle} />
        <Text style={textTitle}>Welcome</Text>
        {this.state.roleChosen ? this.renderChoices() : this.renderWelcome()}
      </View>
    );
  }

  componentWillUnmount() {
    this.setState({ roleChosen: false });
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageStyle: {
    width: 350,
    height: 350,
    padding: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 25,
    padding: 20,
    textAlign: 'center',
  },
  textInputs: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  buttonText: {fontSize: 20, color: 'aqua'},
  buttonContainer: {padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'},
  buttonDisabled: {backgroundColor: 'grey'},
});

export default MyApp;