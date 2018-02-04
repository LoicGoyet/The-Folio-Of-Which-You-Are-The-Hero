import React from 'react'
import { createComponent, createComponentWithProxy } from 'react-fela'
import { langGroup, langGroupBtn } from './style'

const LangGroup = createComponent(langGroup)
const LangGroupBtn = createComponentWithProxy(langGroupBtn)

export default ({ activeLang, langs, switchLang, ...props }) => (
  <LangGroup>
    {langs.map(lang => (
      <LangGroupBtn
        key={lang}
        active={lang == activeLang}
        onClick={e => switchLang(lang)}
      >
        {lang}
      </LangGroupBtn>
    ))}
  </LangGroup>
)
