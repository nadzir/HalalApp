import React from 'react'
import { List, ListItem } from 'react-native-elements'
import { FlatList } from 'react-native'
import { COLOURS } from '../../../config/constants'

export const ItemList = ({items}) => {
  const actualListHeight = (items.length * 75) + 50
  const listHeight = (actualListHeight > 500 || actualListHeight <= 0) ? 100 : actualListHeight
  return (
    <List
      containerStyle={{
        height: listHeight,
        width: '100%',
        backgroundColor: COLOURS.BRAND,
        marginTop: 0,
        borderTopWidth: 5,
        borderTopColor: COLOURS.BRAND_COMPLIMENT,
        borderBottomColor: COLOURS.BRAND_COMPLIMENT

      }}
    >
      <FlatList
        data={items || []}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={`${item.halal.halal_status || ''}`}
            chevronColor={COLOURS.WHITE}
            titleStyle={{color: COLOURS.WHITE}}
            subtitleStyle={{color: COLOURS.WHITE}}
            containerStyle={{borderBottomColor: COLOURS.WHITE}}
          />
        )}
      />
    </List>
  )
}
