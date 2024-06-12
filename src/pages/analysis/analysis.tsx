import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Page } from "@/components/Header/Header.config";
import Contacts from "@/components/Contacts/Contacts";

const inter = Inter({ subsets: ["latin"] });

export default function Analysis() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header page={Page.home}/>

        <Contacts />
        <Footer />
      </main>
    </>
  );
}