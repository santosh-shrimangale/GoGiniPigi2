import providerReview from "./ProviderReview/index.route";
import providerLeaveReview from "./ProviderLeaveReview/index.route";

export default function route(t) {
  return [...providerReview(t), ...providerLeaveReview(t)];
}
