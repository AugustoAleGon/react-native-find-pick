// ES Modules syntax
import Unsplash from 'unsplash-js/native'

export const unsplashApi = new Unsplash({
  applicationId: 'ecbc0273b90a4b1b1cea01fa2472a6ecbc6345765eb6c97d210faa81df56cbf1',
  secret: 'c8e062d15aa1f3c7503775a96b9368e3a2cbc63186a640a082ae752a9750da3b',
  callbackUrl: 'https://find-pick-example.com/auth/unplash/callback'
})
