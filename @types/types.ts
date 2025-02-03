import { NavigationProp, NavigationState } from "@react-navigation/native";

export type Navigation = Omit<
  NavigationProp<ReactNavigation.RootParamList>,
  "getState"
> & {
  getState(): NavigationState | undefined;
};
