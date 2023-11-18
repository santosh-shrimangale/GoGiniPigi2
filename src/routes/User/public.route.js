import homeRoutes from "./Home/index.route";
import ourStoryRoutes from "./OurStory/index.route";
import blog from "./Blog/index.route";
import blogDetails from "./BlogDetails/index.route";
import privacyPolicy from "./PrivacyPolicy/index.route";
import Faq from "./Faq/index.route";
import Ginipigs from "./GiniPigs/index.route";
import treatmentList from "./TreatmentList/index.route";
import footerRoutes from "./Footer/index.route";
import termAndCondition from "./TermAndCondition/index.route";
import myMessage from "./MyMessage/index.route";
import bookingRequest from "./BookingRequest/index.route";
import partnerDetail from "./PartnerDetail/index.route";
import treatmentAvailability from "./TreatmentAvailability/index.route";
import mustHave from "./MustHave/index.route";
import paymentOption from "./PaymentOption/index.route";

export default function route(t) {
  return [
    ...homeRoutes(t),
    ...treatmentList(t),
    ...footerRoutes(t),
    ...ourStoryRoutes(t),
    ...blog(t),
    ...blogDetails(t),
    ...bookingRequest(t),
    ...privacyPolicy(t),
    ...mustHave(t),
    ...termAndCondition(t),
    ...myMessage(t),
    ...Faq(t),
    ...Ginipigs(t),
    ...partnerDetail(t),
    ...treatmentAvailability(t),
    ...paymentOption(t),
  ];
}
