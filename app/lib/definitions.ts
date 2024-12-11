export type Image = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export type AnimeImage = {
  jpg: Image;
  webp: Image;
}

export type TopAnime = {
  mal_id: number;
  url: string;
  images: AnimeImage;
  approved: boolean;
  title: string;
  status: string;
  rank: number;
}

export type AnimePagination = {
  last_visible_page: number;
  has_next_page: boolean;
  items: {
    count: number;
    total: number;
    per_page: number;
  }
}

export type AnimeFullInfo = {
  mal_id: number;
  images: AnimeImage;
  title: string;
  status: string;
  score: number;
  rank: number;
  synopsis: string;
}
