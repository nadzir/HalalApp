import React from 'react';
import { View } from 'react-native';
import { Tile, Button, Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export const HomeView = () => (
  <View style={{ flex: 1, flexDirection: 'column' }}>
    <Tile
      imageSrc={require('../../../static/img/main.jpg')}
      featured
    />
    <Card
      title="What is it?"
    >
      <Button
        backgroundColor="#03A9F4"
        buttonStyle={{
          borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,
        }}
        title="Expelliarmus"
        onPress={Actions.camera}
      />
    </Card>
  </View>
);

export default HomeView;
