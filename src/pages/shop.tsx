import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Page } from "@/components/Header/Header.config";
import TopShopBlock from "@/components/TopShopBlock/TopShopBlock";
import CategoryCards from "@/components/CategoryCards/CategoryCards";
import MainContentShop from "@/components/MainContentShop/MainContentShop";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import { getIsSsrMobile } from "@/utils/isSSRMoblile";
import { GetServerSidePropsContext } from 'next';

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context),
    },
  };
}

export default function Shop({
  isSsrMobile,
}: {
  isSsrMobile: boolean
}) {

  const isMobile = isSsrMobile

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
        <TopShopBlock />
        <CategoryCards />
        <MainContentShop />
        {
          !isMobile &&
          <CategoryCards />
        }
        <Footer />
      </main>
    </>
  );
}
