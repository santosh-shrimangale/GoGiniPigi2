import React from "react";

export const CreateAppointment = React.lazy(() =>
  import("./CreateAppointment/index.page")
);
export const ProviderMyBooking = React.lazy(() =>
  import("./MyBookings/ProviderMyBooking/index.page")
);

export const ProviderPaymentDetails = React.lazy(() =>
  import("./ProviderPaymentDetails/index.page")
);

export const ProviderReview = React.lazy(() =>
  import("./ProviderReview/index.page")
);
export const ProviderLeaveReview = React.lazy(() =>
  import("./ProviderLeaveReview/index.page")
);
export const ProviderProfile = React.lazy(() =>
  import("./ProviderMyProfile/index.page")
);
export const ProviderMyListings = React.lazy(() =>
  import("./MyListings/MyListingsTabs/index.page")
);
export const MyService = React.lazy(() => import("./MyService/index.page"));
export const Settings = React.lazy(() => import("./Settings/index.page"));
