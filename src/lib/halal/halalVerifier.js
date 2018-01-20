import { find } from 'lodash';
import halalList from '../../../data/halalList.json';
import stopWord from '../../../data/stopWord.json';

export const halalCheckType = {
  LOGO: 'LOGO',
  TEXT: 'TEXT',
};

function isHalalLogo (query) {
  return halalList.includes(query);
}

function isHalalText (query) {
  return find(halalList, o => o.toLowerCase().includes(query));
}

export const isHalal = (type, query) => {
  const strippedQuery = query.replace(/[^\w\s]/gi, '').toLowerCase();
  if (stopWord.includes(strippedQuery)) return false;
  switch (type) {
  case halalCheckType.LOGO: return isHalalLogo(strippedQuery);
  case halalCheckType.TEXT: return isHalalText(strippedQuery);
  default:
    console.error('Error in checking if halal: Invalid type passed');
    return false;
  }
};

