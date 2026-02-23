/// <reference types="react" />

declare module "*.jsx" {
  import { ComponentType } from "react";
  const comp: ComponentType<any>;
  export default comp;
}
