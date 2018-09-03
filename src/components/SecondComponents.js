import React from 'react'
import {Platform, Image, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity,Animated} from 'react-native';
import PropTypes from 'prop-types';

class SecondComponents extends React.Component{
	static propTypes = {
		thing: PropTypes.string.isRequired,
    setFunc: PropTypes.func.isRequired,
    return: PropTypes.func.isRequired,
	}
  state = {
    page: "one",
  }
	displayJsxMessage() {
        if (this.props.thing === 'd') {
            return(
              <View style={styles.container}>
      <TouchableOpacity onPress={this.props.return}>
      <Image
      style={styles.canvas}
        source={require('../cdiLogo.png')}
        />
      </TouchableOpacity>
        </View>
              ) 
        } 
        if (this.props.thing === 'a') {
            return(
            	<View style={styles.container}>
              <TouchableOpacity onPress={() => this.props.setFunc("one")}>
					<Text style={styles.header1}>Innovate</Text>
          </TouchableOpacity>
				</View>
            	) 
        } 
        if (this.props.thing === 'b') {
            return(
            	<View style={styles.container}>
              <TouchableOpacity onPress={() => this.props.setFunc("two")}>
              <Text style={styles.header1}>Create</Text>
              </TouchableOpacity>
				</View>
            )
        }
        if (this.props.thing === 'c'){
          return(
              <View style={styles.container}>
              <TouchableOpacity onPress={() => this.props.setFunc("three")}>
              <Text style={styles.header1}>Succeed</Text>
              </TouchableOpacity>
        </View>
            )
        }
        if (this.props.thing === 'e'){
          return(
              <View style={styles.container2}>
              <Text style={styles.header1}>     </Text>
              <Text style={styles.header1}>     </Text>
              <Text style={styles.header1}>     </Text>
              <Text style={styles.header1}>     </Text>
              <Text style={styles.header1}>     </Text>
              <Text style={styles.header1}>     </Text>
              <Text style={styles.paragraph}>Created by Peter Oliveira Soens</Text>
        </View>
            )
        }
    }
	render() {
		return(
			<View >
				{this.displayJsxMessage()}
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
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header1: {
    fontSize: 60,
    color: '#EA9C10',
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 20,
  },
  paragraph: {
    fontSize: 15,
    color: 'white',
  },
      canvas: {
    height: 50,
    width: 375,
  },
});

export default SecondComponents