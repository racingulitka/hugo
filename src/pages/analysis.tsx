import Contacts from "@/components/Contacts/Contacts";
import AnalysisHero from "@/components/Analysis/AnalysisHero/AnalysisHero";
import AnalysisMainQuestions from "@/components/Analysis/AnalysisMainQuestions/AnalysisMainQuestions";
import AnalysisAnswers from "@/components/Analysis/AnalysisAnswers/AnalysisAnswers";
import AnalysisTypicalContent from "@/components/Analysis/AnalysisTypicalContent/AnalysisTypicalContent";
import AnalysisSource from "@/components/Analysis/AnalysisSource/AnalysisSource";
import AnalysisActuality from "@/components/Analysis/AnalysisActuality/AnalysisActuality";
import AnalysisFormat from "@/components/Analysis/AnalysisFormat/AnalysisFormat";
import AnalysisDetails from "@/components/Analysis/AnalysisDetails/AnalysisDetails";
import AnalysisQandA from "@/components/Analysis/AnalysisQandA/AnalysisQandA";
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

export default function Analysis({
  isSsrMobile,
}: {
  isSsrMobile: boolean,
}) {

  const isMobile = isSsrMobile

  return (
    <PageWrapper
      isMobile={isMobile}
      pageType={Page.home}
      title='Маркетинговый анализ'
      description='description'
    >
      <AnalysisHero isMobile={isMobile} />
      <AnalysisMainQuestions />
      <AnalysisAnswers isMobile={isMobile} />
      <AnalysisTypicalContent isMobile={isMobile} />
      <AnalysisSource />
      <AnalysisActuality isMobile={isMobile} />
      <AnalysisFormat isMobile={isMobile} />
      <AnalysisDetails isMobile={isMobile} />
      <AnalysisQandA isMobile={isMobile} />
      <Contacts isMobile={isMobile} />
      {isMobile && <MobileFooter />}
    </PageWrapper>
  );
}
