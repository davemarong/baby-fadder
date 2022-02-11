// Imports

// Types
import { AllProfiles } from "../../../types/Types";
import { FilterCategories } from "../../../types/Types";
type FilterCategoriesDynamicProperty = {
  [key: string]: string;
};

/**
 * Function for filtering search result by query
 * @param {AllProfiles} profileData Data from all profiles
 * @param {string} query User query search input
 * @param {FilterCategories} filterCategories All categories user can filter from (gender, size, color)
 * @return {AllProfiles} A filtered version of profileData
 */
export const filterSearchItems = (
  profileData: AllProfiles,
  query: string,
  filterCategories: FilterCategoriesDynamicProperty
): AllProfiles => {
  let searchItems = profileData;
  if (query) {
    searchItems = filterQuerySearch(profileData, query);
  }
  Object.keys(filterCategories).forEach((category) => {
    if (filterCategories[category]) {
      searchItems = filterCategorySearch(
        searchItems,
        filterCategories,
        category
      );
    }
  });

  return searchItems;
};

/**
 * Function for filtering search result by categories
 * @param {AllProfiles} profileData Data from all profiles
 * @param {FilterCategories} filterCategories All categories user can filter from (gender, size, color...)
 * @param {string} property Dynamic property/bracket notation for the filterCategories object
 * @return {AllProfiles} A filtered version of profileData
 */
export const filterCategorySearch = (
  profileData: AllProfiles,
  filterCategories: FilterCategoriesDynamicProperty,
  property: string
): AllProfiles => {
  return profileData.map((profile: any) => {
    return {
      ...profile,
      ad: profile.ad.filter(
        (ad: any) =>
          ad[property].toLowerCase() ===
          filterCategories[property].toLowerCase()
      ),
    };
  });
};

/**
 * Function for filtering search result by query
 * @param {AllProfiles} profileData Data from all profiles
 * @param {string} query User query search input
 * @return {AllProfiles} A filtered version of profileData
 */
export const filterQuerySearch = (
  profileData: AllProfiles,
  query: string
): AllProfiles => {
  return profileData.map((profile: any) => {
    return {
      ...profile,
      ad: profile.ad.filter((ad: any) =>
        ad.title.toLowerCase().includes(query.toLowerCase())
      ),
    };
  });
};
