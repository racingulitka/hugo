import React, {useState} from 'react'
import { CarType } from '@/components/CarTypeSelect/CarTypeSelect.config';
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import pageStyles from '@/styles/vehicles.module.scss'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Page } from "@/components/Header/Header.config";
import CategoryCards from "@/components/CategoryCards/CategoryCards";
import VehiclesHero from "@/components/VehiclesHero/VehiclesHero";
import CarTypeSelect from "@/components/CarTypeSelect/CarTypeSelect";
import MainContentVehicles from "@/components/MainContentVehicles/MainContentVehicles";


const inter = Inter({ subsets: ["latin"] });

export default function Vehicles() {
  const [activeCategory, setActiveCategory] = useState<CarType | null>(null)
  return (
    <>
      <Head>
        <title>Vehicles</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header page={Page.shop} />
        <VehiclesHero />
        <div className={pageStyles.carTypeSelect}>
          <CarTypeSelect activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        </div>
        <MainContentVehicles activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        <CategoryCards />
        <Footer />
      </main>
    </>
  );
}
