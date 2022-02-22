export const defaultValue_Ad = {
  title: "",
  profileId: 0,
  id: 0,
  description: "",
  brand: "",
  price: 0,
  gender: "",
  size: "",
  color: "",
  clothingType: "",
  img: "",
  fabric: "",
  contactInfo: "",
};
export const defaultValue_CurrentAd = {
  name: "Ukjent",
  location: "Ukjent",
  profileId: 0,
  title: "",
  id: 0,
  description: "",
  brand: "",
  price: 0,
  gender: "",
  size: "",
  color: "",
  clothingType: "",
  img: "",
  fabric: "",
  contactInfo: "",
};
export const defaultValue_favorites = {
  profileId: 0,
  id: 100,
};
export const defaultValue_Favorites = {
  0: [0],
};
export const defaultValue_Profile = {
  name: "",
  location: "",
  id: 0,
  ad: [defaultValue_Ad],
  favorites: [defaultValue_favorites],
};
export const defaultValue_FilterCategories = {
  gender: "",
  size: "",
  color: "",
  fabric: "",
  location: "",
};

export const defaultValue_filterOption = {
  title: "",
  titleNorwegian: "string",
  options: [
    {
      label: "",
      value: "",
    },
  ],
};
