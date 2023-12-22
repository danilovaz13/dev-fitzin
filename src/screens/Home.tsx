import React from 'react';
import {VStack, Text, HStack, FlatList, Heading} from 'native-base';

import {HomeHeader} from '@components/HomeHeader';
import {Group} from '@components/Group';
import {ExerciseCard} from '@components/ExerciseCard';

export function Home() {
  const [groupSelected, setGroupSelected] = React.useState('Costas');
  const [groups, setGroups] = React.useState([
    'Costas',
    'Bíceps',
    'Tríceps',
    'ombro',
  ]);

  const [exercises, setExercises] = React.useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terra',
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
            isActive={groupSelected.toUpperCase() === item.toUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{px: 8}}
        my={10}
        maxH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícioss
          </Heading>

          <Text color="gray.200" fontSize="sm">
            4
          </Text>
        </HStack>
        <FlatList
          data={exercises}
          keyExtractor={item => item}
          renderItem={({item}) => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{paddingBottom: 20}}
        />
      </VStack>
    </VStack>
  );
}
