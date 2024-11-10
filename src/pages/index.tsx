import Hero from "@/components/Hero/Hero";
import Shop from "@/components/Shop/Shop";
import WhyAreTheyTrustUs from "@/components/WhyAreTheyTrustUs/WhyAreTheyTrustUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import Reviews from "@/components/Reviews/Reviews";
import Contacts from "@/components/Contacts/Contacts";
import { getIsSsrMobile } from "@/utils/isSSRMoblile";
import { GetServerSidePropsContext } from "next";
import PageWrapper from "@/components/Page/Page";
import { Page } from "@/components/Header/Header.config";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSSRMobile: getIsSsrMobile(context),
    },
  };
}

export default function Home({
  isSSRMobile
}: {
  isSSRMobile: boolean
}) {

  const isMobile = isSSRMobile
  //kkkkkkk

  return (
    <PageWrapper
      isMobile={isMobile}
      pageType={Page.home}
      title='Главная'
      description='description'
    >
      <Hero />
      <Shop />
      <WhyAreTheyTrustUs />
      <ContactUs />
      <Reviews />
      <Contacts isMobile={isMobile} />
    </PageWrapper>
  );
}
