import { useState, useEffect } from 'react';
import React from "react";
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { StatusBar } from 'react-native';
import ListItem from '../components/ListItem';

export default ({ navigation }) => {
    const userId = navigation.getParam('user_id');    
    const name = navigation.getParam('name');
    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
      <View style={styles.container}>
        {loading ? <Text>Loading...</Text> :   
        <FlatList
            style={styles.list}
            data={post.filter(post => post.userId === userId)}
            renderItem={({ item }) => <ListItem onPress={() => navigation.navigate("Details", {title: item.title, body: item.body, name: name})} title={item.title} />}
            keyExtractor={item => String(item.id)}
        />
        }
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
    }
  });
  