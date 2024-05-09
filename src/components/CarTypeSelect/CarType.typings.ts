import { StaticImageData } from "next/image";
import { CarType } from "./CarTypeSelect.config"
export interface CarTypeTypes{
    id:CarType,
    iconWhite:StaticImageData,
    iconBlack:StaticImageData,
    name:string,
}