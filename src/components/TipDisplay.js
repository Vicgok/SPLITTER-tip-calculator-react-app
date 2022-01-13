import '../styles/tipDisplay.scss'
import Button from './Button'

const TipDisplay = props => {
  const userInputHandler = () => {
    props.onUserInput()
  }
  return (
    <div className="card__tip-display-wrap">
      <div className="card__tip-amt-display">
        <p>
          Tip Amount <span>/ person</span>
        </p>
        <p>${props.tipAmountPerPerson.toFixed(2)}</p>
      </div>
      <div className="card__tip-tot-display">
        <p>
          Total <span>/ person</span>
        </p>
        <p>${props.billAmountPerPerson.toFixed(2)}</p>
      </div>
      <Button onUserInput={userInputHandler}>RESET</Button>
    </div>
  )
}

export default TipDisplay
