import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, TouchableOpacity,Animated} from 'react-native';
import PropTypes from 'prop-types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const header1 = 'Changes'
const subheader1 = "What Changes Do You Need?"
const subheader2 = "Informative"
const paragraph1 = "Get better at being yourself.  Make your cars more fuel efficient or use a cheaper material.  You know what effects it will have on your business and can do this without much effort."
const subheader3 = "Transformative"
const paragraph3 = "Question your business model.  What are your assumptions? How are they holding you back?  Use what you already have to make a greater impact.  Tap into other markets and expand your business."


class FirstPage extends React.Component{
	static propTypes = {
		returnFunc: PropTypes.func.isRequired,
    thing: PropTypes.string.isRequired,
	}
	render() {
            if (this.props.thing === 'd') {
            return(
              <View style={styles.container}>
      <TouchableOpacity onPress={this.props.returnFunc}>
      <Image
      style={styles.canvas}
        source={require('../cdiLogo.png')}
        />
      </TouchableOpacity>
        </View>
              ) 
        } 
		return(
			<View>
      		<View style={styles.container}>
      <Text style={styles.header}>{subheader1}</Text>
      <Text style={styles.subHeader}>{subheader2}</Text>
      <Text style={styles.paragraph}>{paragraph1}</Text>
      <Text style={styles.paragraph}>     </Text>
      <Text style={styles.subHeader}>{subheader3}</Text>
      <Text style={styles.paragraph}>{paragraph3}</Text>
			</View>
			</View>
			)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    color: '#EA9C10',
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 30,
    color: '#D2D2DF',

  },
  paragraph: {
    fontSize: 15,
    color: '#D2D2DF',
  },
      canvas: {
    height: 50,
    width: 375,
  },
});

export default FirstPage;