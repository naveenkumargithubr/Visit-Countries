import './index.css'

const VisitedCountry = props => {
  const {countryDetails, removeVisitedCountry} = props
  const {id, name, imageUrl, isVisited} = countryDetails
  console.log(name, isVisited)

  const onRemoveClick = () => {
    removeVisitedCountry(id)
  }
  return (
    <li className="flag-img-bg-container">
      <img src={imageUrl} className="flag-img" alt="thumbnail" />
      <div className="country-button-bg-container">
        <p className="visited-country">{name}</p>
        <button onClick={onRemoveClick} className="remove-btn" type="button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
