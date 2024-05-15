import { StaticImageData } from "next/image";

export interface CartInfo {
  id: number,
  image: StaticImageData,
  price: number,
  actualPrice: number,
  title: string,
  color: string,
  isChecked:boolean,
  isFavourite:boolean,
}
