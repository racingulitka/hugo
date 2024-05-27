import { StaticImageData } from "next/image";

export interface Image{
    id:number,
    image:StaticImageData,
    isMain:boolean,
}

export interface Characteristics{
    id:number,
    title:string,
    value:string,
}

export interface Advantages{
  id:number,
  image:StaticImageData,
  text:string,
}

export interface Gallery{
  id:number,
  image:StaticImageData,
}

export interface ProductPage {
  productId: number,
  productName:string,
  categoryTitle: string,
  categoryLink:string,
  subcategoryTitle:string,
  subcategoryLink:string,
  slug:string,
  images:Image[],
  videoCover:StaticImageData,
  video:string,
  rate:number,
  reviews:number,
  questions:number,
  characteristics:Characteristics[],
  price:number,
  actualPrice:number,
  isFavourite:boolean,
  numberOfAddingToFavourites:number,
  engineSound:string,
  description:string,
  advantages:Advantages[],
  gallery:Gallery[],
}
