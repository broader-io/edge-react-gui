// @flow
import type { Disklet } from 'disklet'

import { TUTORIAL } from '../constants/constantSettings.js'

type UserTutorialList = {|
  walletListSlideTutorialCount: number,
  hasAgreedToTokensTerms: boolean
|}

export const getUserTutorialList = async (disklet: Disklet): Promise<UserTutorialList> => {
  try {
    return JSON.parse(await disklet.getText(TUTORIAL))
  } catch (error) {
    console.log(error)
    return {
      walletListSlideTutorialCount: 0,
      hasAgreedToTokensTerms: false
    }
  }
}

export const setUserTutorialList = async (data: UserTutorialList, disklet: Disklet): Promise<void> => await disklet.setText(TUTORIAL, JSON.stringify(data))
