import React from "react";

export const Home = React.lazy(() => import("./Home/index.page"));
export const Profile = React.lazy(() => import("./Profile/index.page"));
export const OurStory = React.lazy(() => import("./OurStory/index.page"));
export const Blog = React.lazy(() => import("./Blog/index.page"));
export const Hair = React.lazy(() => import("./Hair/index.page"));
export const Beauty = React.lazy(() => import("./Beauty/index.page"));
export const Aesthetics = React.lazy(() => import("./Aesthetics/index.page"));
export const Wellness = React.lazy(() => import("./Wellness/index.page"));
export const BlogDetails = React.lazy(() => import("./BlogDetails/index.page"));
export const MyBookings = React.lazy(() =>
  import("./MyBookings/MyBooking/index.page")
);

export const ChangePassword = React.lazy(() =>
  import("./ChangePassword/index.page")
);
export const MyFavourites = React.lazy(() =>
  import("./MyFavourites/index.page")
);
export const PrivacyPolicy = React.lazy(() =>
  import("./PrivacyPolicy/index.page")
);
export const PaymentDetails = React.lazy(() =>
  import("./PaymentDetails/index.page")
);
export const TermsAndCondition = React.lazy(() =>
  import("./Terms&Condition/index.page")
);
export const BookingRequest = React.lazy(() =>
  import("./BookingRequest/index.page")
);
export const MyMessage = React.lazy(() => import("./MyMessage/index.page"));
export const Faq = React.lazy(() => import("./Faq/index.page"));
export const Ginipigs = React.lazy(() => import("./Ginipigs/index.page"));

export const TreatmentList = React.lazy(() => import("./TreatmentList/index"));
export const PartnerDetail = React.lazy(() =>
  import("./PartnerDetail/index.page")
);
export const TreatmentAvailability = React.lazy(() =>
  import("./TreatmentAvailability/index.page")
);
export const MustHave = React.lazy(() => import("./MustHave/index.page"));
export const PaymentOption = React.lazy(() =>
  import("./PaymentOption/index.page")
);
