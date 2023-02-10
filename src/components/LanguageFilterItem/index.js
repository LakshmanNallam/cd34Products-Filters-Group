import './index.css'

const LanguageFilterItem = props => {
  const {currentid, eachItem, BtnClicked} = props

  const {id, language} = eachItem

  const BtnClickedCall = () => {
    BtnClicked(id)
  }
  return (
    <button
      type="button"
      className={currentid === id ? 'btmm BTnClicked' : 'btmm'}
      onClick={BtnClickedCall}
    >
      <p>{language}</p>
    </button>
  )
}

export default LanguageFilterItem
