import "styled-components";

import Theme from "./defaultTheme.ts";
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
