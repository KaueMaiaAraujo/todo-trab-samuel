import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, Text } from 'react-native';
import { ButtonDrawer } from '../ButtonDrawer';
import { styles } from './styles';
import MyList from '../DrawerContent';

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerPress = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseModal = () => {
    setIsDrawerOpen(false);
  };

  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../../../assets/logo.png')} />

      <ButtonDrawer onPress={handleDrawerPress} />
      
      <Modal visible={isDrawerOpen} transparent animationType="slide" onRequestClose={handleCloseModal}>
        <TouchableOpacity
          onPress={handleCloseModal}
          style={styles.overlay}
          activeOpacity={1}
        >
          <View style={styles.drawerContainer}>
            <TouchableOpacity activeOpacity={1}>
              <View style={styles.drawerContent}>
                <MyList />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
