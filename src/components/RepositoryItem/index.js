const RepositoryItem = props => {
  const {eachItem} = props
  return (
    <li className="card">
      <div className="iMGHolder">
        <img
          src={`${eachItem.avatarUrl}`}
          className="img"
          alt={eachItem.name}
        />
      </div>
      <h1>{eachItem.name}</h1>
      <div className="roww">
        <div className="holerr">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            className="starr"
            alt="stars"
          />
        </div>
        <p>{eachItem.starsCount}</p>
      </div>
      <div className="roww">
        <div className="holerr">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            className="starr"
            alt="forks"
          />
        </div>
        <p>{eachItem.forksCount}</p>
      </div>
      <div className="roww">
        <div className="holerr">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            className="starr"
            alt="open issues"
          />
        </div>
        <p>{eachItem.issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
