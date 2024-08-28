import React, { useState, useEffect } from 'react'
import { CarType } from '@/components/CarTypeSelect/CarTypeSelect.config';
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
import CarBrandSelect from '../../../components/CarBrandSelect/CarBrandSelect';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context)
    },
  };
}

export default function Vehicles({
  isSsrMobile,
}: {
  isSsrMobile: boolean,
}) {

  const router = useRouter();
  const vehicleFilter = Number(router.query.filter) || null;
  const sortFilter = Number(router.query.sortStatus) || 1;
  const brandFilter = Number(router.query.carFilter) || null;

  const isMobile = isSsrMobile;

  const [activeCategory, setActiveCategory] = useState<CarType | null>(vehicleFilter ? vehicleFilter - 1 : null);
  const [sortStatus, setSortStatus] = useState<number>(sortFilter);
  const [carBrandStatus, setCarBrandStatus] = useState<number | null>(brandFilter);

  const updateQueryParams = (newCategory: CarType | null) => {
    const query = {
      sortStatus,
      carFilter: carBrandStatus || undefined,
      filter: newCategory !== null ? newCategory + 1 : undefined,
    };

    router.push({ pathname: router.pathname, query }, undefined, { shallow: true });
  };

  const onChangeCategory = (id: CarType) => {
    const newCategory = id === activeCategory ? null : id;
    setActiveCategory(newCategory);
    updateQueryParams(newCategory);
  };

  useEffect(() => {
    updateQueryParams(activeCategory);
  }, [sortStatus, carBrandStatus]);

  return (
    <PageWrapper
      isMobile={isMobile}
      pageType={Page.shop}
      title='Транспорт'
      description='description'
    >
      <VehiclesHero />
      <div className={pageStyles.carTypeSelect}>
        <CarTypeSelect activeCategory={activeCategory} setActiveCategory={onChangeCategory} />
      </div>
      <MainContentVehicles
        isMobile={isMobile}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        sortStatus={sortStatus}
        setSortStatus={setSortStatus}
        carBrandStatus={carBrandStatus}
        setCarBrandStatus={setCarBrandStatus}
      />
      <CategoryCards />
    </PageWrapper>
  );
}
