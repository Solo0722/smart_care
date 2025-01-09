import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    dark: boolean;
    colors: {
      primary: string;
      text: string;
      background: string;
      border: string;
    };
    fonts: {
      regular: FontStyle;
      medium: FontStyle;
      bold: FontStyle;
      heavy: FontStyle;
    };
  }
}
