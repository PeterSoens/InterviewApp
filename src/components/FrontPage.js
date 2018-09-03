import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, TouchableOpacity,Animated, StatusBar} from 'react-native';
import SecondComponents from './SecondComponents'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'

const TransitionNav = {}

class FrontPage extends React.Component{
  state = {
    currentPage: "home",
  }
  setPage = (word) => {
    this.setState({
      currentPage: word,
    })
  }
  goHome = () => {
    this.setState({
      currentPage: "home"
    })
  }
  render() {
    StatusBar.setHidden(true);
    if(this.state.currentPage === "home"){
      return (

      <View style={styles.container}>
              <FlatList
          data={[{key: 'd'}, {key: 'b'}, {key: 'a'}, {key: 'c'}, {key: 'e'}]}
          renderItem={({item}) => <SecondComponents return={this.goHome} thing={item.key} setFunc={this.setPage}/>}
        />
      </View>
      );
    }
    if(this.state.currentPage === "one"){
      return(
        <View style={styles.container}>
            <FlatList
            data={[{key: 'd'}, {key: 'a'}]}
            renderItem={({item}) => <FirstPage thing={item.key} returnFunc={this.goHome}/>}
          />
        </View>
      )
    }
    if(this.state.currentPage === "two"){
      return(
        <View style={styles.container}>
            <FlatList
            data={[{key: 'd'}, {key: 'a'}]}
            renderItem={({item}) => <SecondPage thing={item.key} returnFunc={this.goHome}/>}
          />
        </View>
      )
    }
    if(this.state.currentPage === "three"){
      return(
        <View style={styles.container}>
            <FlatList
            data={[{key: 'd'}, {key: 'a'}]}
            renderItem={({item}) => <ThirdPage thing={item.key} returnFunc={this.goHome}/>}
          />
        </View>
      )
    }
    return(
          <View style={styles.container}>
      <TouchableOpacity onPress={this.goHome}>
      <Image
      style={styles.canvas}
        source={require('../cdiLogo.png')}
        />
      </TouchableOpacity>
      <Text>You Shouldn't be here</Text>
      </View>
    )


  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    canvas: {
    height: 50,
    width: 375,
  },
});

export default FrontPage