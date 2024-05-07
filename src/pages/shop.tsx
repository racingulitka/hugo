import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Page } from "@/components/Header/Header.config";
import TopShopBlock from "@/components/TopShopBlock/TopShopBlock";
import CategoryCards from "@/components/CategoryCards/CategoryCards";
import MainContentShop from "@/components/MainContentShop/MainContentShop";
import CodeModal from '@/components/CodeModal/CodeModal'

const inter = Inter({ subsets: ["latin"] });

export default function Shop() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header page={Page.shop}/>
        <TopShopBlock />
        <CategoryCards />
        <MainContentShop />
        <CodeModal />
        <CategoryCards />
        <Footer />
      </main>
    </>
  );
}
