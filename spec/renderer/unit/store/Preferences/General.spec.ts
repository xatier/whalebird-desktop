import General, { GeneralState, MUTATION_TYPES } from '@/store/Preferences/General'

describe('Preferences/General', () => {
  let state: GeneralState
  beforeEach(() => {
    state = {
      general: {
        sound: {
          fav_rb: true,
          toot: true
        },
        timeline: {
          cw: false,
          nsfw: false,
          hideAllAttachments: false
        },
        other: {
          launch: false
        }
      },
      loading: false
    }
  })

  describe('mutations', () => {
    it('updateGeneral', () => {
      General.mutations![MUTATION_TYPES.UPDATE_GENERAL](state, {
        sound: {
          fav_rb: false,
          toot: false
        }
      })
      expect(state.general.sound.fav_rb).toEqual(false)
      expect(state.general.sound.toot).toEqual(false)
    })
  })
})
