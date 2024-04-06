import { StaticImageData } from "next/image";

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

export interface Photos {
  id: number;
  src: StaticImageData;
  alt: string;
  width?: number;
}

export interface Testimonials {
  id: number;
  description: string;
  name: string;
  title: string;
}

export interface UpcomingEvents {
  id: number;
  title: string;
  description: string;
  isFeatured: Boolean;
}
