import {
  TRANSLATION_LANGUAGE_SET,
} from '../actions/translation'

const defaultState = {
  'lang': 'fr',
  'fr': {
    'entrance.title': 'l\'Entrée',
    'entrance.corridorLeft.direction': 'Se diriger vers le couloir de gauche',
  },
  'en': {
    'entrance.title': 'Entrance',
    'entrance.corridorLeft.direction': 'Go to the left corridor',
  },
}

const translation = (state = defaultState, action) => {
  switch (action.type) {
    case TRANSLATION_LANGUAGE_SET:
      return {
        ...state,
        'lang': action.lang,
      }

    default:
      return state
  }
}

export default translation