import React from "react";
import { Select, Box, CheckIcon, Center } from "native-base";

type Option = {
  value: string;
  label: string;
};

type Options = Option[];

type DropdownProps = {
  selectedValue: string;
  onValueChange: any;
  options: Options;
};

export default function (props: DropdownProps) {
  const { selectedValue, onValueChange, options } = props;

  const optionsList: JSX.Element[] = options.map((option: Option) => (
    <Select.Item key={option.value} label={option.label} value={option.value} />
  ));

  return (
    <Center>
      <Box w="3/4" maxW="300">
        <Select
          selectedValue={selectedValue}
          minWidth="200"
          accessibilityLabel="Выберите грейд"
          placeholder="Выберите грейд"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={onValueChange}
        >
          {optionsList}
        </Select>
      </Box>
    </Center>
  );
}
