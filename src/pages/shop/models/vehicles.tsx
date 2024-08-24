import React, { useState } from 'react'
import { CarType } from '@/components/CarTypeSelect/CarTypeSelect.config';
import { Inter } from "next/font/google";
import pageStyles from '@/styles/vehicles.module.scss'
import CategoryCards from "@/components/CategoryCards/CategoryCards";
import VehiclesHero from "@/components/VehiclesHero/VehiclesHero";
import CarTypeSelect from "@/components/CarTypeSelect/CarTypeSelect";
import MainContentVehicles from "@/components/MainContentVehicles/MainContentVehicles";
import { GetServerSidePropsContext } from 'next';
import { getIsSsrMobile } from '@/utils/isSSRMoblile';
import { useRouter } from 'next/router';
import PageWrapper from '@/components/Page/Page';
import { Page } from '@/components/Header/Header.config';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context)
    },
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function Vehicles({
  isSsrMobile,
}: {
  isSsrMobile: boolean,
}) {

  const router = useRouter()
  const vehicleFilter = Number(router.query.filter)

  const isMobile = isSsrMobile

  const [activeCategory, setActiveCategory] = useState<CarType | null>(vehicleFilter - 1 || null)

  const onChangeCategory = (id: CarType) => {
    if (id === activeCategory) {
      setActiveCategory(null)
      router.push({
        pathname: router.pathname,
        query: {},
      }, undefined, { shallow: true })
    } else {
      setActiveCategory(id)
      router.push({
        pathname: router.pathname,
        query: { filter: id + 1 },
      }, undefined, { shallow: true })
    }
  }

  return (
    <PageWrapper
      isMobile={isMobile}
      pageType={Page.shop}
    >
      <VehiclesHero />
      <div className={pageStyles.carTypeSelect}>
        <CarTypeSelect activeCategory={activeCategory} setActiveCategory={onChangeCategory} />
      </div>
      <MainContentVehicles isMobile={isMobile} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <CategoryCards />
    </PageWrapper>
  );
}
