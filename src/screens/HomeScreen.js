import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
       <Button
        title="Chat Login"
        onPress={() => navigation.navigate('Login')}
      />
      {/* <Button
        title="Chat"
        onPress={() => navigation.navigate('Chat')}
      /> */}
     
       
      {/* <Button
        title="Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
      
       <Button
        title="Color Screen"
        onPress={() => navigation.navigate('Color')}
      />
       <Button
        title="Square Screen Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Text Demo"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title="Box Screen "
        onPress={() => navigation.navigate('Box')}
      /> */}
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  }
});

export default HomeScreen;
