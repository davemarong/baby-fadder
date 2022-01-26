import { Profile } from "../../../types/Types";
import { FilterCategories } from "../../../types/Types";
/**
 * Function for filtering search result by query
 * @param {Profile} profileData Data from all profiles
 * @param {string} query User query search input
 * @param {FilterCategories} filterCategories All categories user can filter from (gender, size, color)
 * @return {Profile} A filtered version of profileData
 */
export const filterSearchItems = (
  profileData: Profile,
  query: string,
  filterCategories: FilterCategories
): Profile => {
  let searchItems: any;
  searchItems = filterQuerySearch(profileData, query);
  if (filterCategories.gender) {
    searchItems = filterGenderSearch(searchItems, filterCategories);
  }
  if (filterCategories.color) {
    searchItems = filterColorSearch(searchItems, filterCategories);
  }
  if (filterCategories.size) {
    searchItems = filterSizeSearch(searchItems, filterCategories);
  }
  console.log(searchItems);
  return searchItems;
};
/**
 * Function for filtering search result by query
 * @param {Profile} profileData Data from all profiles
 * @param {string} query User query search input
 * @return {Profile} A filtered version of profileData
 */
export const filterQuerySearch = (
  profileData: Profile,
  query: string
): Profile => {
  return profileData.map((profile: any) => {
    return {
      ...profile,
      ad: profile.ad.filter((ad: any) =>
        ad.title.toLowerCase().includes(query.toLowerCase())
      ),
    };
  });
};
/**
 * Function for filtering search result by gender
 * @param {Profile} profileData Data from all profiles
 * @param {FilterCategories} filterCategories All categories user can filter from (gender, size, color)
 * @return {Profile} A filtered version of profileData
 */
export const filterGenderSearch = (
  profileData: Profile,
  filterCategories: FilterCategories
): Profile => {
  return profileData.map((profile: any) => {
    return {
      ...profile,
      ad: profile.ad.filter(
        (ad: any) =>
          ad.gender.toLowerCase() === filterCategories.gender.toLowerCase()
      ),
    };
  });
};
/**
 * Function for filtering search result by color
 * @param {Profile} profileData Data from all profiles
 * @param {FilterCategories} filterCategories All categories user can filter from (gender, size, color)
 * @return {Profile} A filtered version of profileData
 */
export const filterColorSearch = (
  profileData: Profile,
  filterCategories: FilterCategories
): Profile => {
  return profileData.map((profile: any) => {
    return {
      ...profile,
      ad: profile.ad.filter(
        (ad: any) =>
          ad.color.toLowerCase() === filterCategories.color.toLowerCase()
      ),
    };
  });
};
/**
 * Function for filtering search result by size
 * @param {Profile} profileData Data from all profiles
 * @param {FilterCategories} filterCategories All categories user can filter from (gender, size, color)
 * @return {Profile} A filtered version of profileData
 */
export const filterSizeSearch = (
  profileData: Profile,
  filterCategories: FilterCategories
): Profile => {
  return profileData.map((profile: any) => {
    return {
      ...profile,
      ad: profile.ad.filter(
        (ad: any) =>
          ad.size.toLowerCase() === filterCategories.size.toLowerCase()
      ),
    };
  });
};
