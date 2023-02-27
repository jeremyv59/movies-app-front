interface IReviewEndpoints {
  list: string;
  add: string;
  remove(reviewId: number): string;
}

export { IReviewEndpoints };
