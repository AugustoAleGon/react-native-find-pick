import {unsplashApi} from '../apiUtils'
import { toJson } from 'unsplash-js/src/unsplash'

export const getSearchPic = async (param) => {
  let responsePic = toJson(await unsplashApi.search.photos(param))
  let resolvePic = await responsePic
  console.log('This is my data: ', resolvePic)
  return responsePic
}
