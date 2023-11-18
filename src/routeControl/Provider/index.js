import profileProvider from "./ProfileProvider";
import createAppointment from "./CreateAppointment";
import providerMyBooking from "./MyBookings";
import providerReview from "./ProviderReview";
import providerMyListings from "./MyListings";
import myService from "./MyService";
import providerPaymentDetails from "./ProviderPaymentDetails";
import providerLeaveReview from "./ProviderLeaveReview";
import providerMyProfile from "./ProviderMyProfile";
import settings from "./Settings";

const AccessControl = {
  ...profileProvider,
  ...createAppointment,
  ...providerMyBooking,
  ...providerReview,
  ...providerMyListings,
  ...providerPaymentDetails,
  ...providerLeaveReview,
  ...providerMyListings,
  ...providerMyProfile,
  ...providerMyListings,
  ...myService,
  ...settings,
};

export default AccessControl;
