import { isHalalFromCompany, isHalalFromFoodPlace, isHalalFromBrand, isHalalLogo } from './halalVerifier'

jest.mock('../../../data/foodPlaceList.json', () =>
  ['halal']
)

jest.mock('../../../data/brandList.json', () =>
  [
    {
      'HalalStatus': 'halal',
      'ProductName': 'ProductName',
      'UPC': 'UPC',
      'Category': 'Category',
      'ProductBrand': 'HalalProduct'
    }
  ]
)

jest.mock('../../../data/companyList.json', () =>
  [
    'halalCompany'
  ]
)
// jest.mock('../../../data/stopWord.json')
jest.mock('../../../data/diacriticsRemovalMap.json', () =>
  [
    {'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g}
  ]
)

describe('halalVerifier()', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('isHalalFromFoodPlace', () => {
    it('should return true if value exists in list', () => {
      const inputs = ['halal']
      inputs.forEach(input => expect(isHalalFromFoodPlace(input)).toEqual(true))
    })
    it('should return false if value exists in list', () => {
      const inputs = ['not halal']
      inputs.forEach(input => expect(isHalalFromFoodPlace(input)).toEqual(false))
    })
  })

  describe('isHalalFromCompany', () => {
    it('should return true if value exists in list', () => {
      const inputs = [
        'halalCompany'
      ]
      inputs.forEach(input => expect(isHalalFromCompany(input)).toEqual(true))
    })
    it('should return false if value exists in list', () => {
      const inputs = [
        'notHalalCompany'
      ]
      inputs.forEach(input => expect(isHalalFromCompany(input)).toEqual(false))
    })
  })

  describe('isHalalFromBrand', () => {
    it('should return true if value exists in list', () => {
      const inputs = [
        'HalalProduct',
        'halalProduct'
      ]
      inputs.forEach(input => expect(isHalalFromBrand(input)).toEqual(true))
    })
    it('should return false if value exists in list', () => {
      const inputs = [
        'notHalalProduct'
      ]
      inputs.forEach(input => expect(isHalalFromBrand(input)).toEqual(false))
    })
  })

  describe('isHalalLogo()', () => {
    it('should return false if value exists in list', () => {
      const inputs = [
        'HalalProduct'
      ]
      inputs.forEach(input => expect(isHalalLogo(input)).toEqual(true))
    })
    it('should return false if value exists in list', () => {
      const inputs = [
        'NotHalalProduct'
      ]
      inputs.forEach(input => expect(isHalalLogo(input)).toEqual(false))
    })
  })
})
