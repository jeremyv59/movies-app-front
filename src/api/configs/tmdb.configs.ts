interface IMediaType {
  movie: string;
  tv: string;
}

interface IMediaCat {
  popular: string;
  top_rated: string;
}

const mediaType: IMediaType = {
  movie: "movie",
  tv: "tv",
};

const mediaCategory: IMediaCat = {
  popular: "popular",
  top_rated: "top_rated",
};

const backdropPath = (imageEndpoint: string) => {
  `https://image.tmdb.org/t/p/originals${imageEndpoint}`;
};

const posterPath = (imageEndpoint: string) => {
  `https://image.tmdb.org/t/p/w500${imageEndpoint}`;
};

const youtubePath = (videoId: number) => {
  `https://www.youtube.com/embed/${videoId}?controls=0`;
};

const tmdbConfigs = {
  mediaType,
  mediaCategory,
  backdropPath,
  posterPath,
  youtubePath,
};

export default tmdbConfigs;
