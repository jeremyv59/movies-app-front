import privateClient from "../client/private.client";
import {
  IAddReviewParams,
  IRemoveReviewParams,
  IReviewEndpoints,
} from "./interfaces/review";

const reviewEndpoints: IReviewEndpoints = {
  list: "reviews",
  add: "reviews",
  remove: ({ reviewId }: any) => `reviews/${reviewId}`,
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
  remove: async ({
    reviewId,
  }: IRemoveReviewParams): Promise<Response | unknown> => {
    try {
      const response: Response = await privateClient.post(
        reviewEndpoints.remove,
        {
          reviewId,
        }
      );

      return { response };
    } catch (err: unknown) {
      return { err };
    }
  },
  getList: async (): Promise<Response | unknown> => {
    try {
      const response: Response = await privateClient.get(reviewEndpoints.list);

      return { response };
    } catch (err: unknown) {
      return { err };
    }
  },
};

export default reviewApi;
