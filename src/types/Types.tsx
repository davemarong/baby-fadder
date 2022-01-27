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
};

export type Profile = {
  name: string;
  profileId: number;
  ad: Ad[];
}[];

export type FilterCategories = {
  gender: string;
  size: string;
  color: string;
};
