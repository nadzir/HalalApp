// From MUIS singapore
import foodPlaceList from '../../../data/foodPlaceList.json'
// From Muslim consumer group product list
import brandList from '../../../data/brandList.json'
// From http://www.singaporehalaldirectory.com/company/list/all/1
import companyList from '../../../data/companyList.json'
import stopWord from '../../../data/stopWord.json'
import diacriticsRemovalMap from '../../../data/diacriticsRemovalMap.json'

export const halalCheckType = {
  LOGO: 'LOGO',
  TEXT: 'TEXT'
}

export const isHalalFromFoodPlace = (foodPlace) => {
  return foodPlaceList.includes(foodPlace)
}

export const isHalalFromCompany = (company) => {
  return companyList.some((coy) => {
    const coyText = coy.replace(/[^\w\s]/gi, '')
    const lowerCaseText = coyText.toLowerCase()
    return lowerCaseText.startsWith(company.toLowerCase())
  })
}

export const isHalalFromBrand = (brand) => {
  return Object.keys(brandList).some((k) => {
    const lowerCaseBrand = brandList[k].ProductBrand.toLowerCase()
    const halalStatusBrand = brandList[k].HalalStatus
    const lowerCaseInput = brand.toLowerCase()
    return lowerCaseBrand.startsWith(lowerCaseInput) && halalStatusBrand === 'halal'
  })
}

export const isHalalLogo = (query) => {
  return isHalalFromCompany(query) ||
         isHalalFromFoodPlace(query) ||
         isHalalFromBrand(query)
}

export const isHalalText = (query) => {
  return false
}

export const removeDiacritics = (str) => {
  diacriticsRemovalMap.map((d) => {
    str = str.replace(d.letters, d.base)
    return true
  })
  return str
}

export const isHalal = (type, query) => {
  const strippedQuery = removeDiacritics(query)
    .replace(/[^\w\s]/gi, '')
    .toLowerCase()

  if (stopWord.includes(strippedQuery)) return false
  switch (type) {
    case halalCheckType.LOGO: return isHalalLogo(strippedQuery)
    case halalCheckType.TEXT: return isHalalText(strippedQuery)
    default:
      console.error('Error in checking if halal: Invalid type passed')
      return false
  }
}
