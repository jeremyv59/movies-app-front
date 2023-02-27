interface IReviewEndpoints {
  list: string;
  add: string;
  remove: any;
}

interface IAddReviewParams {
  mediaId: number;
  mediaType: string;
  mediaTitle: string;
  mediaPoster: string;
  content: string;
}

interface IRemoveReviewParams {
  reviewId: number;
}

export { IReviewEndpoints, IAddReviewParams, IRemoveReviewParams };
