import React from 'react'
import { List, ListItem } from 'react-native-elements'
import { FlatList } from 'react-native'
import { COLOURS } from '../../../config/constants'

const itemHeight = 60
const maxItemHeight = 500

export const HalalItemList = ({items}) => {
  const actualListHeight = (items.length * itemHeight)
  const listHeight = (actualListHeight > maxItemHeight || actualListHeight < itemHeight)
    ? itemHeight : actualListHeight
  return (
    <List
      containerStyle={{
        height: listHeight,
        borderWidth: 0
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
            titleStyle={{color: COLOURS.BRAND}}
            subtitleStyle={{color: COLOURS.BRAND}}
            containerStyle={{borderBottomColor: COLOURS.BRAND}}
          />
        )}
      />
    </List>
  )
}
