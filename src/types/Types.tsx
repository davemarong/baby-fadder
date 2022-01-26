export type Profile = {
  name: string;
  id: number;
  ad: {
    title: string;
    description: string;
    brand: string;
    price: number;
    gender: string;
    size: string;
    color: string;
    clothingType: string;
    img: string;
  }[];
}[];

export type Ad = {
  title: string;
  description: string;
  brand: string;
  price: number;
  gender: string;
  size: string;
  color: string;
  clothingType: string;
  img: string;
};

export type FilterCategories = {
  gender: string;
  size: string;
  color: string;
};
