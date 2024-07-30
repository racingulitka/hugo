import { useRouter } from "next/router";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "./Product.module.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Page } from "@/components/Header/Header.config";
import React, { useState } from 'react'
import defaultImage1 from './assets/defaultImage1.png'
import { ProductPage } from "./Product.typings";
import BreadCrumbs from "@/components/Product/BreadCrumbs/BreadCrumbs";
import ProductHero from "@/components/Product/ProductHero/ProductHero";
import sampleVideo from '../../../components/Product/ProductHero/assets/sampleVideo.mp4'
import sampleEngineSound from '../../../components/Product/ProductHero/assets/sampleEngineSound.mp3'
import Advantages from "@/components/Product/Advantages/Advantages";
import exampleImage1 from '../../../components/Product/Advantages/assets/exampleImage1.png'
import exampleImage2 from '../../../components/Product/Advantages/assets/exampleImage2.png'
import exampleImage3 from '../../../components/Product/Advantages/assets/exampleImage3.png'
import exampleImage4 from '../../../components/Product/Advantages/assets/exampleImage4.png'
import exampleImage5 from '../../../components/Product/Advantages/assets/exampleImage5.png'
import Gallery from "@/components/Product/Gallery/Gallery";
import galleryImage1 from '../../../components/Product/Gallery/assets/galleryImage1.png'
import galleryImage2 from '../../../components/Product/Gallery/assets/galleryImage2.png'
import galleryImage3 from '../../../components/Product/Gallery/assets/galleryImage3.png'
import galleryImage4 from '../../../components/Product/Gallery/assets/galleryImage4.png'
import galleryImage5 from '../../../components/Product/Gallery/assets/galleryImage5.png'
import galleryImage6 from '../../../components/Product/Gallery/assets/galleryImage6.png'
import galleryImage7 from '../../../components/Product/Gallery/assets/galleryImage7.png'
import galleryImage8 from '../../../components/Product/Gallery/assets/galleryImage8.png'
import QandA from "@/components/Product/QandA/QandA";
import { getIsSsrMobile } from "@/utils/isSSRMoblile";
import { GetServerSidePropsContext } from "next";
import MobileHeader from "@/components/MobileHeader/MobileHeader";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context)
    }
  }
}

export default function PageOfGood({
  isSsrMobile,
}: {
  isSsrMobile: boolean,
}) {

  const isMobile = isSsrMobile

  const [goodsArray, setGoodsArray] = useState<ProductPage[]>([
    {
      productId: 1,
      productName: 'Renault Duster',
      categoryTitle: 'Транспорт',
      categoryLink: '/shop/vehicles',
      subcategoryTitle: 'Кроссовер',
      subcategoryLink: '/',
      slug: 'renault-duster1',
      images: [
        {
          id: 1,
          image: defaultImage1,
          isMain: true,
        },
        {
          id: 2,
          image: defaultImage1,
          isMain: false,
        },
        {
          id: 3,
          image: defaultImage1,
          isMain: false,
        },
      ],
      videoCover: defaultImage1,
      video: sampleVideo,
      rate: 4.5,
      reviews: 35,
      questions: 3,
      characteristics: [
        {
          id: 1,
          title: 'YTF',
          value: 'info',
        },
        {
          id: 2,
          title: 'YTD',
          value: 'info',
        },
        {
          id: 3,
          title: 'Вершины',
          value: 'info',
        },
        {
          id: 4,
          title: 'Полигоны',
          value: 'info',
        },
        {
          id: 5,
          title: 'Вместительность',
          value: 'info',
        },
        {
          id: 6,
          title: 'Качество интерьера',
          value: 'info',
        },
        {
          id: 7,
          title: 'Тюнинг',
          value: 'info',
        },
        {
          id: 8,
          title: 'Тонировка стёкол',
          value: 'info',
        },
        {
          id: 9,
          title: 'Варианты покраски',
          value: 'info',
        },
        {
          id: 10,
          title: 'Звук двигателя',
          value: 'info',
        },
        {
          id: 11,
          title: 'Зеркала',
          value: 'info',
        },
        {
          id: 12,
          title: 'Руки на руле',
          value: 'info',
        },
        {
          id: 13,
          title: 'Панель приборов',
          value: 'info',
        },
        {
          id: 14,
          title: 'Стекла',
          value: 'info',
        },
        {
          id: 15,
          title: 'Транспортный номер',
          value: 'info',
        },
        {
          id: 16,
          title: 'Пример 1',
          value: 'info',
        },
        {
          id: 17,
          title: 'Пример 2',
          value: 'info',
        },
      ],
      price: 60000,
      actualPrice: 30000,
      isFavourite: false,
      numberOfAddingToFavourites: 9,
      engineSound: sampleEngineSound,
      description: `Задача организации, в особенности же новая модель организационной деятельности способствует повышению 
      актуальности направлений прогрессивного развития! Задача организации, в особенности же дальнейшее развитие 
      различных форм деятельности обеспечивает широкому кругу специалистов участие в формировании новых 
      предложений? Значимость этих проблем настолько очевидна, что начало повседневной работы.`,
      advantages: [
        {
          id: 1,
          image: exampleImage1,
          text: '683K POLYGONS - 425K VERTICES ',
        },
        {
          id: 2,
          image: exampleImage2,
          text: 'HIGH QUALITY INERIOR ',
        },
        {
          id: 3,
          image: exampleImage3,
          text: '4 MAIN DOORS AND TRUNK OPEN ',
        },
        {
          id: 4,
          image: exampleImage4,
          text: 'HIGH QUALITY HEADLIGHT AND TAILIGHT',
        },
        {
          id: 5,
          image: exampleImage5,
          text: 'SUPPORTS ALL HEADLIGHT AND TAILIGHT',
        },
      ],
      gallery: [
        {
          id: 1,
          image: galleryImage1,
        },
        {
          id: 2,
          image: galleryImage2,
        },
        {
          id: 3,
          image: galleryImage3,
        },
        {
          id: 4,
          image: galleryImage4,
        },
        {
          id: 5,
          image: galleryImage5,
        },
        {
          id: 6,
          image: galleryImage6,
        },
        {
          id: 7,
          image: galleryImage7,
        },
        {
          id: 8,
          image: galleryImage8,
        },
      ],
      reviewsArr: [
        {
          id: 1,
          date: new Date('2024-02-03'),
          rate: 4.3,
          name: 'Александр К.',
          text: 'Всё круто! Впечатлили',
          advantage: '4K quality. 483K poly',
          flaw: 'Не выявлено',
          yes: 3,
          no: 2,
        }
      ]
    },
  ])

  const findSlugItem = () => {
    const foundItem = goodsArray.find(item => item.slug === router.query.slug)
    if (foundItem) return foundItem
  }

  const router = useRouter()
  const itemSlug = findSlugItem()


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {
          isMobile ?
            <MobileHeader /> :
            <Header page={Page.shop} />
        }
        {
          itemSlug &&
          <div className={styles.content}>
            <BreadCrumbs
              categoryTitle={itemSlug.categoryTitle}
              categoryLink={itemSlug.categoryLink}
              subcategoryTitle={itemSlug.subcategoryTitle}
              subcategoryLink={itemSlug.subcategoryLink}
              productName={itemSlug.productName}
            />
            <ProductHero
              productInfo={itemSlug}
              isMobile={isMobile}
            />
            {/* <Advantages advArr={itemSlug.advantages} />
            <Gallery galArr={itemSlug.gallery} />
            <QandA reviewsArr={itemSlug.reviewsArr} /> */}
          </div>
        }
        <Footer />
      </main>
    </>
  );
}
