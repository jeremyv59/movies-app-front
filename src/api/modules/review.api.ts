import privateClient from "../client/private.client";
import { IAddReviewParams, IReviewEndpoints } from "./interfaces/review";

const reviewEndpoints: IReviewEndpoints = {
  list: "reviews",
  add: "reviews",
  remove: (reviewId) => `reviews/${reviewId}`,
};

const reviewApi = {
  add: async ({
    mediaId,
    mediaType,
    mediaTitle,
    mediaPoster,
    content,
  }: IAddReviewParams): Promise<Response | unknown> => {
    try {
      const response: Response = await privateClient.post(reviewEndpoints.add, {
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        content,
      });

      return { response };
    } catch (err: unknown) {
      return { err };
    }
  },
};

export default reviewApi;
