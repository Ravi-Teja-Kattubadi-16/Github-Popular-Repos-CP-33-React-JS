import {Component} from 'react'
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

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    repositoryItemsList: [],
    activeLanguageTab: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getPopularRepos()
  }

  getPopularRepos = async () => {
    const {activeLanguageTab} = this.state
    const githubReposApiUrl = `https://apis.ccbp.in/popular-repos?language=${activeLanguageTab}`

    const apiResponse = await fetch(githubReposApiUrl)
    const apiData = await apiResponse.json()

    const updatedRepositoryList = apiData.popular_repos.map(eachRepository => ({
      avatarUrl: eachRepository.avatar_url,
      forksCount: eachRepository.forks_count,
      id: eachRepository.id,
      issuesCount: eachRepository.issues_count,
      name: eachRepository.name,
      starsCount: eachRepository.stars_count,
    }))

    this.setState({
      repositoryItemsList: updatedRepositoryList,
    })
  }

  render() {
    const {repositoryItemsList} = this.state

    console.log(`result->${repositoryItemsList}`)

    return (
      <div className="git-hub-popular-repos-container">
        <h1 className="popular-heading"> Popular </h1>
        <ul className="language-filter-container">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              key={eachLanguage.id}
              eachLanguage={eachLanguage}
            />
          ))}
        </ul>
        <ul className="repository-items-container">
          {repositoryItemsList.map(eachRepositoryItem => (
            <RepositoryItem
              key={eachRepositoryItem.id}
              eachRepositoryItem={JSON.stringify(eachRepositoryItem)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
