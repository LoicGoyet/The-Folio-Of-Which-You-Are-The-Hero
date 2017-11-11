import React from 'react'

import { connect } from 'react-redux'
import * as translationAction from '../../actions/translation'

import LangGroup from '../presentational/langGroup'

const mapStateToProps = (state, ownProps) => {
  return {
    activeLang: state.translation.lang,
    langs: Object.keys(state.translation).filter(key => key != 'lang'),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  switchLang: lang => dispatch(translationAction.translationLanguageSet(lang)),
})

const LangPicker = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LangGroup)

export default LangPicker