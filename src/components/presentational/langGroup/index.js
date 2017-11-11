import React from 'react'
import './style.css'

const LangGroup = ({ activeLang, langs, switchLang, ...props }) => (
  <div className="lang-group">
    {langs.map(lang => (
      <button
        key={lang}
        className={`lang-group__btn ${lang == activeLang ? 'lang-group__btn--active' : ''}`}
        onClick={e => switchLang(lang)}
      >
        {lang}
      </button>
    ))}
  </div>
)

export default LangGroup