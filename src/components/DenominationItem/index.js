import './index.css'

const DenominationButton = props => {
  const {btnDetails, removeAmount} = props
  const {id, value} = btnDetails

  const withdrawAmount = () => {
    removeAmount(id, value)
  }

  return (
    <li>
      <button type="button" className="denom-btn" onClick={withdrawAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationButton
