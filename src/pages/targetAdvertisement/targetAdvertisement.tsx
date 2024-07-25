import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Page } from "@/components/Header/Header.config";
import Contacts from "@/components/Contacts/Contacts";
import TargetHero from "@/components/Target/TargetHero/TargetHero";
import AdvertisementAnalize from "@/components/Advertisement/AdvertisementAnalize/AdvertisementAnalize";
import AdvertisementStrategy from "@/components/Advertisement/AdvertisementStrategy/AdvertisementStrategy";
import AdvertisementAgreement from "@/components/Advertisement/AdvertisementAgreement/AdvertisementAgreement";
import TargetCompetitor from "@/components/Target/TargetCompetitor/TargetCompetitor";
import TargetPerson from "@/components/Target/TargetPerson/TargetPerson";
import TargetAudience from "@/components/Target/TargetAudience/TargetAudience";
import TargetBanners from "@/components/Target/TargetBanners/TargetBanners";
import TargetTools from "@/components/Target/TargetTools/TargetTools";
import TargetTest from "@/components/Target/TargetTest/TargetTest";
import TargetAnalize from "@/components/Target/TargetAnalize/TargetAnalize";
import TargetBudget from "@/components/Target/TargetBudget/TargetBudget";
import TargetFinal from "@/components/Target/TargetFinal/TargetFinal";
import TargetReports from "@/components/Target/TargetReports/TargetReports";
import AdvertisementWarranty from "@/components/Advertisement/AdvertisementWarranty/AdvertisementWarranty";
import AdvertisementWeAreNotTheBest from "@/components/Advertisement/AdvertisementWeAreNotTheBest/AdvertisementWeAreNotTheBest";
import AdvertisementQandA from "@/components/Advertisement/AdvertisementQandA/AdvertisementQandA";
import AuthAndRegister from "@/components/AuthAndRegister/AuthAndRegister";

const inter = Inter({ subsets: ["latin"] });

export default function Advertisement() {
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
        <TargetHero />
        <AdvertisementAnalize />
        <AdvertisementStrategy />
        <AdvertisementAgreement />
        <TargetCompetitor />
        <TargetPerson />
        <TargetAudience />
        <AuthAndRegister />
        <TargetBanners />
        <TargetTools />
        <TargetTest />
        <TargetAnalize />
        <TargetBudget />
        <TargetFinal />
        <TargetReports />
        <AdvertisementWarranty />
        <AdvertisementWeAreNotTheBest />
        <AdvertisementQandA />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}