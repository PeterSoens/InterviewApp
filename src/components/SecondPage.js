import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, TouchableOpacity,Animated} from 'react-native';
import PropTypes from 'prop-types';

const header1 = "Build Your Future"
const AsubHeader1 = "Be More than Competant"
const Aparagraph1 = "Adapt your business for sucess.  Each Idea is different and requires the right toolkit."
const AsubHeader2 = "Avoid Blind Spots"
const Aparagraph2 = "Recognize your strengths and weaknesses. Utilize your strengths and develop strategies to manage your weak points."
const AsubHeader3 = "Change Your Perspective"
const Aparagraph4 = "Who is buying your product? What is it being used for? Your viewpoint is different than your customers.  It filters what you see and gives you a distorted view of how things really are."

class SecondPage extends React.Component{
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
                <Text style={styles.header}>{header1}</Text>
            <Text style={styles.subHeader}>{AsubHeader1}</Text>
            <Text style={styles.paragraph}>{Aparagraph1}</Text>
            <Text style={styles.paragraph}>     </Text>
            <Text style={styles.subHeader}>{AsubHeader2}</Text>
            <Text style={styles.paragraph}>{Aparagraph2}</Text>
            <Text style={styles.paragraph}>     </Text>
            <Text style={styles.subHeader}>{AsubHeader3}</Text>
            <Text style={styles.paragraph}>{Aparagraph4}</Text>
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
    backgroundColor: '#181818',
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
  miniParagraph: {
    fontSize: 25,
    color: '#D2D2DF',
  },
      canvas: {
    height: 50,
    width: 375,
  },
});

export default SecondPage