import React from "react";
import { TextArea, Box, Center, NativeBaseProvider } from "native-base";

const Example = () => {
  return (
    <Box alignItems="center" w="100%">
      <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="300" />
    </Box>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
