// Write your code here
// import {Component} from 'react'
import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguage} = props
  const {language} = eachLanguage
  const onClickLanguageTab = () => {}

  return (
    <li className="filter-item">
      <button
        type="button"
        className="language-button active-language-tab"
        onClick={onClickLanguageTab}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
