export const TRANSLATION_LANGUAGE_SET = 'TRANSLATION_LANGUAGE_SET'
export const translationLanguageSet = lang => {
  return {
    type: TRANSLATION_LANGUAGE_SET,
    lang: lang,
  }
}
