interface IReviewEndpoints {
  list: string;
  add: string;
  remove(reviewId: number): string;
}

interface IAddReviewParams {
  mediaId: number;
  mediaType: string;
  mediaTitle: string;
  mediaPoster: string;
  content: string;
}

export { IReviewEndpoints, IAddReviewParams };
