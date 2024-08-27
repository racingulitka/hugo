import { getIsSsrMobile } from "@/utils/isSSRMoblile";
import { GetServerSidePropsContext } from 'next';
import Solutions from "@/components/Solutions/Solutions";
import PageWrapper from "@/components/Page/Page";
import { Page } from "@/components/Header/Header.config";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context),
    },
  };
}

export default function mobileSolutions({
  isSsrMobile,
}: {
  isSsrMobile: boolean
}) {

  const isMobile = isSsrMobile

  return (
    <PageWrapper
    isMobile={isMobile}
    pageType={Page.home}
    title='Решения'
    description='description'
    >
              <Solutions onClose={() => console.log('closeSolutions')}/>
    </PageWrapper>
  );
}
