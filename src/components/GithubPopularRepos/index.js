import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const stateObj = {
  loading: 'LOADING',
  succes: 'SUCCESS',
  failure: 'FAILURE',
  inital: 'INITAL',
}

class GithubPopularRepos extends Component {
  state = {currentid: 'ALL', currentState: stateObj.inital, modData: ''}

  componentDidMount() {
    this.getRepos()
  }

  BtnClicked = id => {
    this.setState({currentid: id}, this.getRepos)
  }

  getRepos = async () => {
    this.setState({currentState: stateObj.loading})
    const {currentid} = this.state

    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${currentid}`,
    )
    console.log(response)
    const data = await response.json()

    if (response.ok) {
      const popularRepos = data.popular_repos
      const modDataa = popularRepos.map(eachItem => ({
        id: eachItem.id,
        forksCount: eachItem.forks_count,
        issuesCount: eachItem.issues_count,
        starsCount: eachItem.stars_count,
        avatarUrl: eachItem.avatar_url,
        name: eachItem.name,
      }))
      this.setState({modData: modDataa, currentState: stateObj.succes})
    } else {
      this.setState({currentState: stateObj.failure})
    }
  }

  renderUpperPart = currentid => (
    <div className="MainDiv">
      <h1>Popular</h1>
      <div className="LongCon">
        {languageFiltersData.map(eachItem => (
          <LanguageFilterItem
            currentid={currentid}
            eachItem={eachItem}
            BtnClicked={this.BtnClicked}
            key={eachItem.id}
          />
        ))}
      </div>
    </div>
  )

  renderLowerPart = currentState => {
    const {modData} = this.state
    console.log(modData)
    switch (currentState) {
      case stateObj.inital:
        return null
      case stateObj.loading:
        return (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )
      case stateObj.succes:
        return (
          <ul className="CardsConHolger">
            {modData.map(eachItem => (
              <RepositoryItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )
      default:
        return (
          <img
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
          />
        )
    }
  }

  render() {
    const {currentid, currentState} = this.state

    return (
      <>
        {this.renderUpperPart(currentid)}
        <div className="LowerCon">{this.renderLowerPart(currentState)}</div>
      </>
    )
  }
}

export default GithubPopularRepos
