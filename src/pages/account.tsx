import Account from "@/components/Account/Account";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { getIsSsrMobile } from "@/utils/isSSRMoblile";
import PageWrapper from "@/components/Page/Page";
import { Page } from "@/components/Header/Header.config";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context)
    }
  }
}

export default function Shop({
  isSsrMobile,
}: {
  isSsrMobile: boolean,
}) {

  const isMobile = isSsrMobile
  const loadingScreen = useRouter().query.loadingScreen
  const routerQuery = Number(loadingScreen) || 1

  return (
    <PageWrapper
      isMobile={isMobile}
      pageType={Page.shop}
      title='Личный кабинет'
      description='description'
    >
      <Account routerScreen={routerQuery} isMobile={isMobile} />
    </PageWrapper>
  );
}
