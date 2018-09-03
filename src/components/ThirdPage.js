import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, TouchableOpacity,Animated} from 'react-native';
import PropTypes from 'prop-types';

const header1 = "Flashpoint Methods"

const AsubHeader1 = "Make Yourself Necessary"
const Aparagraph1 = "Don't chase demand, find where you are needed.  Dont believe that customers want your product.  They don't care until you make them."

const AsubHeader2 = "Locate Non-Indifference"
const Aparagraph2 = "Non-indifference happens when using your product is the only logical choice.  Authentic demand is essential for the survival of your business, and it stems from non-indifference.  "


const subHeader1 = "Eliminate Bias"
const paragraph1 = "Cognitive Bias and mindset will starve your business of the ideas needed to stay afloat.  You need to be aware of the assumptions you are making in order to minimize their effects."
const subHeader2 = "Immunity to Change"
const paragraph2 = "People dont want to change what they are doing.  Find out why they wont adapt and address the issues directly. "

class ThirdPage extends React.Component{
	static propTypes = {
		returnFunc: PropTypes.func.isRequired,
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
			<Text style={styles.header}>{header1}</Text>
      <Text style={styles.subHeader}>{AsubHeader1}</Text>
      <Text style={styles.paragraph}>{Aparagraph1}</Text>
      <Text style={styles.paragraph}>     </Text>
      <Text style={styles.subHeader}>{AsubHeader2}</Text>
      <Text style={styles.paragraph}>{Aparagraph2}</Text>
      <Text style={styles.paragraph}>     </Text>
      <Text style={styles.subHeader}>{subHeader1}</Text>
      <Text style={styles.paragraph}>{paragraph1}</Text>
      <Text style={styles.paragraph}>     </Text>
          <Text style={styles.subHeader}>{subHeader2}</Text>
          <Text style={styles.paragraph}>{paragraph2}</Text>
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

export default ThirdPage