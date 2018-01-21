// From MUIS singapore
import foodPlaceList from '../../../data/foodPlaceList.json';
// From Muslim consumer group product list
import brandList from '../../../data/brandList.json';
import stopWord from '../../../data/stopWord.json';
import diacriticsRemovalMap from '../../../data/diacriticsRemovalMap.json';

export const halalCheckType = {
  LOGO: 'LOGO',
  TEXT: 'TEXT',
};

function isHalalFromFoodPlace(foodPlace) {
  return foodPlaceList.includes(foodPlace);
}

function isHalalFromBrand(brand) {
  return Object.keys(brandList).some((k) => {
    const lowerCaseBrand = brandList[k].ProductBrand.toLowerCase();
    const halalStatusBrand = brandList[k].HalalStatus;
    return lowerCaseBrand.startsWith(brand) && halalStatusBrand === 'halal';
  });
}

function isHalalLogo (query) {
  return isHalalFromFoodPlace(query) || isHalalFromBrand(query);
}

function isHalalText (query) {
  return false;
}

function removeDiacritics (str) {
  diacriticsRemovalMap.map((d) => { 
    str = str.replace(d.letters, d.base); 
    return true;
  });
  return str;
}

export const isHalal = (type, query) => {
  const strippedQuery = removeDiacritics(query)
    .replace(/[^\w\s]/gi, '')
    .toLowerCase();

  if (stopWord.includes(strippedQuery)) return false;
  switch (type) {
  case halalCheckType.LOGO: return isHalalLogo(strippedQuery);
  case halalCheckType.TEXT: return isHalalText(strippedQuery);
  default:
    console.error('Error in checking if halal: Invalid type passed');
    return false;
  }
};

