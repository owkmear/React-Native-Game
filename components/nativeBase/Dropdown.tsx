import React from "react";
import { Select, Box, CheckIcon, Center } from "native-base";

export default function () {
  let [service, setService] = React.useState("");
  return (
    <Center>
      <Box w="3/4" maxW="300">
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Выберите грейд"
          placeholder="Выберите грейд"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="Junior" value="junior" />
          <Select.Item label="Middle" value="middle" />
          <Select.Item label="Senior" value="senior" />
        </Select>
      </Box>
    </Center>
  );
}
