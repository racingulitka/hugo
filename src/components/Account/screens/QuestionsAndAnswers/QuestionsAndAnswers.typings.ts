import { StaticImageData } from "next/image";

export interface QuestionType{
    id:number,
    image:StaticImageData,
    question:string,
    name:string,
    title:string,
    likes:number,
    answer:string,
    yesCount:number,
    noCount:number,
    date:Date,
}