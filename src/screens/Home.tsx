import React from 'react';
import {VStack, Text, HStack, FlatList} from 'native-base';

import {HomeHeader} from '@components/HomeHeader';
import {Group} from '@components/Group';

export function Home() {
  const [groupSelected, setGroupSelected] = React.useState('ombro');
  const [groups, setGroups] = React.useState([
    'Costas',
    'Bíceps',
    'Tríceps',
    'ombro',
  ]);

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{px: 8}}
        my={10}
        maxH={10}
      />
    </VStack>
  );
}
