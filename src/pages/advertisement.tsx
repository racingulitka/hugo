import Contacts from "@/components/Contacts/Contacts";
import AdvertisementHero from "@/components/Advertisement/AdvertisementHero/AdvertisementHero";
import AdvertisementNotForAll from "@/components/Advertisement/AdvertisementNotForAll/AdvertisementNotForAll";
import AdvertisementAnalize from "@/components/Advertisement/AdvertisementAnalize/AdvertisementAnalize";
import AdvertisementStrategy from "@/components/Advertisement/AdvertisementStrategy/AdvertisementStrategy";
import AdvertisementAgreement from "@/components/Advertisement/AdvertisementAgreement/AdvertisementAgreement";
import AdvertisementSearch from "@/components/Advertisement/AdvertisementSearch/AdvertisementSearch";
import AdvertisementAreYouAgree from "@/components/Advertisement/AdvertisementAreYouAgree/AdvertisementAreYouAgree";
import AdvertisementCompany from "@/components/Advertisement/AdvertisementCompany/AdvertisementCompany";
import AdvertisementTest from "@/components/Advertisement/AdvertisementTest/AdvertisementTest";
import AdvertisementFix from "@/components/Advertisement/AdvertisementFix/AdvertisementFix";
import AdvertisementFinal from "@/components/Advertisement/AdvertisementFinal/AdvertisementFinal";
import AdvertisementReports from "@/components/Advertisement/AdvertisementReports/AdvertisementReports";
import AdvertisementWarranty from "@/components/Advertisement/AdvertisementWarranty/AdvertisementWarranty";
import AdvertisementWeAreNotTheBest from "@/components/Advertisement/AdvertisementWeAreNotTheBest/AdvertisementWeAreNotTheBest";
import AdvertisementQandA from "@/components/Advertisement/AdvertisementQandA/AdvertisementQandA";
import AdvertisementTuning from "@/components/Advertisement/AdvertisementTuning/AdvertisementTuning";
import { GetServerSidePropsContext } from "next";
import { getIsSsrMobile } from '../utils/isSSRMoblile';
import MobileFooter from "@/components/MobileFooter/MobileFooter";
import PageWrapper from "@/components/Page/Page";
import { Page } from "@/components/Header/Header.config";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context)
    }
  }
}

export default function Advertisement({
  isSsrMobile,
}: {
  isSsrMobile: boolean,
}) {

  const isMobile = isSsrMobile

  return (
    <PageWrapper
      isMobile={isMobile}
      pageType={Page.home}
    >
      <AdvertisementHero />
      <AdvertisementNotForAll />
      <AdvertisementAnalize isMobile={isMobile} />
      <AdvertisementStrategy isMobile={isMobile} />
      <AdvertisementAgreement isMobile={isMobile} />
      <AdvertisementSearch isMobile={isMobile} />
      <AdvertisementAreYouAgree />
      <AdvertisementCompany isMobile={isMobile} />
      <AdvertisementTest isMobile={isMobile} />
      <AdvertisementFix isMobile={isMobile} />
      <AdvertisementFinal isMobile={isMobile} />
      <AdvertisementReports isMobile={isMobile} />
      <AdvertisementWarranty />
      <AdvertisementTuning advType='КОНТЕКСТНОЙ' isMobile={isMobile} />
      <AdvertisementWeAreNotTheBest isMobile={isMobile} />
      <AdvertisementQandA isMobile={isMobile} />
      <Contacts isMobile={isMobile} />
      {
        isMobile && <MobileFooter />
      }
    </PageWrapper>
  );
}
