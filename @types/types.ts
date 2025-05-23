import { NavigationProp, NavigationState } from "@react-navigation/native";
import { Extrapolation, interpolate } from "react-native-reanimated";
import type { IComputedDirectionTypes } from "react-native-reanimated-carousel";

export type Navigation = Omit<
  NavigationProp<ReactNavigation.RootParamList>,
  "getState"
> & {
  getState(): NavigationState | undefined;
};

export interface TBaseConfig {
  size: number;
  vertical: boolean;
}

export interface ILayoutConfig {
  /**
   * control prev/next item offset.
   * @default 100
   */
  parallaxScrollingOffset?: number;
  /**
   * control prev/current/next item offset.
   * @default 0.8
   */
  parallaxScrollingScale?: number;
  /**
   * control prev/next item offset.
   * @default Math.pow(parallaxScrollingScale, 2)
   */
  parallaxAdjacentItemScale?: number;
}

export type TParallaxModeProps = IComputedDirectionTypes<{
  /**
   * Carousel Animated transitions.
   */
  mode?: "parallax";
  modeConfig?: ILayoutConfig;
}>;

export type HealthRegState = {
  currentStep: number;
  totalSteps: number;
  data: {
    gender: string;
    dateOfBirth: string;
    bloodType: string;
    allergies: string[];
    medicalConditions: string[];
    weight: number;
    medications: string[];
  };
};
