import { StaticImageData } from "next/image";

export interface SliderArr{
    id:number,
    image:StaticImageData,
    title:string,
    link:string,
    description:string,
    numberOfComments:number,
}