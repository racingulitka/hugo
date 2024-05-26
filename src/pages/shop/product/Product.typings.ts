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
}
