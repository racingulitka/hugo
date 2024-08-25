import { StaticImageData } from "next/image";

export interface Props {
  isMobile: boolean,
  params: {
    background: StaticImageData | string,
    heroImage: StaticImageData,
    isOdd: boolean,
    stepNumber: string,
    title: string,
    subtitle?:string,
    description: string,
    anotherText: string,
  },
}
