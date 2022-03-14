export type Ad = {
  profileId: number;
  title: string;
  id: number;
  description: string;
  brand: string;
  price: number;
  gender: string;
  size: string;
  color: string;
  clothingType: string;
  img: string;
  fabric: string;
  contactInfo: string;
};
export type CurrentAd = {
  name: string;
  profileId: number;
  location: string;
  title: string;
  id: number;
  description: string;
  brand: string;
  price: number;
  gender: string;
  size: string;
  color: string;
  clothingType: string;
  img: string;
  fabric: string;
  contactInfo: string;
};
export type Favorites = {
  id: number;
  profileId: number;
};
export type AllProfiles = {
  name: string;
  id: number;
  ad: Ad[];
  location: string;
  favorites: Favorites[];
}[];

export type Profile = {
  name: string;
  id: number;
  ad: Ad[];
  location: string;
  favorites: Favorites[];
};

export type FilterCategories = {
  gender: string;
  size: string;
  color: string;
  location: string;
  fabric: string;
};
export type FilterOption = {
  title: string;
  titleNorwegian: string;
  options: {
    label: string;
    value: string;
  }[];
};
