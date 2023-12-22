import React from 'react';
import {HistoryCard} from '@components/HistoryCard';
import {ScreenHeader} from '@components/ScreenHeader';
import {VStack, Text, Heading, SectionList} from 'native-base';

export function History() {
  const [exercises, setExercises] = React.useState([
    {
      title: '26.08.22',
      data: ['Puxada frontal', 'Remada Unilateral'],
    },
    {
      title: '27.08.22',
      data: ['Puxada frontal'],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({item}) => <HistoryCard />}
        renderSectionHeader={({section}) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
      />
    </VStack>
  );
}
