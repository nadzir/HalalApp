import React from 'react'
import { List, ListItem } from 'react-native-elements'
import { FlatList } from 'react-native'
import { VIEW_HEIGHT, VIEW_WIDTH } from '../../../config/constants/size'

export const ItemList = ({items}) => {
  return (
    <List
      containerStyle={{
        opacity: 0.9,
        height: VIEW_HEIGHT * 0.3,
        top: VIEW_HEIGHT - (VIEW_HEIGHT * 0.3),
        width: VIEW_WIDTH,
        alignSelf: 'stretch',
        position: 'absolute'
      }}
    >
      <FlatList
        data={items || []}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={`${item.halal}`}
          />
        )}
      />
    </List>
  )
}
