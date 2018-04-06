import unsplash from '../apiUtils'

export const getSearchPic = async (param) => {
  let responsePic = await unsplash.search.photos(param)
  return responsePic
}
