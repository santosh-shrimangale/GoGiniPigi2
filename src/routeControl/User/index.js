import blog from "./Blog";
import blogDetails from "./BlogDetails";
import myBookings from "./MyBookings";
import myFavourites from "./MyFavourites";
import footer from "./Footer";
import treatmentList from "./TreatmentList";
import home from "./Home";
import ourStory from "./OurStory";
import profile from "./Profile";
import faq from "./Faq";
import paymentDetails from "./PaymentDetails";
import privacyPolicy from "./PrivacyPolicy";
import myMessage from "./MyMessage";
import ginipigs from "./Ginipigs";
import partnerDetail from "./PartnerDetail";
import changePassword from "./ChangePassword";
import bookingRequest from "./BookingRequest";
import termsAndCondition from "./TermsAndCondition";
import treatmentAvailability from "./TreatmentAvailability";
import mustHave from "./MustHave";
import paymentOption from "./PaymentOption";

const AccessControl = {
  ...home,
  ...footer,
  ...ourStory,
  ...profile,
  ...blog,
  ...blogDetails,
  ...myBookings,
  ...mustHave,
  ...privacyPolicy,
  ...changePassword,
  ...bookingRequest,
  ...termsAndCondition,
  ...treatmentAvailability,
  ...myFavourites,
  ...paymentDetails,
  ...treatmentList,
  ...myMessage,
  ...faq,
  ...ginipigs,
  ...partnerDetail,
  ...paymentOption,
};

export default AccessControl;
