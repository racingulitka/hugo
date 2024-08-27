import React from 'react'
import { Inter } from "next/font/google";
import { GetServerSidePropsContext } from 'next';
import { getIsSsrMobile } from '@/utils/isSSRMoblile';
import ShopCategoriesHero from '@/components/Shop/ShopCategoriesHero/ShopCategoriesHero';
import { h1, menuBlockArr } from '../../components/Product/pagesFiles/models.config';
import PageWrapper from '@/components/Page/Page';
import { Page } from '@/components/Header/Header.config';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context)
    },
  };
}

export default function Models({
  isSsrMobile,
}: {
  isSsrMobile: boolean,
}) {

  const isMobile = isSsrMobile

  return (
    <PageWrapper
    isMobile={isMobile}
    pageType={Page.shop}
    title='3D моделинг'
    description='description'
    >
              <ShopCategoriesHero
          h1={h1}
          menuBlockArr={menuBlockArr}
        />
    </PageWrapper>
  );
}
