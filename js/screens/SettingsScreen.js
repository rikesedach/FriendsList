import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

function SettingsHeader(props) {
  return <Text style={styles.section}>{props.title}</Text>
}

function SettingsItem(props) {
  return <Text style={styles.item}>{props.info}</Text>
}

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.containter}>
        <SectionList
          sections={[
            {
              title: 'Version',
              data: [{ key: '1', info: '1.0' }]
            },
            {
              title: 'Impressum',
              data: [{ key: '3', info: 'Beispiel GmbH' }, { key: '4', info: 'copyright 2019' }]
            } // Abschnitt 2
          ]}
          renderItem={({ item }) => <SettingsItem info={item.info} />}
          renderSectionHeader={({ section }) => <SettingsHeader title={section.title} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
  section: {
    backgroundColor: 'whitesmoke',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
  item: {
    color: 'dimgrey',
    fontSize: 18,
    padding: 5
  }
})
