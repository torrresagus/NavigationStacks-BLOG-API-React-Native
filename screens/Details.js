import { useState, useEffect } from 'react';
import React from "react";
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { StatusBar } from 'react-native';
import ListItem from '../components/ListItem';

export default ({ navigation }) => {
    const body = navigation.getParam('body');
    const title = navigation.getParam('title');
    const name = navigation.getParam('name');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>Author: {name}</Text>
        <Text style={styles.body}>{body}</Text>
        
        <StatusBar style="auto" />
      </View>
    );
  }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    body: {
        fontSize: 16,
        margin: 10,
    }
  });
  