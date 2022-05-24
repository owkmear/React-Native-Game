import React from "react";
import { Button, Stack, Icon, Center, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const ButtonComponent = () => {
  return (
    <Stack
      direction={{
        base: "column",
        md: "row",
      }}
      space={4}
    >
      <Button
        leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}
      >
        Upload
      </Button>
      <Button
        variant="subtle"
        endIcon={<Icon as={Ionicons} name="cloud-download-outline" size="sm" />}
      >
        Download
      </Button>
    </Stack>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <ButtonComponent />
      </Center>
    </NativeBaseProvider>
  );
};
