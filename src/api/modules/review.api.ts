import privateClient from "../client/private.client";
import { IReviewEndpoints } from "./interfaces/review";

const reviewEndpoints: IReviewEndpoints = {
  list: "reviews",
  add: "reviews",
  remove: (reviewId) => `reviews/${reviewId}`,
};
