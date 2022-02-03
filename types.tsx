/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  Tests: undefined;
  Settings: undefined;
  Result: undefined;
  NotFound: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type TestsProps = NativeStackScreenProps<RootStackParamList, "Tests">;
export type ResultProps = NativeStackScreenProps<RootStackParamList, "Result">;
export type SettingsProps = NativeStackScreenProps<
  RootStackParamList,
  "Settings"
>;
export type NotFoundProps = NativeStackScreenProps<
  RootStackParamList,
  "NotFound"
>;
