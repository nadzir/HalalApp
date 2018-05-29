import React from 'react'
import { List, ListItem } from 'react-native-elements'
import { FlatList } from 'react-native'
import { COLOURS } from '../../../config/constants'

const itemHeight = 60
const maxItemHeight = 500

export const ItemList = ({items}) => {
  const actualListHeight = (items.length * itemHeight)
  const listHeight = (actualListHeight > maxItemHeight || actualListHeight < itemHeight)
    ? itemHeight : actualListHeight
  return (
    <List
      containerStyle={{
        height: listHeight,
        width: '100%',
        backgroundColor: COLOURS.BRAND,
        borderBottomWidth: 0,
        position: 'absolute',
        bottom: 100
      }}
    >
      <FlatList
        data={items}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <ListItem
            title={`${item.header} `}
            subtitle={`${item.subtitle}`}
            hideChevron
            titleStyle={{color: COLOURS.WHITE}}
            subtitleStyle={{color: COLOURS.WHITE}}
            containerStyle={{borderBottomColor: COLOURS.WHITE}}
          />
        )}
      />
    </List>
  )
}
