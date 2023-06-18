import React from 'react';
import { TouchableOpacity, FlatList, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

const data = [
  { text: 'ENTRADA', icon: 'home' },
  { text: 'EM BREVE', icon: 'time' },
  { text: 'CONCLUÍDOS', icon: 'checkmark-done' },
  { text: 'FILTROS', icon: 'filter' },
];

const ListItem = ({ item }) => (
  <TouchableOpacity style={[styles.Container, styles.itemText]}>
    <Ionicons name={item.icon} size={34} color="white" style={{ marginRight: 10 }} />
    <Text style={styles.itemText}>{item.text}</Text>
  </TouchableOpacity>
);

const MyList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default MyList;
