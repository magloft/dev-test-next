import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
import { getApolloClient } from './client'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  URL: any;
};

export type AlternativeTitle = {
  __typename?: 'AlternativeTitle';
  iso3166_1: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type AnyImage = BackdropSizeDetailImage | LogoSizeDetailImage | PosterSizeDetailImage | ProfileSizeDetailImage | StillSizeDetailImage;

export enum BackdropSize {
  Original = 'Original',
  W300 = 'W300',
  W780 = 'W780',
  W1280 = 'W1280'
}

export type BackdropSizeDetailImage = {
  __typename?: 'BackdropSizeDetailImage';
  aspectRatio: Scalars['Float'];
  height: Scalars['Int'];
  image: Scalars['URL'];
  iso639_1?: Maybe<Scalars['String']>;
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
  width: Scalars['Int'];
};


export type BackdropSizeDetailImageImageArgs = {
  size: BackdropSize;
};

export type CastCreditWithMovie = ICreditWithMovie & {
  __typename?: 'CastCreditWithMovie';
  character: Scalars['String'];
  id: Scalars['String'];
  value: Movie;
};

export type CastCreditWithMovieOrTv = ICreditWithMovieOrTv & {
  __typename?: 'CastCreditWithMovieOrTV';
  character: Scalars['String'];
  id: Scalars['String'];
  value: MovieOrTv;
};

export type CastCreditWithPerson = ICreditWithPerson & {
  __typename?: 'CastCreditWithPerson';
  character: Scalars['String'];
  id: Scalars['String'];
  value: Person;
};

export type CastCreditWithTvShow = ICreditWithTvShow & {
  __typename?: 'CastCreditWithTVShow';
  character: Scalars['String'];
  id: Scalars['String'];
  value: TvShow;
};

export type CreditWithMovie = ICreditWithMovie & {
  __typename?: 'CreditWithMovie';
  id: Scalars['String'];
  value: Movie;
};

export type CreditWithMovieOrTv = ICreditWithMovieOrTv & {
  __typename?: 'CreditWithMovieOrTV';
  id: Scalars['String'];
  value: MovieOrTv;
};

export type CreditWithPerson = ICreditWithPerson & {
  __typename?: 'CreditWithPerson';
  id: Scalars['String'];
  value: Person;
};

export type CreditWithTvShow = ICreditWithTvShow & {
  __typename?: 'CreditWithTVShow';
  id: Scalars['String'];
  value: TvShow;
};

export type CreditsWithMovie = {
  __typename?: 'CreditsWithMovie';
  cast: Array<CastCreditWithMovie>;
  crew: Array<CrewCreditWithMovie>;
  id: Scalars['Int'];
};

export type CreditsWithMovieOrTv = {
  __typename?: 'CreditsWithMovieOrTV';
  cast: Array<CastCreditWithMovieOrTv>;
  crew: Array<CrewCreditWithMovieOrTv>;
  id: Scalars['Int'];
};

export type CreditsWithPerson = ICreditsWithPerson & {
  __typename?: 'CreditsWithPerson';
  cast: Array<CastCreditWithPerson>;
  crew: Array<CrewCreditWithPerson>;
  id: Scalars['Int'];
};

export type CreditsWithTvShow = {
  __typename?: 'CreditsWithTVShow';
  cast: Array<CastCreditWithTvShow>;
  crew: Array<CrewCreditWithTvShow>;
  id: Scalars['Int'];
};

export type CrewCreditWithMovie = ICreditWithMovie & {
  __typename?: 'CrewCreditWithMovie';
  department: Scalars['String'];
  id: Scalars['String'];
  job: Scalars['String'];
  value: Movie;
};

export type CrewCreditWithMovieOrTv = ICreditWithMovieOrTv & {
  __typename?: 'CrewCreditWithMovieOrTV';
  department: Scalars['String'];
  id: Scalars['String'];
  job: Scalars['String'];
  value: MovieOrTv;
};

export type CrewCreditWithPerson = ICreditWithPerson & {
  __typename?: 'CrewCreditWithPerson';
  department: Scalars['String'];
  id: Scalars['String'];
  job: Scalars['String'];
  value: Person;
};

export type CrewCreditWithTvShow = ICreditWithTvShow & {
  __typename?: 'CrewCreditWithTVShow';
  department: Scalars['String'];
  id: Scalars['String'];
  job: Scalars['String'];
  value: TvShow;
};

export type Discover = {
  __typename?: 'Discover';
  movies: DiscoverMovies;
  tv: DiscoverTv;
};


export type DiscoverMoviesArgs = {
  input?: InputMaybe<MovieDiscoverInput>;
};


export type DiscoverTvArgs = {
  input?: InputMaybe<TvDiscoverInput>;
};

export type DiscoverDateFilter = {
  max?: InputMaybe<Scalars['Date']>;
  min?: InputMaybe<Scalars['Date']>;
};

export type DiscoverFloatFilter = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};

export type DiscoverIncludeExcludeFilter = {
  exclude?: InputMaybe<Array<Scalars['ID']>>;
  include?: InputMaybe<Array<Scalars['ID']>>;
};

export type DiscoverIncludeFilter = {
  include: Array<Scalars['ID']>;
};

export type DiscoverInput = {
  cast?: InputMaybe<DiscoverIncludeFilter>;
  companies?: InputMaybe<DiscoverIncludeExcludeFilter>;
  crew?: InputMaybe<DiscoverIncludeFilter>;
  genres?: InputMaybe<DiscoverIncludeExcludeFilter>;
  keywords?: InputMaybe<DiscoverIncludeExcludeFilter>;
  people?: InputMaybe<DiscoverIncludeFilter>;
  rating?: InputMaybe<DiscoverFloatFilter>;
  runtime?: InputMaybe<DiscoverIntFilter>;
  streamingOptions?: InputMaybe<StreamingOptions>;
  voteCount?: InputMaybe<DiscoverIntFilter>;
};

export type DiscoverIntFilter = {
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
};

export type DiscoverMovies = {
  __typename?: 'DiscoverMovies';
  latest: MovieConnection;
  popular: MovieConnection;
  topRated: MovieConnection;
};


export type DiscoverMoviesLatestArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type DiscoverMoviesPopularArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type DiscoverMoviesTopRatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type DiscoverTv = {
  __typename?: 'DiscoverTV';
  latest: TvShowConnection;
  onTheAir: TvShowConnection;
  popular: TvShowConnection;
  topRated: TvShowConnection;
};


export type DiscoverTvLatestArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type DiscoverTvOnTheAirArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type DiscoverTvPopularArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type DiscoverTvTopRatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Episode = IStreamable & Node & {
  __typename?: 'Episode';
  airDate?: Maybe<Scalars['Date']>;
  credits: EpisodeCreditsWithPerson;
  crew: Array<CrewCreditWithPerson>;
  episodeNumber: Scalars['Int'];
  externalIds: IExternalIds;
  guestStars: Array<CastCreditWithPerson>;
  /** The id of the object */
  id: Scalars['ID'];
  images: EpisodeImages;
  name: Scalars['String'];
  next?: Maybe<Episode>;
  overview: Scalars['String'];
  previous?: Maybe<Episode>;
  productionCode: Scalars['String'];
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  season: Season;
  seasonNumber: Scalars['Int'];
  show: TvShow;
  still?: Maybe<Scalars['URL']>;
  streamingOptions?: Maybe<Array<StreamingOption>>;
  translations: Array<TranslationWithTranslatedMovieInfo>;
  videos: Array<Video>;
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
};


export type EpisodeSearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']>>;
  providers: Array<Scalars['ID']>;
};


export type EpisodeStillArgs = {
  size: StillSize;
};


export type EpisodeStreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type EpisodeCreditsWithPerson = ICreditsWithPerson & {
  __typename?: 'EpisodeCreditsWithPerson';
  cast: Array<CastCreditWithPerson>;
  crew: Array<CrewCreditWithPerson>;
  guestStars: Array<CastCreditWithPerson>;
  id: Scalars['Int'];
};

export type EpisodeImages = {
  __typename?: 'EpisodeImages';
  stills: Array<StillSizeDetailImage>;
};

export type ExternalIds = IExternalIds & {
  __typename?: 'ExternalIDS';
  facebook?: Maybe<Scalars['String']>;
  imdb?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export enum ExternalSource {
  Facebook = 'Facebook',
  Freebase = 'Freebase',
  Imdb = 'Imdb',
  Instagram = 'Instagram',
  Tvdb = 'Tvdb',
  Tvrage = 'Tvrage',
  Twitter = 'Twitter'
}

export type FromExternalIds = {
  __typename?: 'FromExternalIds';
  movies: Array<Movie>;
  people: Array<Person>;
  tv: Array<TvShow>;
};

export type FullExternalIds = IExternalIds & {
  __typename?: 'FullExternalIDS';
  facebook?: Maybe<Scalars['String']>;
  imdb?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  tmdb: Scalars['Int'];
  twitter?: Maybe<Scalars['String']>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  UnknownOrNonBinary = 'UnknownOrNonBinary'
}

export type Genre = Node & {
  __typename?: 'Genre';
  discover: Discover;
  /** The id of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type GenreDiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};

export type GenreConnection = {
  __typename?: 'GenreConnection';
  edges?: Maybe<Array<Maybe<GenreEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GenreEdge = {
  __typename?: 'GenreEdge';
  cursor: Scalars['String'];
  node?: Maybe<Genre>;
};

export type Genres = {
  __typename?: 'Genres';
  all: GenreConnection;
  genre: Genre;
};


export type GenresAllArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type GenresGenreArgs = {
  id: Scalars['ID'];
};

export type ICreditWithMovie = {
  id: Scalars['String'];
  value: Movie;
};

export type ICreditWithMovieOrTv = {
  id: Scalars['String'];
  value: MovieOrTv;
};

export type ICreditWithPerson = {
  id: Scalars['String'];
  value: Person;
};

export type ICreditWithTvShow = {
  id: Scalars['String'];
  value: TvShow;
};

export type ICreditsWithPerson = {
  cast: Array<CastCreditWithPerson>;
  crew: Array<CrewCreditWithPerson>;
  id: Scalars['Int'];
};

export type IExternalIds = {
  facebook?: Maybe<Scalars['String']>;
  imdb?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type IStreamable = {
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  streamingOptions?: Maybe<Array<StreamingOption>>;
};


export type IStreamableSearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']>>;
  providers: Array<Scalars['ID']>;
};


export type IStreamableStreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type Keyword = Node & {
  __typename?: 'Keyword';
  discover: Discover;
  /** The id of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type KeywordDiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};

export enum LogoSize {
  Original = 'Original',
  W45 = 'W45',
  W92 = 'W92',
  W154 = 'W154',
  W185 = 'W185',
  W300 = 'W300',
  W500 = 'W500'
}

export type LogoSizeDetailImage = {
  __typename?: 'LogoSizeDetailImage';
  aspectRatio: Scalars['Float'];
  height: Scalars['Int'];
  image: Scalars['URL'];
  iso639_1?: Maybe<Scalars['String']>;
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
  width: Scalars['Int'];
};


export type LogoSizeDetailImageImageArgs = {
  size: LogoSize;
};

export type MediaImages = {
  __typename?: 'MediaImages';
  backdrops: Array<BackdropSizeDetailImage>;
  posters: Array<PosterSizeDetailImage>;
};

export type Movie = IStreamable & Node & {
  __typename?: 'Movie';
  alternativeTitles: Array<AlternativeTitle>;
  backdrop?: Maybe<Scalars['URL']>;
  budget?: Maybe<Scalars['Int']>;
  credits: ICreditsWithPerson;
  externalIds: FullExternalIds;
  genres: Array<Genre>;
  homepage?: Maybe<Scalars['URL']>;
  /** The id of the object */
  id: Scalars['ID'];
  images: MediaImages;
  imdbID: Scalars['String'];
  isAdult: Scalars['Boolean'];
  isVideo: Scalars['Boolean'];
  keywords: Array<Keyword>;
  numberOfRatings: Scalars['Int'];
  originalLanguage: Scalars['String'];
  originalTitle: Scalars['String'];
  overview: Scalars['String'];
  popularityIndex?: Maybe<Scalars['Float']>;
  poster?: Maybe<Scalars['URL']>;
  productionCompanies: Array<ProductionCompany>;
  productionCountries: Array<ProductionCountry>;
  rating: Scalars['Float'];
  recommendations: MovieConnection;
  releaseDate?: Maybe<Scalars['Date']>;
  revenue?: Maybe<Scalars['Int']>;
  reviews: ReviewConnection;
  runtime: Scalars['Int'];
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  similar: MovieConnection;
  spokenLanguages: Array<SpokenLanguage>;
  status: Status;
  streamingOptions?: Maybe<Array<StreamingOption>>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  translations: Array<TranslationWithTranslatedMovieInfo>;
  videos: Array<Video>;
};


export type MovieBackdropArgs = {
  size: BackdropSize;
};


export type MoviePosterArgs = {
  size: PosterSize;
};


export type MovieRecommendationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MovieReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MovieSearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']>>;
  providers: Array<Scalars['ID']>;
};


export type MovieSimilarArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MovieStreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type MovieConnection = {
  __typename?: 'MovieConnection';
  edges?: Maybe<Array<Maybe<MovieEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MovieDiscoverInput = {
  includeAdult?: InputMaybe<Scalars['Boolean']>;
  includeVideo?: InputMaybe<Scalars['Boolean']>;
  releaseDate?: InputMaybe<DiscoverDateFilter>;
};

export type MovieEdge = {
  __typename?: 'MovieEdge';
  cursor: Scalars['String'];
  node?: Maybe<Movie>;
};

export type MovieOrTv = Movie | TvShow;

export type MovieOrTvOrPeople = Movie | Person | TvShow;

export type MovieOrTvOrPeopleConnection = {
  __typename?: 'MovieOrTVOrPeopleConnection';
  edges?: Maybe<Array<Maybe<MovieOrTvOrPeopleEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MovieOrTvOrPeopleEdge = {
  __typename?: 'MovieOrTVOrPeopleEdge';
  cursor: Scalars['String'];
  node?: Maybe<MovieOrTvOrPeople>;
};

export type Movies = {
  __typename?: 'Movies';
  movie: Movie;
  nowPlaying: MovieConnection;
  popular: MovieConnection;
  productionCompany: ProductionCompany;
  search: MovieConnection;
  topRated: MovieConnection;
  trending: MovieConnection;
  upcoming: MovieConnection;
};


export type MoviesMovieArgs = {
  id: Scalars['ID'];
};


export type MoviesNowPlayingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MoviesPopularArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MoviesProductionCompanyArgs = {
  id: Scalars['ID'];
};


export type MoviesSearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  term: Scalars['String'];
};


export type MoviesTopRatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MoviesTrendingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  timeWindow?: TimeWindow;
};


export type MoviesUpcomingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Network = Node & {
  __typename?: 'Network';
  /** The id of the object */
  id: Scalars['ID'];
  logo?: Maybe<Scalars['URL']>;
  name: Scalars['String'];
  originCountry: Scalars['String'];
  tv: DiscoverTv;
};


export type NetworkLogoArgs = {
  size: LogoSize;
};


export type NetworkTvArgs = {
  input?: InputMaybe<TvDiscoverInput>;
  otherFilters?: InputMaybe<DiscoverInput>;
};

export type Node = {
  /** The id of the object */
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type People = {
  __typename?: 'People';
  person: Person;
  popular: PersonConnection;
  search: PersonConnection;
  trending: PersonConnection;
};


export type PeoplePersonArgs = {
  id: Scalars['ID'];
};


export type PeoplePopularArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PeopleSearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  term: Scalars['String'];
};


export type PeopleTrendingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  timeWindow?: TimeWindow;
};

export type Person = Node & {
  __typename?: 'Person';
  alsoKnownAs: Array<Scalars['String']>;
  biography: Scalars['String'];
  birthday?: Maybe<Scalars['Date']>;
  credits: PersonCredits;
  deathday?: Maybe<Scalars['Date']>;
  discover: Discover;
  externalIds: FullExternalIds;
  gender: Gender;
  homepage?: Maybe<Scalars['URL']>;
  /** The id of the object */
  id: Scalars['ID'];
  images: Array<ProfileSizeDetailImage>;
  imdbID?: Maybe<Scalars['String']>;
  isAdult: Scalars['Boolean'];
  knownFor: Array<MovieOrTv>;
  knownForDepartment: Scalars['String'];
  name: Scalars['String'];
  placeOfBirth?: Maybe<Scalars['String']>;
  popularityIndex: Scalars['Float'];
  profilePicture?: Maybe<Scalars['URL']>;
  taggedImages: TaggedImageConnection;
  translations: Array<TranslationWithTranslatedPersonInfo>;
};


export type PersonDiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};


export type PersonProfilePictureArgs = {
  size: ProfileSize;
};


export type PersonTaggedImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type PersonConnection = {
  __typename?: 'PersonConnection';
  edges?: Maybe<Array<Maybe<PersonEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonCredits = {
  __typename?: 'PersonCredits';
  all: CreditsWithMovieOrTv;
  movies: CreditsWithMovie;
  tv: CreditsWithTvShow;
};

export type PersonEdge = {
  __typename?: 'PersonEdge';
  cursor: Scalars['String'];
  node?: Maybe<Person>;
};

export enum PosterSize {
  Original = 'Original',
  W92 = 'W92',
  W154 = 'W154',
  W185 = 'W185',
  W342 = 'W342',
  W500 = 'W500',
  W780 = 'W780'
}

export type PosterSizeDetailImage = {
  __typename?: 'PosterSizeDetailImage';
  aspectRatio: Scalars['Float'];
  height: Scalars['Int'];
  image: Scalars['URL'];
  iso639_1?: Maybe<Scalars['String']>;
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
  width: Scalars['Int'];
};


export type PosterSizeDetailImageImageArgs = {
  size: PosterSize;
};

export type Price = {
  __typename?: 'Price';
  amount: Scalars['Float'];
  currency: Scalars['String'];
};

export type ProductionCompany = Node & {
  __typename?: 'ProductionCompany';
  discover: Discover;
  /** The id of the object */
  id: Scalars['ID'];
  logo?: Maybe<Scalars['URL']>;
  name: Scalars['String'];
  originCountry: Scalars['String'];
};


export type ProductionCompanyDiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};


export type ProductionCompanyLogoArgs = {
  size: LogoSize;
};

export type ProductionCountry = {
  __typename?: 'ProductionCountry';
  iso3166_1: Scalars['String'];
  name: Scalars['String'];
};

export enum ProfileSize {
  H632 = 'H632',
  Original = 'Original',
  W45 = 'W45',
  W185 = 'W185'
}

export type ProfileSizeDetailImage = {
  __typename?: 'ProfileSizeDetailImage';
  aspectRatio: Scalars['Float'];
  height: Scalars['Int'];
  image: Scalars['URL'];
  iso639_1?: Maybe<Scalars['String']>;
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
  width: Scalars['Int'];
};


export type ProfileSizeDetailImageImageArgs = {
  size: ProfileSize;
};

export type Query = {
  __typename?: 'Query';
  discover: Discover;
  find: FromExternalIds;
  genres: Genres;
  movies: Movies;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  people: People;
  search: MovieOrTvOrPeopleConnection;
  streaming: Streaming;
  trending: MovieOrTvOrPeopleConnection;
  tv: Tv;
};


export type QueryDiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};


export type QueryFindArgs = {
  externalId: Scalars['String'];
  source: ExternalSource;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QuerySearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  term: Scalars['String'];
};


export type QueryTrendingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  timeWindow?: TimeWindow;
};

export type Review = {
  __typename?: 'Review';
  author: Scalars['String'];
  content: Scalars['String'];
  id: Scalars['String'];
  url: Scalars['String'];
};

export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  edges?: Maybe<Array<Maybe<ReviewEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  cursor: Scalars['String'];
  node?: Maybe<Review>;
};

export type Season = IStreamable & Node & {
  __typename?: 'Season';
  airDate?: Maybe<Scalars['Date']>;
  credits: ICreditsWithPerson;
  episode: Episode;
  episodeCount: Scalars['Int'];
  episodes: Array<Episode>;
  externalIds: IExternalIds;
  /** The id of the object */
  id: Scalars['ID'];
  images: MediaImages;
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['URL']>;
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  seasonNumber: Scalars['Int'];
  show: TvShow;
  streamingOptions?: Maybe<Array<StreamingOption>>;
  videos: Array<Video>;
};


export type SeasonEpisodeArgs = {
  number: Scalars['Int'];
};


export type SeasonPosterArgs = {
  size: PosterSize;
};


export type SeasonSearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']>>;
  providers: Array<Scalars['ID']>;
};


export type SeasonStreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type SpokenLanguage = {
  __typename?: 'SpokenLanguage';
  iso639_1: Scalars['String'];
  name: Scalars['String'];
};

export enum Status {
  Cancelled = 'Cancelled',
  InProduction = 'InProduction',
  Planned = 'Planned',
  PostProduction = 'PostProduction',
  Released = 'Released',
  Rumored = 'Rumored'
}

export enum StillSize {
  Original = 'Original',
  W92 = 'W92',
  W185 = 'W185',
  W300 = 'W300'
}

export type StillSizeDetailImage = {
  __typename?: 'StillSizeDetailImage';
  aspectRatio: Scalars['Float'];
  height: Scalars['Int'];
  image: Scalars['URL'];
  iso639_1?: Maybe<Scalars['String']>;
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
  width: Scalars['Int'];
};


export type StillSizeDetailImageImageArgs = {
  size: StillSize;
};

export type Streamable = IStreamable & {
  __typename?: 'Streamable';
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  streamingOptions?: Maybe<Array<StreamingOption>>;
};


export type StreamableSearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']>>;
  providers: Array<Scalars['ID']>;
};


export type StreamableStreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type Streaming = {
  __typename?: 'Streaming';
  allProviders: Array<StreamingProvider>;
  countries: Array<StreamingCountry>;
  myCountry?: Maybe<StreamingCountry>;
  providers: Array<StreamingProvider>;
};


export type StreamingProvidersArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type StreamingCountry = Node & {
  __typename?: 'StreamingCountry';
  emoji: Scalars['String'];
  /** The id of the object */
  id: Scalars['ID'];
  iso3166_2: Scalars['String'];
  name: Scalars['String'];
};

export type StreamingCountryOption = {
  __typename?: 'StreamingCountryOption';
  country: StreamingCountry;
  option: StreamingOption;
};

export type StreamingLinks = {
  __typename?: 'StreamingLinks';
  androidTV?: Maybe<Scalars['URL']>;
  fireTV?: Maybe<Scalars['URL']>;
  tvOS?: Maybe<Scalars['URL']>;
  web?: Maybe<Scalars['URL']>;
};

export enum StreamingMonetizationType {
  Ads = 'Ads',
  Buy = 'Buy',
  Cinema = 'Cinema',
  Flatrate = 'Flatrate',
  Free = 'Free',
  Rent = 'Rent'
}

export type StreamingOption = {
  __typename?: 'StreamingOption';
  bestOffering: StreamingOptionOffering;
  offerings: Array<StreamingOptionOffering>;
  provider?: Maybe<StreamingProvider>;
};


export type StreamingOptionProviderArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type StreamingOptionOffering = {
  __typename?: 'StreamingOptionOffering';
  links: StreamingLinks;
  price?: Maybe<Price>;
  resolution: VideoResolution;
  type: StreamingMonetizationType;
};

export type StreamingOptions = {
  country?: InputMaybe<Scalars['ID']>;
  monetizationTypes?: InputMaybe<Array<StreamingMonetizationType>>;
  streamingProviders: Array<Scalars['ID']>;
};

export type StreamingProvider = Node & {
  __typename?: 'StreamingProvider';
  iconURL: Scalars['URL'];
  /** The id of the object */
  id: Scalars['ID'];
  monetizationTypes: Array<StreamingMonetizationType>;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type StreamingResultForProvideer = {
  __typename?: 'StreamingResultForProvideer';
  bestOption: StreamingCountryOption;
  options: Array<StreamingCountryOption>;
  provider?: Maybe<StreamingProvider>;
};


export type StreamingResultForProvideerProviderArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type Tv = {
  __typename?: 'TV';
  airingToday: TvShowConnection;
  episode: Episode;
  network: Network;
  onTheAir: TvShowConnection;
  popular: TvShowConnection;
  search: TvShowConnection;
  season: Season;
  show: TvShow;
  topRated: TvShowConnection;
  trending: TvShowConnection;
  upcoming: TvShowConnection;
};


export type TvAiringTodayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TvEpisodeArgs = {
  id: Scalars['ID'];
};


export type TvNetworkArgs = {
  id: Scalars['ID'];
};


export type TvOnTheAirArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TvPopularArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TvSearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  term: Scalars['String'];
};


export type TvSeasonArgs = {
  id: Scalars['ID'];
};


export type TvShowArgs = {
  id: Scalars['ID'];
};


export type TvTopRatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TvTrendingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  timeWindow?: TimeWindow;
};


export type TvUpcomingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type TvDiscoverInput = {
  airDate?: InputMaybe<DiscoverDateFilter>;
  firstAirDate?: InputMaybe<DiscoverDateFilter>;
  networks?: InputMaybe<DiscoverIncludeFilter>;
};

export type TvShow = IStreamable & Node & {
  __typename?: 'TVShow';
  alternativeTitles: Array<AlternativeTitle>;
  backdrop?: Maybe<Scalars['URL']>;
  createdBy: Array<ICreditWithPerson>;
  credits: ICreditsWithPerson;
  episodeRunTime: Array<Scalars['Int']>;
  episodes: Array<Episode>;
  externalIds: FullExternalIds;
  firstAirDate?: Maybe<Scalars['Date']>;
  genres: Array<Genre>;
  homepage?: Maybe<Scalars['URL']>;
  /** The id of the object */
  id: Scalars['ID'];
  images: MediaImages;
  inProduction: Scalars['Boolean'];
  keywords: Array<Keyword>;
  languages: Array<Scalars['String']>;
  lastAirDate?: Maybe<Scalars['Date']>;
  lastEpisodeToAir?: Maybe<Episode>;
  name: Scalars['String'];
  networks: Array<Network>;
  nextEpisodeToAir?: Maybe<Episode>;
  numberOfEpisodes: Scalars['Int'];
  numberOfRatings: Scalars['Int'];
  numberOfSeasons: Scalars['Int'];
  originCountry: Array<Scalars['String']>;
  originalLanguage: Scalars['String'];
  originalName: Scalars['String'];
  overview: Scalars['String'];
  popularityIndex?: Maybe<Scalars['Float']>;
  poster?: Maybe<Scalars['URL']>;
  productionCompanies: Array<Network>;
  rating: Scalars['Float'];
  recommendations: TvShowConnection;
  reviews: ReviewConnection;
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  season: Season;
  seasons: Array<Season>;
  similar: TvShowConnection;
  status: Scalars['String'];
  streamingOptions?: Maybe<Array<StreamingOption>>;
  topRatedEpisode?: Maybe<Episode>;
  translations: Array<TranslationWithTranslatedMovieInfo>;
  type: Scalars['String'];
  videos: Array<Video>;
};


export type TvShowBackdropArgs = {
  size: BackdropSize;
};


export type TvShowPosterArgs = {
  size: PosterSize;
};


export type TvShowRecommendationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TvShowReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TvShowSearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']>>;
  providers: Array<Scalars['ID']>;
};


export type TvShowSeasonArgs = {
  number: Scalars['Int'];
};


export type TvShowSimilarArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TvShowStreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type TvShowConnection = {
  __typename?: 'TVShowConnection';
  edges?: Maybe<Array<Maybe<TvShowEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TvShowEdge = {
  __typename?: 'TVShowEdge';
  cursor: Scalars['String'];
  node?: Maybe<TvShow>;
};

export type TaggedImage = {
  __typename?: 'TaggedImage';
  image: AnyImage;
  media: MovieOrTv;
};

export type TaggedImageConnection = {
  __typename?: 'TaggedImageConnection';
  edges?: Maybe<Array<Maybe<TaggedImageEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TaggedImageEdge = {
  __typename?: 'TaggedImageEdge';
  cursor: Scalars['String'];
  node?: Maybe<TaggedImage>;
};

export enum TimeWindow {
  Day = 'Day',
  Week = 'Week'
}

export type TranslatedMovieInfo = {
  __typename?: 'TranslatedMovieInfo';
  overview: Scalars['String'];
  title: Scalars['String'];
};

export type TranslatedPersonInfo = {
  __typename?: 'TranslatedPersonInfo';
  biography: Scalars['String'];
};

export type TranslationWithTranslatedMovieInfo = {
  __typename?: 'TranslationWithTranslatedMovieInfo';
  info: TranslatedMovieInfo;
  iso639_1: Scalars['String'];
  iso3166_1: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  localizedLanguage?: Maybe<Scalars['String']>;
};

export type TranslationWithTranslatedPersonInfo = {
  __typename?: 'TranslationWithTranslatedPersonInfo';
  info: TranslatedPersonInfo;
  iso639_1: Scalars['String'];
  iso3166_1: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  localizedLanguage?: Maybe<Scalars['String']>;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['String'];
  iso639_1: Scalars['String'];
  iso3166_1: Scalars['String'];
  key: Scalars['String'];
  links?: Maybe<StreamingLinks>;
  name: Scalars['String'];
  site: Scalars['String'];
  size: Scalars['Int'];
  thumbnail?: Maybe<Scalars['URL']>;
  type: Scalars['String'];
};

export enum VideoResolution {
  Bluray = 'Bluray',
  Dvd = 'Dvd',
  Hd = 'Hd',
  Sd = 'Sd',
  Theatre = 'Theatre',
  UltraHd = 'UltraHd'
}

export type PopularMoviesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type PopularMoviesQuery = { __typename?: 'Query', movies: { __typename?: 'Movies', popular: { __typename?: 'MovieConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges?: Array<{ __typename?: 'MovieEdge', node?: { __typename?: 'Movie', id: string, title: string, overview: string, poster?: any | null, backdrop?: any | null } | null } | null> | null } } };

export type UpcomingMoviesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type UpcomingMoviesQuery = { __typename?: 'Query', movies: { __typename?: 'Movies', upcoming: { __typename?: 'MovieConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges?: Array<{ __typename?: 'MovieEdge', node?: { __typename?: 'Movie', id: string, title: string, overview: string, poster?: any | null, backdrop?: any | null } | null } | null> | null } } };

export type TrendingMoviesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type TrendingMoviesQuery = { __typename?: 'Query', movies: { __typename?: 'Movies', trending: { __typename?: 'MovieConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges?: Array<{ __typename?: 'MovieEdge', node?: { __typename?: 'Movie', id: string, title: string, overview: string, poster?: any | null, backdrop?: any | null } | null } | null> | null } } };

export type SearchMoviesQueryVariables = Exact<{
  term: Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
}>;


export type SearchMoviesQuery = { __typename?: 'Query', movies: { __typename?: 'Movies', search: { __typename?: 'MovieConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges?: Array<{ __typename?: 'MovieEdge', node?: { __typename?: 'Movie', id: string, title: string, overview: string, poster?: any | null, backdrop?: any | null } | null } | null> | null } } };

export type MovieListDataFragment = { __typename?: 'MovieConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges?: Array<{ __typename?: 'MovieEdge', node?: { __typename?: 'Movie', id: string, title: string, overview: string, poster?: any | null, backdrop?: any | null } | null } | null> | null };

export type MovieDataFragment = { __typename?: 'Movie', id: string, title: string, overview: string, poster?: any | null, backdrop?: any | null };

export const MovieDataFragmentDoc = gql`
    fragment MovieData on Movie {
  id
  title
  overview
  poster(size: W92)
  backdrop(size: W780)
}
    `;
export const MovieListDataFragmentDoc = gql`
    fragment MovieListData on MovieConnection {
  pageInfo {
    hasNextPage
    endCursor
  }
  edges {
    node {
      ...MovieData
    }
  }
}
    ${MovieDataFragmentDoc}`;
export const PopularMoviesDocument = gql`
    query popularMovies($first: Int, $after: String) {
  movies {
    popular(first: $first, after: $after) {
      ...MovieListData
    }
  }
}
    ${MovieListDataFragmentDoc}`;
export type PopularMoviesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PopularMoviesQuery, PopularMoviesQueryVariables>
    } & TChildProps;
export function withPopularMovies<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PopularMoviesQuery,
  PopularMoviesQueryVariables,
  PopularMoviesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PopularMoviesQuery, PopularMoviesQueryVariables, PopularMoviesProps<TChildProps, TDataName>>(PopularMoviesDocument, {
      alias: 'popularMovies',
      ...operationOptions
    });
};

/**
 * __usePopularMoviesQuery__
 *
 * To run a query within a React component, call `usePopularMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularMoviesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function usePopularMoviesQuery(baseOptions?: Apollo.QueryHookOptions<PopularMoviesQuery, PopularMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopularMoviesQuery, PopularMoviesQueryVariables>(PopularMoviesDocument, options);
      }
export function usePopularMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularMoviesQuery, PopularMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopularMoviesQuery, PopularMoviesQueryVariables>(PopularMoviesDocument, options);
        }
export type PopularMoviesQueryHookResult = ReturnType<typeof usePopularMoviesQuery>;
export type PopularMoviesLazyQueryHookResult = ReturnType<typeof usePopularMoviesLazyQuery>;
export type PopularMoviesQueryResult = Apollo.QueryResult<PopularMoviesQuery, PopularMoviesQueryVariables>;
export const UpcomingMoviesDocument = gql`
    query upcomingMovies($first: Int, $after: String) {
  movies {
    upcoming(first: $first, after: $after) {
      ...MovieListData
    }
  }
}
    ${MovieListDataFragmentDoc}`;
export type UpcomingMoviesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>
    } & TChildProps;
export function withUpcomingMovies<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpcomingMoviesQuery,
  UpcomingMoviesQueryVariables,
  UpcomingMoviesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UpcomingMoviesQuery, UpcomingMoviesQueryVariables, UpcomingMoviesProps<TChildProps, TDataName>>(UpcomingMoviesDocument, {
      alias: 'upcomingMovies',
      ...operationOptions
    });
};

/**
 * __useUpcomingMoviesQuery__
 *
 * To run a query within a React component, call `useUpcomingMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpcomingMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpcomingMoviesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useUpcomingMoviesQuery(baseOptions?: Apollo.QueryHookOptions<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>(UpcomingMoviesDocument, options);
      }
export function useUpcomingMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>(UpcomingMoviesDocument, options);
        }
export type UpcomingMoviesQueryHookResult = ReturnType<typeof useUpcomingMoviesQuery>;
export type UpcomingMoviesLazyQueryHookResult = ReturnType<typeof useUpcomingMoviesLazyQuery>;
export type UpcomingMoviesQueryResult = Apollo.QueryResult<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>;
export const TrendingMoviesDocument = gql`
    query trendingMovies($first: Int, $after: String) {
  movies {
    trending(first: $first, after: $after) {
      ...MovieListData
    }
  }
}
    ${MovieListDataFragmentDoc}`;
export type TrendingMoviesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<TrendingMoviesQuery, TrendingMoviesQueryVariables>
    } & TChildProps;
export function withTrendingMovies<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TrendingMoviesQuery,
  TrendingMoviesQueryVariables,
  TrendingMoviesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, TrendingMoviesQuery, TrendingMoviesQueryVariables, TrendingMoviesProps<TChildProps, TDataName>>(TrendingMoviesDocument, {
      alias: 'trendingMovies',
      ...operationOptions
    });
};

/**
 * __useTrendingMoviesQuery__
 *
 * To run a query within a React component, call `useTrendingMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendingMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendingMoviesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useTrendingMoviesQuery(baseOptions?: Apollo.QueryHookOptions<TrendingMoviesQuery, TrendingMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrendingMoviesQuery, TrendingMoviesQueryVariables>(TrendingMoviesDocument, options);
      }
export function useTrendingMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendingMoviesQuery, TrendingMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrendingMoviesQuery, TrendingMoviesQueryVariables>(TrendingMoviesDocument, options);
        }
export type TrendingMoviesQueryHookResult = ReturnType<typeof useTrendingMoviesQuery>;
export type TrendingMoviesLazyQueryHookResult = ReturnType<typeof useTrendingMoviesLazyQuery>;
export type TrendingMoviesQueryResult = Apollo.QueryResult<TrendingMoviesQuery, TrendingMoviesQueryVariables>;
export const SearchMoviesDocument = gql`
    query searchMovies($term: String!, $first: Int, $after: String) {
  movies {
    search(term: $term, first: $first, after: $after) {
      ...MovieListData
    }
  }
}
    ${MovieListDataFragmentDoc}`;
export type SearchMoviesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SearchMoviesQuery, SearchMoviesQueryVariables>
    } & TChildProps;
export function withSearchMovies<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SearchMoviesQuery,
  SearchMoviesQueryVariables,
  SearchMoviesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SearchMoviesQuery, SearchMoviesQueryVariables, SearchMoviesProps<TChildProps, TDataName>>(SearchMoviesDocument, {
      alias: 'searchMovies',
      ...operationOptions
    });
};

/**
 * __useSearchMoviesQuery__
 *
 * To run a query within a React component, call `useSearchMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMoviesQuery({
 *   variables: {
 *      term: // value for 'term'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useSearchMoviesQuery(baseOptions: Apollo.QueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
      }
export function useSearchMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
        }
export type SearchMoviesQueryHookResult = ReturnType<typeof useSearchMoviesQuery>;
export type SearchMoviesLazyQueryHookResult = ReturnType<typeof useSearchMoviesLazyQuery>;
export type SearchMoviesQueryResult = Apollo.QueryResult<SearchMoviesQuery, SearchMoviesQueryVariables>;
export async function popularMovies(variables: PopularMoviesQueryVariables, options?: Omit<Apollo.QueryOptions<PopularMoviesQueryVariables>, 'query' | 'variables'>): Promise<MovieListDataFragment> {
  const { data } = await getApolloClient().query<PopularMoviesQuery, PopularMoviesQueryVariables>({ variables, query: PopularMoviesDocument, ...options })
  return data.movies.popular
}
export async function upcomingMovies(variables: UpcomingMoviesQueryVariables, options?: Omit<Apollo.QueryOptions<UpcomingMoviesQueryVariables>, 'query' | 'variables'>): Promise<MovieListDataFragment> {
  const { data } = await getApolloClient().query<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>({ variables, query: UpcomingMoviesDocument, ...options })
  return data.movies.upcoming
}
export async function trendingMovies(variables: TrendingMoviesQueryVariables, options?: Omit<Apollo.QueryOptions<TrendingMoviesQueryVariables>, 'query' | 'variables'>): Promise<MovieListDataFragment> {
  const { data } = await getApolloClient().query<TrendingMoviesQuery, TrendingMoviesQueryVariables>({ variables, query: TrendingMoviesDocument, ...options })
  return data.movies.trending
}
export async function searchMovies(variables: SearchMoviesQueryVariables, options?: Omit<Apollo.QueryOptions<SearchMoviesQueryVariables>, 'query' | 'variables'>): Promise<MovieListDataFragment> {
  const { data } = await getApolloClient().query<SearchMoviesQuery, SearchMoviesQueryVariables>({ variables, query: SearchMoviesDocument, ...options })
  return data.movies.search
}