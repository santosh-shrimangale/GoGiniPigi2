import myBookingRoutes from "./MyBookings/index.route";
import changePasswordRoutes from "./ChangePassword/index.route";
import myFavouritesRoutes from "./MyFavourites/index.route";
import paymentDetailsRoutes from "./PaymentDetails/index.route";
import profileRoutes from "./Profile/index.route";

export default function route(t) {
  return [
    ...profileRoutes(t),
    ...myBookingRoutes(t),
    ...myFavouritesRoutes(t),
    ...paymentDetailsRoutes(t),
    ...changePasswordRoutes(t),
  ];
}
