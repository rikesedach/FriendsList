import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import FriendListItem from '../components/FriendsListItem';

export default class HomeScreen extends Component {

  static navigationOptions = { header: null };

  state = { data: [], isLoading: true };

  _refresh = () => {
    this.setState({ isLoading: true });
    this._fetchData();
  }

  _fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=20');
      const responseJSON = await response.json();
      this.setState({ data: responseJSON.results, isLoading: false });
    } catch (error) {
      alert('Beim Laden der Daten ist ein Fehler aufgetreten.');
      this.setState({ isLoading: false });
    }
    // Simulation 3 sec warten
    // await new Promise(_ => setTimeout(_, 3000));
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.containter}>
          <ActivityIndicator size="large" color="darkorange" />
        </View>
      )
    };
    return (
      <View style={styles.containter}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item.email}
          renderItem={({ item }) => (
            <FriendListItem friend={item} onPress={() =>
              this.props.navigation.navigate('FriendScreen', { friend: item })
            }
            />
          )}
          onRefresh={this._refresh}
          refreshing={this.state.isLoading}
          ItemSeparatorComponent={() => <View style={styles.ItemSeparator} />}
          ListEmptyComponent={() => <Text style={styles.listEmpty}>Keine Daten geladen</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    justifyContent: 'center'
  },
  ItemSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightsalmon',
    marginVertical: 5
  },
  listEmpty: {
    paddingTop: 100,
    fontSize: 32,
    textAlign: 'center'
  }
})