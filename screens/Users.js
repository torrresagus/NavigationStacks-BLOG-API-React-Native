import { useState, useEffect } from 'react';
import React from "react";
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { StatusBar } from 'react-native';
import ListItem from '../components/ListItem';

export default ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
      <View style={styles.container}>
        {loading ? <Text>Loading...</Text> :   
        <FlatList
            style={styles.list}
            data={users}
            renderItem={({ item }) => <ListItem onPress={() => navigation.navigate("Posts", {user_id: item.id, name: item.name})} title={item.name} />}
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
  