import React from "react";
import { VStack, Center, Text } from "native-base";

export default function () {
  return (
    <VStack space={4} alignItems="center">
      <Center w="64" h="20" bg="indigo.300" rounded="md" shadow={3}>
        <Text bold>Блок 1</Text>
      </Center>
      <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3}>
        <Text bold>Блок 2</Text>
      </Center>
      <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3}>
        <Text bold>Блок 3</Text>
      </Center>
    </VStack>
  );
}
