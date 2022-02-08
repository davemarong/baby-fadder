export type Ad = {
  name: string;
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
  location: string;
  fabric: string;
};

export type Profile = {
  name: string;
  profileId: number;
  ad: Ad[];
  location: string;
}[];

export type ProfileObject = {
  name: string;
  profileId: number;
  ad: Ad[];
  location: string;
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
