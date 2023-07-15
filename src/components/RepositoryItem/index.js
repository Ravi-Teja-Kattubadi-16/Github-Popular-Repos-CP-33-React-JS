// Write your code here
// avatarUrl: "https://avatars.githubusercontent.com/u/9892522?v=4",
// forksCount: 32881,
// id: 28457823,
// issuesCount: 213,
// name: "freeCodeCamp",
// starsCount: 369863
import './index.css'

const RepositoryItem = props => {
  const eachRepositoryItem = props
  const {
    avatarUrl,
    forksCount,
    issuesCount,
    name,
    starsCount,
  } = eachRepositoryItem

  return (
    <li className="repository-item-container">
      <img src={avatarUrl} alt="" className="repository-image" />
      <div className="details-container">
        <h1 className="repository-heading"> {name} </h1>
        <div className="repository-details-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="repository-details-image"
          />
          <p className="repository-details-description"> {starsCount} </p>
        </div>
        <div className="repository-details-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="repository-details-image"
          />
          <p className="repository-details-description"> {forksCount} </p>
        </div>
        <div className="repository-details-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
            alt="open issues"
            className="repository-details-image"
          />
          <p className="repository-details-description"> {issuesCount} </p>
        </div>
      </div>
    </li>
  )
}
export default RepositoryItem
