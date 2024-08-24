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
import { GetServerSidePropsContext } from "next";
import { getIsSsrMobile } from '../utils/isSSRMoblile';
import MobileFooter from "@/components/MobileFooter/MobileFooter";
import AdvertisementNotForAll from "@/components/Advertisement/AdvertisementNotForAll/AdvertisementNotForAll";
import AdvertisementTuning from "@/components/Advertisement/AdvertisementTuning/AdvertisementTuning";
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
      <TargetHero />
        <AdvertisementNotForAll />
        <AdvertisementAnalize isMobile={isMobile} />
        <AdvertisementStrategy isMobile={isMobile} />
        <AdvertisementAgreement isMobile={isMobile} />
        <TargetCompetitor isMobile={isMobile} />
        <TargetPerson isMobile={isMobile} />
        <TargetAudience isMobile={isMobile} />
        <TargetBanners isMobile={isMobile} />
        <TargetTools isMobile={isMobile} />
        <TargetTest isMobile={isMobile}/>
        <TargetAnalize isMobile={isMobile} />
        <TargetBudget isMobile={isMobile} />
        <TargetFinal isMobile={isMobile} />
        <TargetReports isMobile={isMobile} />
        <AdvertisementWarranty />
        <AdvertisementTuning advType='ТАРГЕТИРОВАННОЙ' isMobile={isMobile}/>
        <AdvertisementWeAreNotTheBest isMobile={isMobile} />
        <AdvertisementQandA isMobile={isMobile} />
        <Contacts isMobile={isMobile} />
        {isMobile && <MobileFooter />}
    </PageWrapper>
  );
}
