import React from "react";
import { Button } from "native-base";

type ButtonProps = {
  title: string;
  onPress: any;
};

export default function (props: ButtonProps) {
  const { title, onPress } = props;
  return (
    <Button onPress={onPress} size="sm" colorScheme="green">
      {title.toUpperCase()}
    </Button>
  );
}
