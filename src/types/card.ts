import { Image } from "./image";

export type CardProps = {
  title?: string;
  description?: string;
  lessPadding?: boolean;
  btn?: boolean;
  btnClassname?: string;
  btnDescription?: string;
} & Image;
