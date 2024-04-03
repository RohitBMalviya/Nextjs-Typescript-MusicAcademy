export interface data {
  id: number;
  menuTitle: string;
  link: string;
}

export interface MusicCard {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export interface Choices {
  id: number;
  title: string;
  description: string;
}
