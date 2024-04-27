import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import Shop from "@/components/Shop/Shop";
import WhyAreTheyTrustUs from "@/components/WhyAreTheyTrustUs/WhyAreTheyTrustUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import Reviews from "@/components/Reviews/Reviews";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <Hero />
        <Shop />
        <WhyAreTheyTrustUs />
        <ContactUs />
        <Reviews />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}
