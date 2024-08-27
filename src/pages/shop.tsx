import TopShopBlock from "@/components/TopShopBlock/TopShopBlock";
import CategoryCards from "@/components/CategoryCards/CategoryCards";
import MainContentShop from "@/components/MainContentShop/MainContentShop";
import { getIsSsrMobile } from "@/utils/isSSRMoblile";
import { GetServerSidePropsContext } from 'next';
import PageWrapper from "@/components/Page/Page";
import { Page } from "@/components/Header/Header.config";

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
    <PageWrapper
      isMobile={isMobile}
      pageType={Page.shop}
      title='Магазин'
      description='description'
    >
      <TopShopBlock />
      <CategoryCards />
      <MainContentShop />
      {
        !isMobile &&
        <CategoryCards />
      }
    </PageWrapper>
  );
}
