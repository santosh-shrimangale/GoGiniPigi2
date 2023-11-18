import createAppointment from "./CreateAppointment/index.route";
import providerMyBooking from "./MyBookings/index.route";
import myService from "./MyService/index.route";
import providerPaymentDetails from "./ProviderPaymentDetails/index.route";
import profileRoutes from "./myProfile/index.route";
import myListings from "./MyListings/index.route";
import settings from "./Settings/index.route";
import providerLeaveReview from "./ProviderLeaveReview/index.route";

export default function route(t) {
  return [
    ...profileRoutes(t),
    ...createAppointment(t),
    ...providerMyBooking(t),
    ...myService(t),
    ...providerPaymentDetails(t),
    ...myListings(t),
    ...settings(t),
    ...providerLeaveReview(t),
  ];
}
