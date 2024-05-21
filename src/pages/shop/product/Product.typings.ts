import { StaticImageData } from "next/image";

export interface Image{
    id:number,
    image:StaticImageData,
    isMain:boolean,
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
}
