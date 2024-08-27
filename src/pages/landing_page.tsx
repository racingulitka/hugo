import LandingPageHero from "@/components/LandingPage/LandingPageHero/LandingPageHero";
import LandingPageLiesAbout from "@/components/LandingPage/LandingPageLiesAbout/LandingPageLiesAbout";
//import LandingPageBestPractices from "@/components/LandingPage/LandingPageBestPractices/LandingPageBestPractices";
import LandingPageMoreThan from "@/components/LandingPage/LandingPageMoreThan/LandingPageMoreThan";
import LandingPageEmotions from "@/components/LandingPage/LandingPageEmotions/LandingPageEmotions";
import LandingPageDoYouHaveSite from "@/components/LandingPage/LandingPageDoYouHaveSite/LandingPageDoYouHaveSite";
import LandingPageStructure from "@/components/LandingPage/LandingPageStructure/LandingPageStructure";
import LandingPageBrief from "@/components/LandingPage/LandingPageBrief/LandingPageBrief";
import LandingPageFeatures from "@/components/LandingPage/LandingPageFeatures/LandingPageFeatures";
import LandingPageTrustUs from "@/components/LandingPage/LandingPageTrustUs/LandingPageTrustUs";
import LandingPageLongDev from "@/components/LandingPage/LandingPageLongDev/LandingPageLongDev";
import LandingPageValuable from "@/components/LandingPage/LandingPageValuable/LandingPageValuable";
import LandingPageMercedes from "@/components/LandingPage/LandingPageMercedes/LandingPageMercedes";
import LandingPageMainIdea from "@/components/LandingPage/LandingPageMainIdea/LandingPageMainIdea";
import LandingPageImportant from "@/components/LandingPage/LandingPageImportant/LandingPageImportant";
import LandingPageQandA from "@/components/LandingPage/LandingPageQandA/LandingPageQandA";
import Contacts from "@/components/Contacts/Contacts";
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

export default function LandingPage({
  isSsrMobile,
}: {
  isSsrMobile: boolean,
}) {

  const isMobile = isSsrMobile

  return (
    <PageWrapper
    isMobile={isMobile}
    pageType={Page.home}
    title='Landing Page'
    description='description'
    >
              <LandingPageHero isMobile={isMobile} />
        <LandingPageLiesAbout />
        {/* <LandingPageBestPractices /> */}
        <LandingPageMoreThan isMobile={isMobile} />
        <LandingPageEmotions isMobile={isMobile} />
        <LandingPageDoYouHaveSite />
        <LandingPageStructure />
        <LandingPageBrief isMobile={isMobile} />
        <LandingPageFeatures isMobile={isMobile} />
        <LandingPageTrustUs />
        <LandingPageLongDev />
        <LandingPageValuable isMobile={isMobile} />
        <LandingPageMercedes isMobile={isMobile} />
        <LandingPageMainIdea isMobile={isMobile} />
        <LandingPageImportant isMobile={isMobile} />
        <LandingPageQandA isMobile={isMobile} />
        <Contacts isMobile={isMobile} />
        {isMobile && <MobileFooter />}
    </PageWrapper>
  );
}
