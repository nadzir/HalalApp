import React from 'react'
import { List, ListItem } from 'react-native-elements'
import { FlatList } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const ItemList = ({items}) => {
  const actualListHeight = (items.length * 60)
  const listHeight = (actualListHeight > 500 || actualListHeight <= 50) ? 50 : actualListHeight
  return (
    <List
      containerStyle={{
        height: listHeight,
        width: '100%',
        backgroundColor: COLOURS.BRAND_COMPLIMENT,
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
            subtitle={`${item.halal.source || ''}`}
            hideChevron
            titleStyle={{color: COLOURS.WHITE}}
            subtitleStyle={{color: COLOURS.GREY}}
            containerStyle={{borderBottomColor: COLOURS.WHITE}}
          />
        )}
      />
    </List>
  )
}
